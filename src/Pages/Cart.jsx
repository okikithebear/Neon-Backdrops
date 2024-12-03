import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import emptyCartImage from '../Assets/Images/shopping-fun.png';
import { FaTrash } from 'react-icons/fa';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, calculateTotal, setShippingCost, } = useContext(CartContext);

    const navigate = useNavigate();
    // const [couponCode, setCouponCode] = useState('');
    const [discount] = useState(0);
    const [shippingMethod, setShippingMethod] = useState('self-pickup');
    const [shippingCost, setShippingCostState] = useState(0);
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [shippingWarning, setShippingWarning] = useState('');



    const handleCheckout = () => {
        if ((shippingMethod !== 'self-pickup') && (shippingCost === 0 || !country || !state || !postalCode)) {
            setShippingWarning('Please calculate the shipping cost and fill in all required fields.');
            return;
        }
    
        setShippingCost(shippingCost);
    
        // Pass rental dates with the cart to checkout
        const rentalCartData = cart.map(item => ({
            id: item.id,
            rentalDates: item.rentalDates,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
        }));
    
        navigate('/checkout', { state: { cart: rentalCartData } });
    };
    
    
    

    // const applyCoupon = () => {
    //     if (couponCode === 'DISCOUNT10') {
    //         setDiscount(1000);
    //     } else {
    //         alert('Invalid coupon code');
    //     }
    // };

    const calculateShipping = () => {
        let cost = 0;
        switch (shippingMethod) {
            case 'dhl':
                cost = 2000;
                break;
            case 'fedex':
                cost = 2500;
                break;
            case 'self-pickup':
                cost = 0;
                break;
            default:
                cost = 0;
        }
        setShippingCostState(cost);
        setShippingCost(cost);  // Update the context with the shipping cost
        localStorage.setItem('shippingCost', cost);
        setShippingWarning('');  // Clear any previous warning
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
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
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
                            <div>
    {item.isRental && item.rentalDates && (
        <p className="text-gray-600">
            <span className="font-medium">Rental Dates:</span> {item.rentalDates.start} to {item.rentalDates.end}
        </p>
    )}
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
                        <h3 className="text-2xl font-semibold font-mulish text-gray-900 mb-4 flex items-center">
                            <i className="fa fa-truck mr-3 text-xl text--600" /> Shipping
                        </h3>
                        <div className="space-y-4">
                            {/* Shipping Method */}
                            <div className="flex items-center space-x-4">
                                <i className="fa fa-box-open text-gray-700" /> {/* Box Icon */}
                                <label className="font-semibold font-mulish text-gray-700">Method:</label>
                                <select
                                    value={shippingMethod}
                                    onChange={(e) => setShippingMethod(e.target.value)}
                                    className="border px-4 py-2 rounded-lg focus:ring focus:outline-none focus:ring-purple-200 font-mulish"
                                >
                                    <option value="self-pickup">Self Pick-up</option>
                                    <option value="dhl">DHL</option>
                                    <option value="fedex">FedEx</option>
                                </select>
                            </div>
                            {/* Country Input */}
                            <div className="flex items-center space-x-4">
                                <i className="fa fa-globe text-gray-700" /> {/* Globe Icon */}
                                <label className="font-semibold font-mulish text-gray-700">Country:</label>
                                <input
                                    type="text"
                                    placeholder="Enter country"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="border px-4 py-2 rounded-lg focus:ring focus:outline-none focus:ring-purple-200 font-mulish"
                                />
                            </div>
                            {/* State/Town Input */}
                            <div className="flex items-center space-x-4">
                                <i className="fa fa-map-marker-alt text-gray-700" /> {/* Map Pin Icon */}
                                <label className="font-semibold text-gray-700 font-mulish ">State/Town:</label>
                                <input
                                    type="text"
                                    placeholder="Enter state/town"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="border px-4 py-2 rounded-lg focus:ring focus:outline-none focus:ring-purple-200 font-mulish"
                                />
                            </div>
                            {/* Postal Code Input */}
                            <div className="flex items-center space-x-4">
                                <i className="fa fa-code text-gray-700" /> {/* Postal Code Icon */}
                                <label className="font-semibold text-gray-700 font-mulish">Postal Code:</label>
                                <input
                                    type="number"
                                    placeholder="Enter postal code"
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                    className="border px-4 py-2 rounded-lg focus:ring focus:outline-none focus:ring-purple-200 font-mulish"
                                />
                            </div>
                            {/* Calculate Shipping Button */}
                            <button
                                onClick={calculateShipping}
                                className="w-full py-3 mt-8 bg-purple-500 text-white text-lg font-semibold font-mulish rounded-lg hover:bg-purple-600 transition flex items-center justify-center"
                            >
                                Calculate Shipping Cost
                            </button>
                            {shippingWarning && (
                                <div className="text-red-600 mt-4 text-center">{shippingWarning}</div>
                            )}
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
                            <div className="flex justify-between">
                                <span className="text-gray-700">Discount:</span>
                                <span className="font-semibold text-gray-900">₦{discount.toLocaleString('en-NG')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-700">Shipping:</span>
                                <span className="font-semibold text-gray-900">₦{shippingCost.toLocaleString('en-NG')}</span>
                            </div>
                            <div className="flex justify-between font-semibold text-xl">
                                <span>Total:</span>
                                <span className="text-gray-900">₦{(calculateTotal() + shippingCost - discount).toLocaleString('en-NG')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Checkout Button */}
                    <div className="mt-8">
                        <button
                            onClick={handleCheckout}
                            className="w-full py-3 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-greens-700 transition"
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
