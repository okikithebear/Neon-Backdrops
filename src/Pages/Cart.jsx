import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import emptyCartImage from '../Assets/Images/shopping-fun.png';
import { FaTrash } from 'react-icons/fa';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, calculateTotal, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        const checkoutCartData = cart.map(item => ({
            id: item.id,
            name: item.name,
            image: item.image,
            type: item.type,
            size: item.size,
           variantType: item.variantType, 
            quantity: item.quantity,
            price: item.price,
            discountedPrice: item.discountedPrice,
            rentalDates: item.isRental ? item.rentalDates : null,
            rentalDuration: item.isRental ? item.rentalDuration : null,
            totalCost: item.isRental
                ? item.price * item.rentalDuration * item.quantity
                : item.discountedPrice * item.quantity,
        }));
        navigate('/checkout', { state: { cart: checkoutCartData } });
    };

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="text-gray-500 text-sm mb-2 mt-20">Shop / Cart</div>

            <div className="border-b border-gray-300 pb-4 mb-6">
                <h1 className="text-4xl font-bold text-gray-800">CART</h1>
            </div>

            {cart.length === 0 ? (
                <div className="flex flex-col items-center text-center mt-16">
                    <img src={emptyCartImage} alt="Empty Cart" className="w-64 h-64 mb-6 opacity-75" />
                    <p className="text-xl font-semibold text-gray-700 mb-4">Your cart is empty!</p>
                    <p className="text-gray-600 mb-6">Looks like you haven't added anything yet.</p>
                    <button
                        onClick={() => navigate('/shop')}
                        className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition-colors"
                    >
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <div className="space-y-6">
                    {cart.map(item => {
                        const uniqueKey = item.isRental
                            ? `${item.id}-${item.rentalDates?.start}-${item.rentalDates?.end}`
                            : `${item.id}-${item.size}`;

                        return (
                            <div key={uniqueKey} className="flex items-center space-x-6 bg-white shadow-sm rounded-lg p-4">
                                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                                <div className="flex-grow">
                                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                                    <div className="mt-1 text-gray-600">

                                        {typeof item.size !== "undefined" && item.size !== null && (
                                            <p>
                                                <span className="font-medium">Size:</span> {item.size}
                                            </p>
                                        )}
{typeof item.variantType !== "undefined" && item.variantType !== null && (
  <p>
    <span className="font-medium">Variant Type:</span>{" "}
    {item.variantType === "single" ? "Single-Sided" : "Double-Sided"}
  </p>
)}

                                        {item.isRental ? (
                                            <>
                                                <p>
                                                    <span className="font-medium">Rental Duration:</span> {item.rentalDuration} days
                                                </p>
                                                <p>
                                                    <span className="font-medium">Rental Dates:</span> {item.rentalDates.start} to {item.rentalDates.end}
                                                </p>
                                                <p>
                                                    <span className="font-medium">Estimated Price:</span> ₦
                                                    {(item.price * item.rentalDuration).toLocaleString('en-NG')}
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <span className="font-medium">Quantity:</span>
                                                <div className="flex items-center space-x-2 mt-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                        className="px-2 py-1 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 transition"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-4 py-1 bg-gray-100 border rounded-lg">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="px-2 py-1 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 transition"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold text-gray-900">
                                        ₦{item.isRental
                                            ? (item.price * item.rentalDuration).toLocaleString('en-NG')
                                            : (item.price * item.quantity).toLocaleString('en-NG')}
                                    </p>
                                    <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="mt-2 text-red-500 hover:text-red-600 transition"
                                    aria-label="Remove item"
                                >
                                    <FaTrash className="text-xl text-red-400" />
                                </button>

                                </div>
                            </div>
                        );
                    })}

                    {/* Payment & Delivery Info Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md mt-8 space-y-6">
                        <div className="flex items-center space-x-4 mb-4">
                            <p className="text-gray-700 font-medium">We accept:</p>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                                alt="Visa"
                                className="h-8 object-contain"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                                alt="MasterCard"
                                className="h-8 object-contain"
                            />
                        </div>

                        <div className="text-sm text-gray-700">
                            🌍 We deliver to every part of the world. Once your purchase is successful, our team will contact you
                            directly to confirm your delivery details. We follow industry-standard practices for secure processing
                            and safe delivery.
                        </div>
                    </div>

                    {/* Shipping Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                            <i className="fas fa-shipping-fast mr-3 text-purple-600 text-xl" />
                            Shipping Information
                        </h3>
                        <p className="text-gray-700 text-sm mb-4 flex items-center">
                            <i className="fas fa-info-circle text-red-600 mr-2" />
                            Shipping costs and options depend on your location and product details.
                            Please contact us directly for accurate shipping information.
                        </p>
                        <p className="text-gray-700 text-sm mb-4 flex items-center">
                            <i className="fas fa-info-circle text-red-600 mr-2" />
                            Shipping costs are paid separately after checkout
                        </p>
                        <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                            <i className="fab fa-whatsapp text-green-500 text-3xl mr-4" />
                            <div>
                                <a
                                    href="https://wa.me/2347033718653"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-lg transition-transform transform hover:scale-105"
                                >
                                    🚀 Message Neon Backdrops
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Cart Summary */}
                    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Order Summary</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-700">Subtotal:</span>
                                <span className="font-semibold text-gray-900">₦{calculateTotal().toLocaleString('en-NG')}</span>
                            </div>
                            <div className="flex justify-between font-semibold text-xl">
                                <span>Total:</span>
                                <span className="text-gray-900">₦{calculateTotal().toLocaleString('en-NG')}</span>
                            </div>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="w-full py-3 mt-8 bg-purple-500 text-white text-lg font-semibold rounded-lg hover:bg-purple-600 transition"
                        >
                            Proceed to Checkout
                        </button>

                        <button
                            onClick={clearCart}
                            className="w-full py-3 mt-4 bg-red-500 text-white text-lg font-semibold rounded-lg hover:bg-red-600 transition"
                        >
                            🗑️ Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
