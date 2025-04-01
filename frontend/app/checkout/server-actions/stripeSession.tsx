"use server";

import { IProduct } from "@/types/Product";
import { Stripe } from "stripe";

const apiKey = process.env.STRIPE_SECRET_KEY as string;

const stripe = new Stripe(apiKey);

interface NewSessionOptions {
    items: IProduct[]
}

export const postStripeSession = async ({ items }: NewSessionOptions) => {
    const returnUrl = 'http://localhost:3000/checkout-return?session_id={CHECKOUT_SESSION_ID}';

    const session = await stripe.checkout.sessions.create({
        ui_mode: "embedded",
        line_items: items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.title.name,
                    images: [`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image.url}`],

                },
                unit_amount: item.price * 100, 
            },
            quantity: item.quantity,

        })),
        mode: "payment",
        return_url: returnUrl,
    });

    if (!session.client_secret) throw new Error('Error initiating Stripe session');

    return {
        clientSecret: session.client_secret,
    };
};
