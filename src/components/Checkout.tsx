"use client";
import React, { useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";


 export default function Checkout( { items}:any) {
    const [loading, setLoading] = useState(false);

 



    const createCheckOutSession = async () => {
        setLoading(true);

        const publishableKey = process.env
        .NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;
      const stripePromise = loadStripe(publishableKey);
    
        
        const stripe = await stripePromise;
    
        const checkoutSession = await fetch(
          "/api/getproducts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              item:items.items
            }),
          }
        );
    
          console.log("Result------------- in prod page==========",  checkoutSession);
    
        const sessionID= await checkoutSession.json();
        const result = await stripe?.redirectToCheckout({
          sessionId: sessionID,
        });
        if (result?.error) {
          alert(result.error.message);
        }
        setLoading(false);
        }

    
    return (
      <div>
        <button onClick={createCheckOutSession} className="px-4 py-2 bg-black text-white">
          Proceed to Checkout
        </button>
      </div>
    );
  }