import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('your-stripe-public-key');

const PaymentPage = () => {
  useEffect(() => {
    // Initialize PaymentIntent on mount.
    // Optionally, retrieve client secret from the backend to initialize payment.
  }, []);

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default PaymentPage;
