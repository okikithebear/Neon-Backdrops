import React, { createContext, useState, useContext, useEffect } from 'react';
import { db, auth } from '../firebaseConfig';

import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, setDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';

import { v4 as uuidv4 } from 'uuid'; // UUID library for generating guest IDs

export const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [user, setUser] = useState(null);
    const [guestId, setGuestId] = useState(localStorage.getItem('guestId') || null);
    const [, setShippingCost] = useState(0); // New shippingCost state

    // Helper function to ensure the ID is always a string
    const normalizeId = (id) => (typeof id === 'string' ? id : String(id));

    // Monitor user authentication status
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            const currentUserId = currentUser ? currentUser.uid : guestId;

            if (currentUserId) {
                const cartRef = collection(db, 'carts', currentUserId, 'items');
                const unsubscribeCart = onSnapshot(cartRef, (snapshot) => {
                    const cartItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setCart(cartItems);
                });
                return () => unsubscribeCart();
            } else {
                if (!guestId) {
                    const newGuestId = uuidv4(); // Generate a new guest ID
                    setGuestId(newGuestId);
                    localStorage.setItem('guestId', newGuestId);
                }
            }
        });
        return () => unsubscribe();
    }, [guestId]);

    useEffect(() => {
        const fetchCartCount = async () => {
            if (user) {
                try {
                    const cartRef = collection(db, 'carts');
                    const q = query(cartRef, where('userId', '==', user.uid));
                    const querySnapshot = await getDocs(q);
                    const items = querySnapshot.docs.map(doc => doc.data());
                    setCartCount(items.length); // Set the cart count
                } catch (error) {
                    console.error("Error fetching cart count:", error);
                }
            } else {
                setCartCount(0); // Reset cart count if no user is logged in
            }
        };

        fetchCartCount();
    }, [user]);

    const addToCart = async (product) => {
        const currentUserId = user ? user.uid : guestId; // Use user ID or guest ID
        let { id, type, startDate, endDate, price, rentalDuration, quantity } = product;
        id = normalizeId(id);
    
        if (type === "rental") {
            // Validate rental dates
            if (!startDate || !endDate) {
                console.error("Start Date and End Date are required for rentals");
                return;
            }
    
            // Check if the item already exists in the cart with the same rental period
            const existingItem = cart.find(
                (item) =>
                    item.id === id &&
                    item.type === "rental" &&
                    item.startDate === startDate &&
                    item.endDate === endDate
            );
    
            if (existingItem) {
                console.log("Rental item with the same dates already exists in the cart.");
                return;
            }
    
            // Add rental item to the cart with rental details
            const itemRef = doc(db, "carts", currentUserId, "items", id);
            await setDoc(
                itemRef,
                {
                    ...product,
                    startDate,
                    endDate,
                    rentalDuration,
                    totalCost: price * (quantity || 1), // Ensure cost reflects quantity
                    isRental: true,
                    quantity: quantity || 1,
                },
                { merge: true }
            );
        } else {
            // Handle non-rental items
            const itemRef = doc(db, "carts", currentUserId, "items", id);
            const existingItem = cart.find((item) => item.id === id);
            if (existingItem) {
                // Update the quantity of an existing non-rental item
                await setDoc(
                    itemRef,
                    {
                        quantity: existingItem.quantity + (quantity || 1),
                        totalCost: price * (existingItem.quantity + (quantity || 1)), // Update cost
                    },
                    { merge: true }
                );
            } else {
                // Add a new non-rental item
                await setDoc(
                    itemRef,
                    {
                        ...product,
                        quantity: quantity || 1,
                        totalCost: price * (quantity || 1), // Add total cost
                    },
                    { merge: true }
                );
            }
        }
    };

    const removeFromCart = async (id) => {
        const currentUserId = user ? user.uid : guestId; // Use user ID or guest ID
        const stringId = normalizeId(id);

        const itemRef = doc(db, 'carts', currentUserId, 'items', stringId);

        try {
            await deleteDoc(itemRef);
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    const clearCart = async () => {
        const currentUserId = user ? user.uid : guestId; // Use user ID or guest ID
        const cartRef = collection(db, 'carts', currentUserId, 'items');
        const cartItems = await getDocs(cartRef);
        cartItems.forEach(doc => deleteDoc(doc.ref));
    };

    const updateRentalDuration = async (id, duration) => {
        const currentUserId = user ? user.uid : guestId; // Use user ID or guest ID
        const itemRef = doc(db, 'carts', currentUserId, 'items', normalizeId(id));
        await setDoc(itemRef, { rentalDuration: duration }, { merge: true });
    };

    const updateQuantity = async (id, quantity) => {
        const currentUserId = user ? user.uid : guestId; // Use user ID or guest ID
        const itemRef = doc(db, 'carts', currentUserId, 'items', normalizeId(id));
        await setDoc(itemRef, { quantity }, { merge: true });
    };

    const calculateRentalDuration = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        return Math.floor((end - start) / (1000 * 3600 * 24)) + 1;
    };

    const calculateTotal = () => {
        const itemsTotal = cart.reduce((total, item) => {
            if (item.type === 'rental') {
                const duration = item.rentalDuration || calculateRentalDuration(item.startDate, item.endDate);
                return total + item.price * duration;
            }
            return total + item.price * (item.quantity || 1);
        }, 0);
        return itemsTotal ; // Include shippingCost in the total calculation
    };

    const updateShippingCost = (cost) => {
        setShippingCost(cost); // Update shipping cost
    };

    return (
        <CartContext.Provider value={{
            cart,
            cartCount, // Add cartCount to context
            setCartCount,
            setUser,
            addToCart,
            removeFromCart,
            clearCart,
            updateRentalDuration,
            updateQuantity,
            calculateTotal,
            setShippingCost: updateShippingCost 
        }}>
            {children}
        </CartContext.Provider>
    );
};
