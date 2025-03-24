import React, { useState, useContext, useEffect, useCallback } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSpinner } from 'react-icons/fa';
import { PaystackButton } from 'react-paystack';
import { getAuth } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import emptyCartImage from '../Assets/Images/shopping-cart.png';
import { db } from '../firebaseConfig';
import emailjs from 'emailjs-com';

// Function to format currency
const formatCurrency = (number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(number);

// Helper to build a summary of order items with rental details included
const buildOrderItemsSummary = (cartItems) => {
  return cartItems
    .map(item => {
      if (item.type === "rental") {
        return `${item.name} (Rental: ${item.rentalDates.start} to ${item.rentalDates.end}, Duration: ${item.rentalDuration} days, Qty: ${item.quantity})`;
      } else {
        return `${item.name} (Qty: ${item.quantity})`;
      }
    })
    .join(', ');
};

const sendConfirmationEmail = async (orderDetails) => {
  const templateParams = {
    customer_name: orderDetails.name,
    customer_email: orderDetails.email,
    // Use the built summary string so rental details are included in the email
    order_items: buildOrderItemsSummary(orderDetails.cart),
    order_total: formatCurrency(orderDetails.total),
    order_id: orderDetails.id,
    order_address: orderDetails.address,
    order_state: orderDetails.state,
    order_city: orderDetails.city,
    order_country: orderDetails.country,
    order_phone: orderDetails.phone,
    owner_email: 'neonbackdrops@gmail.com',
  };

  try {
    const customerResponse = await emailjs.send(
      process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
      process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAIL_JS_USER_ID
    );
    console.log('Customer email sent successfully:', customerResponse);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const CheckoutPage = () => {
  const { cart, calculateTotal, clearCart } = useContext(CartContext);
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    state: '',
    city: '',
    country: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch user info on mount
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
      setUserId(user.uid);
    } else {
      setUserEmail('user@example.com');
    }
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full Name is required.';
    if (!formData.address) newErrors.address = 'Shipping Address is required.';
    if (!formData.state) newErrors.state = 'State is required.';
    if (!formData.city) newErrors.city = 'Town/City is required.';
    if (!formData.country) newErrors.country = 'Country/Region is required.';
    if (!formData.phone) newErrors.phone = 'Phone Number is required.';
    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const handleOrderSave = async () => {
    try {
      // Include the userId in the order document
      await addDoc(collection(db, 'orders'), {
        userId: userId,
        name: formData.name,
        email: userEmail,
        address: formData.address,
        state: formData.state,
        city: formData.city,
        country: formData.country,
        phone: formData.phone,
        // Save the full cart with rental details if applicable
        cart: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          type: item.type,
          rentalDates: item.type === "rental" ? item.rentalDates : null,
          rentalDuration: item.type === "rental" ? item.rentalDuration : null,
        })),
        total: calculateTotal(),
        timestamp: new Date(),
      });
      console.log('Order saved successfully!');
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  const componentProps = {
    email: userEmail,
    amount: calculateTotal() * 100,
    metadata: {
      name: formData.name,
      phone: formData.phone,
    },
    publicKey: 'pk_live_2848a5968ca34955fc5085b263a8d970730df23c',
    text: 'Complete Purchase',
    onSuccess: async () => {
      if (isFormValid) {
        setLoading(true);
        // Include rental details in the order details mapping
        const orderDetails = {
          name: formData.name,
          email: userEmail,
          userId: userId, // Include the user ID here
          cart: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            type: item.type,
            rentalDates: item.type === "rental" ? item.rentalDates : null,
            rentalDuration: item.type === "rental" ? item.rentalDuration : null,
          })),
          total: calculateTotal(),
          address: formData.address,
          state: formData.state,
          city: formData.city,
          country: formData.country,
          phone: formData.phone,
        };
        await handleOrderSave();
        await sendConfirmationEmail(orderDetails);
        clearCart();
        setLoading(false);
        navigate('/order-confirmation', { state: orderDetails });
      } else {
        alert('Please fill in the required shipping details.');
      }
    },
    onClose: () => alert('Payment was not completed. Please try again.'),
  };

  const handleChange = e => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [id]: '' }));
  };

  return (
    <div className="relative max-w-7xl mx-auto px-6 py-8 space-y-2 mb-40">
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <FaSpinner className="text-white text-5xl animate-spin" />
          <p className="mt-4 text-white text-xl">Processing your order...</p>
        </div>
      )}
      <div className="text-gray-500 text-sm mb-2 mt-20">Home / Checkout</div>
      <div className="border-b border-gray-300 pb-2 mb-10">
        <h1 className="text-4xl font-bold text-gray-800">CHECKOUT</h1>
      </div>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center space-y-6 py-10">
          <img src={emptyCartImage} alt="Empty Cart" className="w-48 h-48 object-contain opacity-80" />
          <p className="text-lg text-gray-700 font-medium">Oops! Your cart is empty.</p>
          <button
            onClick={() => navigate('/shop')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Order Summary</h2>
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-grow ml-4">
                  <h3 className="text-xl text-gray-700">{item.name}</h3>
                  {item.type === "rental" ? (
                    <div className="text-sm text-gray-500">
                      <p>Rental Duration: {item.rentalDuration} days</p>
                      <p>Rental Dates: {item.rentalDates.start} to {item.rentalDates.end}</p>
                      <p>Total: {formatCurrency(item.price * item.rentalDuration * item.quantity)}</p>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">
                      <p>Price: {formatCurrency(item.price)}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Total: {formatCurrency(item.discountedPrice * item.quantity)}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="mt-6 space-y-4">
              <h2 className="text-xl font-mulish text-gray-700">Total: {formatCurrency(calculateTotal())}</h2>
              <p className="text-xl font-mulish text-green-500">{formatCurrency(calculateTotal())}</p>
            </div>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Shipping Information</h2>
            <form className="space-y-4">
              {['name', 'address', 'state', 'city', 'country', 'phone'].map(field => (
                <div key={field}>
                  <label htmlFor={field} className="block mb-1 text-gray-600 capitalize">
                    {field.replace('_', ' ')}
                  </label>
                  <input
                    type="text"
                    id={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="border rounded-md px-3 py-2 w-full text-gray-700"
                  />
                  {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                </div>
              ))}
            </form>
          </div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => navigate('/cart')}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <FaArrowLeft className="mr-2" /> Back to Cart
            </button>
            <PaystackButton
              className={`py-2 px-6 rounded-md ${isFormValid ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              {...componentProps}
              disabled={!isFormValid}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
