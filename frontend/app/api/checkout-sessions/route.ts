// export async function postStripeSession({ price, currency }: { price: number; currency: string }) {
//     const response = await fetch('/api/stripe-session', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ price, currency }),
//     });

//     if (!response.ok) {
//         throw new Error('Failed to create Stripe session');
//     }

//     return await response.json();
// }