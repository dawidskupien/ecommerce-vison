// src/app/checkout/page.tsx
"use client";
import { useCartStore } from "@/providers/cart-store-provider"
import { CheckoutForm } from "./_components/CheckoutForm"

const CheckoutPage = () => {
    const { items } = useCartStore((state) => state)

    if (items.length === 0) {
        return (
                    <h1 className="text-2xl font-bold">Loading</h1>
        )
    }

    return (
        <main className="min-h-screen bg-white">
            <div className="bg-background py-10 px-5">
                <h1 className="text-2xl font-bold">Checkout</h1>

            </div>
            <div className=" mt-[10rem]">
              <CheckoutForm items={items} />
            </div>
        </main>
    )
}

export default CheckoutPage