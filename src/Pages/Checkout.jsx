import React, { useState, useContext, useEffect, useCallback } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate} from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { PaystackButton } from 'react-paystack';
import { getAuth } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const CheckoutPage = () => {
  const { cart, calculateTotal, clearCart } = useContext(CartContext);
  const [userEmail, setUserEmail] = useState('');
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
  const [shippingCost, setShippingCost] = useState(0);  // State for shipping cost
  const navigate = useNavigate();

  // Fetch user email on page load
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    } else {
      setUserEmail('user@example.com');
    }
  }, []);

  // Fetch the shipping cost from localStorage when the component mounts
  useEffect(() => {
    const storedShippingCost = localStorage.getItem('shippingCost');
    if (storedShippingCost) {
      setShippingCost(parseFloat(storedShippingCost));
    }
  }, []);

  // Validate the shipping form
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

  // Save order details to Firestore
  const handleOrderSave = async () => {
    try {
      await addDoc(collection(db, 'orders'), {
        name: formData.name,
        email: userEmail,
        address: formData.address,
        state: formData.state,
        city: formData.city,
        country: formData.country,
        phone: formData.phone,
        cart: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: calculateTotal() - shippingCost, // Only the products' total, no shipping yet
        shippingCost: shippingCost, // Save shipping cost separately
        grandTotal: calculateTotal() + shippingCost, // Grand total includes shipping cost
        timestamp: new Date(),
      });
      console.log('Order saved successfully!');
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  // Paystack configuration
  const componentProps = {
  email: userEmail,
  amount: (calculateTotal() + shippingCost) * 100,
  metadata: {
    name: formData.name,
    phone: formData.phone,
  },
  publicKey: 'pk_test_b4bac9b446ecea10d7db39285bfaba19c20f9a7d',
  text: 'Complete Purchase',
  onSuccess: async () => {
    if (isFormValid) {
      const orderDetails = {
        name: formData.name,
        email: userEmail,
        cart: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: calculateTotal() - shippingCost,
        shippingCost: shippingCost,
        grandTotal: calculateTotal() + shippingCost,
      };
      await handleOrderSave();
      clearCart();
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
    setErrors(prevErrors => ({ ...prevErrors, [id]: '' })); // Clear error for this field
  };

  const formatCurrency = number =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(number);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-2">
      <div className="text-gray-500 text-sm mb-2 mt-20">Home / Checkout</div>
      <div className="border-b border-gray-300 pb-2 mb-10">
        <h1 className="text-4xl font-bold text-gray-800">CHECKOUT</h1>
      </div>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty!</p>
      ) : (
        <div className="space-y-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Order Summary</h2>
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-grow ml-4">
                  <h3 className="text-xl text-gray-700">{item.name}</h3>
                  <p className="text-sm text-gray-500">Price: ₦{item.price}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-sm text-gray-700 font-semibold">
                    Total: {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          <div className="mt-6 space-y-4">
    <h2 className="text-xl font-mulish text-gray-700">Total:</h2>
    <p className="text-xl font-mulish text-gray-800">{formatCurrency(calculateTotal())}</p>

    <h2 className="text-xl font-mulish text-gray-700">Shipping Cost:</h2>
    <p className="text-xl font-mulish text-gray-600">{formatCurrency(shippingCost)}</p>

    <h2 className="text-xl font-mulish text-gray-700">Grand Total:</h2>
    <p className="text-xl font-mulish text-green-600">{formatCurrency(calculateTotal() + shippingCost)}</p>
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
            <button onClick={() => navigate('/cart')} className="flex items-center text-purple-600 hover:underline">
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
