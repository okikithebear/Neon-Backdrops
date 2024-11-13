import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft,  FaCheckCircle } from 'react-icons/fa'; // Import icons

const CheckoutPage = () => {
    const { cart, removeFromCart, calculateTotal } = useContext(CartContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        state: '',
        city: '',
        country: '',
        phone: '',
        cardNumber: '',
        expiry: '',
        cvc: '',
    });

    const [errors, setErrors] = useState({});
    const [showShipping, setShowShipping] = useState(true);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Full Name is required.';
        if (!formData.address) newErrors.address = 'Shipping Address is required.';
        if (!formData.state) newErrors.state = 'State is required.';
        if (!formData.city) newErrors.city = 'Town/City is required.';
        if (!formData.country) newErrors.country = 'Country/Region is required.';
        if (!formData.phone) newErrors.phone = 'Phone Number is required.';
        if (!formData.cardNumber) newErrors.cardNumber = 'Credit Card Number is required.';
        if (!formData.expiry) newErrors.expiry = 'Expiry Date is required.';
        if (!formData.cvc) newErrors.cvc = 'CVC is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Order submitted successfully!');
            navigate('/');
        }
    };

    const formatCurrency = (number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(number);
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-2">
            <div className="text-gray-500 text-sm mb-2 mt-20">Home / Checkout</div>

            <div className="border-b border-gray-300 pb-2 mb-10">
                <h1 className="text-4xl font-bold text-gray-800">CHECKOUT</h1>
            </div>

            {cart.length === 0 ? (
                <p className="text-lg text-gray-600">Your cart is empty! Please add items to your cart before proceeding.</p>
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
                                    <p className="text-sm text-gray-700 font-semibold">Total: {formatCurrency(item.price * item.quantity)}</p>
                                </div>
                                <button 
  onClick={() => removeFromCart(item.id)} 
  className="text-red-500 hover:text-red-600 flex items-center"
>
  <i className="fa fa-trash mr-2" /> {/* Trash Icon */}
</button>

                            </div>
                        ))}
                        <h2 className="mt-4 text-xl font-bold text-gray-700">Total: {formatCurrency(calculateTotal())}</h2>
                    </div>

                      {/* Accordion for Shipping Information */}
                      <div className="bg-gray-50 shadow-lg rounded-lg p-6">
                        <div onClick={() => setShowShipping(!showShipping)} className="cursor-pointer flex items-center justify-between">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Shipping Information</h2>
                            <span>{showShipping ? '▼' : '▲'}</span>
                        </div>
                        {showShipping && (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="col-span-1">
                                        <label htmlFor="name" className="block mb-1 text-gray-600">Full Name</label>
                                        <input type="text" id="name" value={formData.name} onChange={handleChange} required className="border rounded-md px-3 py-2 w-full text-gray-700" placeholder="Enter your full name" />
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="address" className="block mb-1 text-gray-600">Shipping Address</label>
                                        <input type="text" id="address" value={formData.address} onChange={handleChange} required className="border rounded-md px-3 py-2 w-full text-gray-700" placeholder="Enter your shipping address" />
                                        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="state" className="block mb-1 text-gray-600">State</label>
                                        <input type="text" id="state" value={formData.state} onChange={handleChange} required className="border rounded-md px-3 py-2 w-full text-gray-700" placeholder="Enter your state" />
                                        {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="city" className="block mb-1 text-gray-600">Town/City</label>
                                        <input type="text" id="city" value={formData.city} onChange={handleChange} required className="border rounded-md px-3 py-2 w-full text-gray-700" placeholder="Enter your city" />
                                        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="country" className="block mb-1 text-gray-600">Country/Region</label>
                                        <input type="text" id="country" value={formData.country} onChange={handleChange} required className="border rounded-md px-3 py-2 w-full text-gray-700" placeholder="Enter your country" />
                                        {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                                    </div>
                                    <div className="col-span-1">
                                        <label htmlFor="phone" className="block mb-1 text-gray-600">Phone Number</label>
                                        <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required className="border rounded-md px-3 py-2 w-full text-gray-700" placeholder="Enter your phone number" />
                                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Link to="/my-account" className="text-purple-600 hover:underline">Don’t have an account? Click here to create an account.</Link>
                                </div>
                            </form>
                        )}
                    </div>

                    <div className="mt-4 flex justify-between">
                        <button 
                            onClick={() => navigate('/cart')} 
                            className="flex items-center text-purple-600 hover:underline">
                            <FaArrowLeft className="mr-2" /> Back to Cart
                        </button>
                        <button 
                            onClick={handleSubmit} 
                            className="flex items-center bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 transition-colors duration-200">
                            <FaCheckCircle className="mr-2" /> Complete Purchase
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;
