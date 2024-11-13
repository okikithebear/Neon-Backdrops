// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaFP6tjMrazcT7KmGD9FPTlZqxB-0L6eQ",
  authDomain: "neon-backdrops.firebaseapp.com",
  projectId: "neon-backdrops",
  storageBucket: "neon-backdrops.appspot.com",
  messagingSenderId: "698795591095",
  appId: "1:698795591095:web:91a8d51d0fb45f8721d432",
  measurementId: "G-FFEB5861YG" // You may still want to keep this for future use
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize the authentication service
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export the auth and db instances for use in other files
