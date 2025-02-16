import React, { createContext, useState, useContext, useEffect } from 'react';
import { db, auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, setDoc, deleteDoc, onSnapshot, getDocs, } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

export const CartContext = createContext();

// Custom hook for using the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);
  const [guestId, setGuestId] = useState(localStorage.getItem('guestId') || null);
  const [, setShippingCost] = useState(0);

  // Helper: ensure id is a string
  const normalizeId = (id) => (typeof id === 'string' ? id : String(id));

  // Monitor authentication status
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
          const newGuestId = uuidv4();
          setGuestId(newGuestId);
          localStorage.setItem('guestId', newGuestId);
        }
      }
    });
    return () => unsubscribe();
  }, [guestId]);

  // In your CartContext
useEffect(() => {
  if (user || guestId) {
    const currentUserId = user ? user.uid : guestId;
    const cartRef = collection(db, 'carts', currentUserId, 'items');
    const unsubscribeCart = onSnapshot(
      cartRef,
      (snapshot) => {
        const cartItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setCart(cartItems);
        // Sum quantities to determine cart count
        const count = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
        setCartCount(count);
      },
      (error) => {
        console.error("Error listening to cart updates:", error);
        toast.error("Error updating cart. Please check your network connection.");
      }
    );
    return () => unsubscribeCart();
  }
}, [user, guestId]);

  // Helper: Calculate rental duration in days (inclusive)
  const calculateRentalDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.floor((end - start) / (1000 * 3600 * 24)) + 1;
  };

  const addToCart = async (product) => {
    const currentUserId = user ? user.uid : guestId;
    // Destructure rentalDates as an object along with other fields
    let { id, type, rentalDates, price, rentalDuration, quantity } = product;
    id = normalizeId(id);
    type = type.toLowerCase(); // ensure type is normalized
    quantity = quantity || 1;
    
    if (type === "rental") {
      // Extract start and end dates from the rentalDates object
      const startDate = rentalDates ? rentalDates.start : null;
      const endDate = rentalDates ? rentalDates.end : null;
      
      // Validate rental dates
      if (!startDate || !endDate) {
        console.error("Start Date and End Date are required for rentals");
        return;
      }
      // Calculate rentalDuration if not provided
      if (!rentalDuration) {
        rentalDuration = calculateRentalDuration(startDate, endDate);
      }
      // Check if an item with the same rental period already exists
      const existingItem = cart.find(
        (item) =>
          item.id === id &&
          item.type === "rental" &&
          item.rentalDates &&
          item.rentalDates.start === startDate &&
          item.rentalDates.end === endDate
      );
      if (existingItem) {
        console.log("Rental item with the same dates already exists in the cart.");
        return;
      }
      // Save rental product with details
      const itemRef = doc(db, "carts", currentUserId, "items", id);
      await setDoc(
        itemRef,
        {
          ...product,
          rentalDates: { start: startDate, end: endDate },
          rentalDuration,
          totalCost: price * rentalDuration * quantity, // cost based on duration and quantity
          isRental: true,
          quantity,
        },
        { merge: true }
      );
    } else {
      // For non-rental items
      const itemRef = doc(db, "carts", currentUserId, "items", id);
      const existingItem = cart.find((item) => item.id === id);
      if (existingItem) {
        await setDoc(
          itemRef,
          {
            quantity: existingItem.quantity + quantity,
            totalCost: price * (existingItem.quantity + quantity),
          },
          { merge: true }
        );
      } else {
        await setDoc(
          itemRef,
          {
            ...product,
            quantity,
            totalCost: price * quantity,
          },
          { merge: true }
        );
      }
    }
  };

  // Remove item from cart
  const removeFromCart = async (id) => {
    const currentUserId = user ? user.uid : guestId;
    const stringId = normalizeId(id);
    const itemRef = doc(db, 'carts', currentUserId, 'items', stringId);
    try {
      await deleteDoc(itemRef);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  // Clear entire cart
  const clearCart = async () => {
    const currentUserId = user ? user.uid : guestId;
    const cartRef = collection(db, 'carts', currentUserId, 'items');
    const cartItems = await getDocs(cartRef);
    cartItems.forEach(doc => deleteDoc(doc.ref));
  };

  // Update rental duration for an item (if needed)
  const updateRentalDuration = async (id, duration) => {
    const currentUserId = user ? user.uid : guestId;
    const itemRef = doc(db, 'carts', currentUserId, 'items', normalizeId(id));
    await setDoc(itemRef, { rentalDuration: duration }, { merge: true });
  };

  // Update item quantity
  const updateQuantity = async (id, quantity) => {
    const currentUserId = user ? user.uid : guestId;
    const itemRef = doc(db, 'carts', currentUserId, 'items', normalizeId(id));
    await setDoc(itemRef, { quantity }, { merge: true });
  };

  // Calculate total cost of cart items
  const calculateTotal = () => {
    const itemsTotal = cart.reduce((total, item) => {
      if (item.type === 'rental') {
        // Use stored rentalDuration if available, or calculate from dates
        const duration = item.rentalDuration || calculateRentalDuration(item.startDate, item.endDate);
        return total + item.price * duration * (item.quantity || 1);
      }
      return total + item.discountedPrice  * (item.quantity || 1);
    }, 0);
    return itemsTotal;
  };

  const updateShippingCost = (cost) => {
    setShippingCost(cost);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        setCartCount,
        setUser,
        addToCart,
        removeFromCart,
        clearCart,
        updateRentalDuration,
        updateQuantity,
        calculateTotal,
        setShippingCost: updateShippingCost 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
