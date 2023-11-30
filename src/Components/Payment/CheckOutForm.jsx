import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState();
    const [clientSecret, setClientSecret] = useState("");
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const navigate = useNavigate();
    const { user } = useAuth();
    const totalPrice = cart.reduce((totalAmount, newItem) => totalAmount + newItem.price, 0)
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })

                .then(res => {

                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice]);




    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card

        })

        if (error) {
            console.log('[Payment error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'Anonymous',
                        email: user?.email || 'Anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment success', paymentIntent)

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Payment was Successful",
                showConfirmButton: false,
                timer: 1500
            });
        }

        const payment = {
            email: user.email,
            price: totalPrice,
            date: new Date(), // convert to utc, use moment js 
            cartIds: cart.map(item => item._id),
            name: cart.map(item => item.name),
            image: cart.map(item => item.image),
            menuItemIds: cart.map(item => item.cartId),
            status: 'succeed',
            transactionId: paymentIntent.id,
        }

        const res = await axiosSecure.post('/payments', payment)
        console.log('payment saved', res)

        refetch()

        navigate('/dashboard/paymentHistory');
    };

    return (
        <div className='lg:px-20 p-2'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className=' bg-amber-500 text-white btn mt-2' type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p className='text-red-600'>{error}</p>
            </form>
        </div>
    );
};

export default CheckOutForm;