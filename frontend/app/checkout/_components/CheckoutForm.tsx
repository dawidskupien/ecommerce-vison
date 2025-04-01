'use client';

import React, { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from "@stripe/react-stripe-js";

import { postStripeSession } from "@/app/checkout/server-actions/stripeSession";
import { IProduct } from "@/types/Product";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

interface CheckoutFormProps {
    items: IProduct[]
}

export const CheckoutForm = ({ items }: CheckoutFormProps) => {
    const fetchClientSecret = useCallback(async () => {
        const stripeResponse = await postStripeSession({ items });
        return stripeResponse.clientSecret;
    }, [items]);

    const options = { fetchClientSecret };

    return (
        <EmbeddedCheckoutProvider  stripe={stripePromise} options={options}>
            <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
    );
};
