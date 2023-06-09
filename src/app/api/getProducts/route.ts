import { NextRequest,NextResponse } from "next/server";

import Stripe from 'stripe'


export async function   GET(request:NextRequest){
    const stripe=new Stripe(`${process.env.STRIPE_SECRET_KEY}`,{
        apiVersion: '2022-11-15', 
    })
    const price=await stripe.prices.list({
        limit:12
    })

    return NextResponse.json(price.data.reverse())
}