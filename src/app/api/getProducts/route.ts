import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";

export async function GET(request: NextRequest) {
  const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
    apiVersion: "2022-11-15",
  });
  const price = await stripe.prices.list({
    limit: 12,
  });

  return NextResponse.json(price.data.reverse());
}

export async function POST(request: NextRequest) {
  const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
    apiVersion: "2022-11-15",
  });

  const req = await request.json();
  const p = req.price_id;

  const session = stripe.checkout.sessions.create({
    line_items: [
      {
        price: p,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  });
  return NextResponse.json((await session).url);
}
