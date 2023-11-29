import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
const stripePromise = loadStripe('pk_test_51OFPHTGEBxRi0Wj3bopoNG6WkoojYjxSLaTyUQuhwdCzB3TO7zfsrpnojaxEptCMDuQ5X9i7HwD323apsTaKcnQP00tkuRJTG1');
const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;