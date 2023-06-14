import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
    apiVersion: "2022-11-15",
  });

  const { item } = await request.json();

  const data = item.map((i: any) => {
    const transformedItem = {
      price_data: {
        currency: "usd",
        product_data: {
          name: i.product_name,
          description: "this",
          images: [i.imageurl],
          metadata: {},
        },
        unit_amount: i.product_price * 100,
      },
      quantity: i.quantity,
    };

    return transformedItem;
  });

  const session = stripe.checkout.sessions.create({
    line_items: data,

    mode: "payment",
    success_url: "https://dinemarket-taj-ul-islam.vercel.app/success",
    cancel_url: "https://dinemarket-taj-ul-islam.vercel.app",
  });
  return NextResponse.json((await session).id);
}
