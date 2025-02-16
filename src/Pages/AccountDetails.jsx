import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig"; 
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const AccountDetails = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setError("User not logged in.");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const fetchUserData = async () => {
      setLoading(true);
      setError("");

      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUserData(userSnap.data());
        } else {
          throw new Error("User data not found in Firestore.");
        }

        // Fetch purchase history
        const ordersRef = collection(db, "orders");
        const q = query(ordersRef, where("userId", "==", user.uid));
        const orderSnap = await getDocs(q);

        const orders = orderSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPurchaseHistory(orders);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20 py-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Account Details</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          {userData && (
            <div className="mb-6 bg-gray-100 p-4 rounded-lg">
              <p className="text-lg"><strong>Name:</strong> {userData.name}</p>
              <p className="text-lg"><strong>Email:</strong> {userData.email}</p>
              <p className="text-lg"><strong>Phone:</strong> {userData.phone || "N/A"}</p>
            </div>
          )}

          <h3 className="text-xl font-semibold text-gray-700 mt-6">Purchase History</h3>
          {purchaseHistory.length > 0 ? (
            <ul className="mt-4 space-y-4">
              {purchaseHistory.map(order => (
                <li key={order.id} className="p-4 border rounded-lg shadow-md bg-gray-50">
                  <p><strong>Order ID:</strong> {order.id}</p>
                  <p><strong>Items:</strong> {order.items?.map(item => item.name).join(", ") || "N/A"}</p>
                  <p><strong>Total:</strong> ${order.total?.toFixed(2) || "0.00"}</p>
                  <p><strong>Date:</strong> {order.date ? new Date(order.date).toLocaleDateString() : "N/A"}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-2">No purchases found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default AccountDetails;
