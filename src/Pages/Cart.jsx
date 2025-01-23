import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import emptyCartImage from '../Assets/Images/shopping-fun.png';
import { FaTrash } from 'react-icons/fa';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, calculateTotal } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        // Pass cart details to checkout
        const rentalCartData = cart.map(item => ({
            id: item.id,
            rentalDates: item.rentalDates,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
        }));

        navigate('/checkout', { state: { cart: rentalCartData } });
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
                    {cart.map(item => (
                        <div key={item.id} className="flex items-center space-x-6 bg-white shadow-sm rounded-lg p-4">
                            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                                <div className="mt-1">
                                    <p className="text-gray-600">
                                        {item.isRental ? (
                                            <>
                                                <span className="font-medium">Rental Duration:</span> {item.rentalDuration} days
                                                <br />
                                                <span className="font-medium">Estimated Price:</span> ₦{(item.price * item.rentalDuration).toLocaleString('en-NG')}
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
                                    </p>
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
                                    <FaTrash className="text-lg" />
                                </button>
                            </div>
                        </div>
                    ))}

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
        Shipping costs are paid seperately after checkout 
    </p>
    <div className="flex items-center bg-gray-100 p-4 rounded-lg">
        <i className="fab fa-whatsapp text-green-500 text-3xl mr-4" />
        <div>
           
            <a
    href="https://wa.me/23490567879"
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
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
