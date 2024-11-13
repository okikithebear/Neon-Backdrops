import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Twitter, Instagram, Eye, EyeOff } from 'lucide-react'; // Add Eye and EyeOff icons
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth } from '../firebaseConfig'; // Adjust the path if necessary
import { db } from '../firebaseConfig'; // Import Firestore (Adjust path if necessary)
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore methodsD
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAccount = () => {
  const [formMode, setFormMode] = useState('login'); // Modes: 'login', 'signup', 'forgotPassword'
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [loading, setLoading] = useState(false); // State for loading
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const navigate = useNavigate(); // Initialize useNavigate

  // Validation schemas for each form
  const validationSchemas = {
    login: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    signup: Yup.object({
      name: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    forgotPassword: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
  };

  const formVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const toggleMode = (mode) => {
    setFormMode(mode);
    setError(''); // Reset error when toggling modes
    setSuccessMessage(''); // Reset success message when toggling modes
  };

  const handleLogin = async (values) => {
    setLoading(true);
    try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        toast.success('Login successful! Redirecting...');
        setTimeout(() => {
            navigate('/');
        }, 2000);
    } catch (err) {
        toast.error(`Invalid check login details!`);
    } finally {
        setLoading(false);
    }
};


  const handleSignup = async (values) => {
    const { email, password, name } = values;
    setLoading(true); // Start loading
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store user data in Firestore
        await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            name,
            email,
        });

        setSuccessMessage('Account created successfully! Redirecting...'); // Set success message
        setTimeout(() => {
            navigate('/'); // Redirect to home after success
        }, 2000); // Delay for user to see the success message
    } catch (err) {
        if (err.code === 'auth/email-already-in-use') {
            setError('This email is already in use. Please use a different email or log in.');
        } else {
            setError(err.message);
        }
    } finally {
        setLoading(false); // Stop loading
    }
};

  const handlePasswordReset = async (values) => {
    setLoading(true); // Start loading
    try {
      await sendPasswordResetEmail(auth, values.email);
      setSuccessMessage('Password reset email sent! Check your inbox.'); // Set success message
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white mt-20 mb-16 lg:mb-0 lg:mt-0">
      
      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={formMode}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={formVariants}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-2xl text-uppercase md:text-4xl font-bold font-mulish mb-8 text-gray-800">
                {formMode === 'login' ? 'Welcome back' : formMode === 'signup' ? 'Create account' : 'Reset your password'}
              </h1>
              {error && <div className="text-red-500 mb-4">{error}</div>} {/* Error message display */}
              {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>} {/* Success message display */}
              <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={validationSchemas[formMode]}
                onSubmit={(values) => {
                  if (formMode === 'login') {
                    handleLogin(values);
                  } else if (formMode === 'signup') {
                    handleSignup(values);
                  } else {
                    handlePasswordReset(values);
                  }
                }}
              >
                {() => (
                  <Form className="space-y-4">
                    {formMode === 'signup' && (
                      <div className="flex items-center bg-gray-100 p-3 rounded-lg">
                        <User className="text-gray-500 mr-3" size={20} />
                        <Field
                          name="name"
                          type="text"
                          placeholder="Full Name"
                          className="bg-transparent outline-none flex-1 text-gray-800"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    )}
                    <div className="flex items-center bg-gray-100 p-3 rounded-lg">
                      <Mail className="text-gray-500 mr-3" size={20} />
                      <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="bg-transparent outline-none flex-1 text-gray-800"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    {(formMode === 'login' || formMode === 'signup') && (
                      <div className="flex items-center bg-gray-100 p-3 rounded-lg">
                        <Lock className="text-gray-500 mr-3" size={20} />
                        <Field
                          name="password"
                          type={showPassword ? "text" : "password"} // Toggle between text and password
                          placeholder="Password"
                          className="bg-transparent outline-none flex-1 text-gray-800"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="ml-3">
                          {showPassword ? <EyeOff className="text-gray-500" size={20} /> : <Eye className="text-gray-500" size={20} />}
                        </button>
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    )}
                    <div className="mt-8">
                      <button
                        type="submit"
                        disabled={loading} // Disable button when loading
                        className={`text-white px-6 py-3 rounded-lg w-full flex items-center justify-center ${
                          formMode === 'login' ? 'bg-purple-600' : formMode === 'signup' ? 'bg-purple-600' : 'bg-purple-600'
                        }`}
                      >
                        {loading ? 'Loading...' : (formMode === 'login' ? 'Sign In' : formMode === 'signup' ? 'Sign Up' : 'Reset Password')}
                        <ArrowRight className="ml-2" size={20} />
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              {formMode === 'login' && (
                <div className="flex justify-between mt-4">
                  <button onClick={() => toggleMode('forgotPassword')} className="text-purple-600">
                    Forgot Password?
                  </button>
                  <div className="mt-6 flex justify-center space-x-4">
                    <button className="p-2 bg-gray-200 rounded-full">
                      <Instagram className="text-gray-700 hover:text-black" size={24} />
                    </button>
                    <button className="p-2 bg-gray-200 rounded-full">
                      <Twitter className="text-gray-700 hover:text-black" size={24} />
                    </button>
                  </div>
                </div>
              )}
              {formMode === 'forgotPassword' && (
                <div className="flex justify-center mt-4">
                  <button onClick={() => toggleMode('login')} className="text-purple-600">
                    Back to Login
                  </button>
                </div>
              )}
              {formMode === 'signup' && (
                <div className="flex justify-center mt-4">
                  <button onClick={() => toggleMode('login')} className="text-purple-600">
                    Already have an account? Login
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      {/* Background Section */}
      <div
        className={`w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 ${
          formMode === 'login' ? 'bg-purple-600' : formMode === 'signup' ? 'bg-purple-600' : 'bg-purple-600'
        }`}
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {formMode === 'login' ? 'New here?' : formMode === 'signup' ? 'Already have an account?' : 'Remembered your password?'}
          </h2>
          <p className="text-gray-200 mb-8">
            {formMode === 'login'
              ? 'Sign up and discover a great amount of new backdrop designs!'
              : 'Sign in to access your account and continue your journey!'}
          </p>
          <button
            className="bg-white px-6 py-3 rounded-lg"
            style={{ color: formMode === 'login' ? '#2563EB' : formMode === 'signup' ? '#4ADE80' : '#A855F7' }}
            onClick={() => toggleMode(formMode === 'login' ? 'signup' : 'login')}
          >
            {formMode === 'login' ? 'Create an Account' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
