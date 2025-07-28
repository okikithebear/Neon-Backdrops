import React, { createContext, useState, useContext, useEffect } from 'react';
import { db, auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  getDocs,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);
  const [guestId, setGuestId] = useState(localStorage.getItem('guestId') || null);
  const [, setShippingCost] = useState(0);

  const normalizeId = (id) => (typeof id === 'string' ? id : String(id));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser && !guestId) {
        const newGuestId = uuidv4();
        setGuestId(newGuestId);
        localStorage.setItem('guestId', newGuestId);
      }
    });
    return () => unsubscribe();
  }, [guestId]);

  useEffect(() => {
    if (!user && !guestId) return;

    const currentUserId = user ? user.uid : guestId;
    const cartRef = collection(db, 'carts', currentUserId, 'items');

    const unsubscribeCart = onSnapshot(
      cartRef,
      (snapshot) => {
        const cartItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCart(cartItems);

        const count = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
        setCartCount(count);
      },
      (error) => {
        console.error('Error listening to cart updates:', error);
        toast.error('Error updating cart. Please check your network connection.');
      }
    );

    return () => unsubscribeCart();
  }, [user, guestId]);

  const calculateRentalDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.floor((end - start) / (1000 * 3600 * 24)) + 1;
  };

  const addToCart = async (product) => {
    const currentUserId = user ? user.uid : guestId;
    let { id, type, rentalDates, price, rentalDuration, quantity, size } = product;
    id = normalizeId(id);
    type = type.toLowerCase();
    quantity = quantity || 1;

    if (type === 'rental') {
      const startDate = rentalDates?.start;
      const endDate = rentalDates?.end;

      if (!startDate || !endDate) {
        console.error('Start and End Dates are required for rentals.');
        return;
      }

      if (!rentalDuration) {
        rentalDuration = calculateRentalDuration(startDate, endDate);
      }

      const rentalKey = `${id}_${startDate}_${endDate}`;
      const existingItem = cart.find(
        (item) =>
          item.id === rentalKey &&
          item.type === 'rental' &&
          item.rentalDates?.start === startDate &&
          item.rentalDates?.end === endDate
      );

      if (existingItem) {
        console.log('Rental item with the same dates already exists.');
        return;
      }

      const itemRef = doc(db, 'carts', currentUserId, 'items', rentalKey);
      await setDoc(
        itemRef,
        {
          ...product,
          id: rentalKey,
          rentalDates: { start: startDate, end: endDate },
          rentalDuration,
          totalCost: price * rentalDuration * quantity,
          isRental: true,
          quantity,
        },
        { merge: true }
      );
    } else {
      const sizeKey = size ? `-${size}` : '';
      const productKey = `${id}${sizeKey}`;

      const itemRef = doc(db, 'carts', currentUserId, 'items', productKey);
      const existingItem = cart.find((item) => item.id === productKey);

      if (existingItem) {
        const updatedQuantity = existingItem.quantity + quantity;
        await setDoc(
          itemRef,
          {
            quantity: updatedQuantity,
            totalCost: price * updatedQuantity,
          },
          { merge: true }
        );
      } else {
        await setDoc(
          itemRef,
          {
            ...product,
            id: productKey,
            quantity,
            totalCost: price * quantity,
          },
          { merge: true }
        );
      }
    }
  };

  const removeFromCart = async (id) => {
    const currentUserId = user ? user.uid : guestId;
    const stringId = normalizeId(id);
    const itemRef = doc(db, 'carts', currentUserId, 'items', stringId);
    try {
      await deleteDoc(itemRef);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const clearCart = async () => {
    const currentUserId = user ? user.uid : guestId;
    const cartRef = collection(db, 'carts', currentUserId, 'items');
    const cartItems = await getDocs(cartRef);
    cartItems.forEach((doc) => deleteDoc(doc.ref));
  };

  const updateRentalDuration = async (id, duration) => {
    const currentUserId = user ? user.uid : guestId;
    const itemRef = doc(db, 'carts', currentUserId, 'items', normalizeId(id));
    await setDoc(itemRef, { rentalDuration: duration }, { merge: true });
  };

  const updateQuantity = async (id, quantity) => {
    if (quantity < 1) return;
    const currentUserId = user ? user.uid : guestId;
    const itemRef = doc(db, 'carts', currentUserId, 'items', normalizeId(id));
    await setDoc(itemRef, { quantity }, { merge: true });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      if (item.type === 'rental') {
        const duration =
          item.rentalDuration ||
          calculateRentalDuration(item.rentalDates?.start, item.rentalDates?.end);
        return total + item.price * duration * (item.quantity || 1);
      }
      return total + item.price * (item.quantity || 1);
    }, 0);
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
        setShippingCost: updateShippingCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
