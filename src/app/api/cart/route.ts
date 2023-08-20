import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "../../../../lib/drizzle";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs";

export async function GET(request: NextRequest) {
  const { userId } = auth();
 

  try {
    const items = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.uid, userId!));

    return NextResponse.json({ items },{
      headers: {
        "Access-Control-Allow-Origin": "*",
      },

    });
  } catch (error) {
    console.log(error);
  }
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  try {
    const res = await db
      .insert(cartTable)
      .values({
        uid: req.uid,
        quantity: req.quantity,
        imageurl: req.imageurl,
        product_name: req.product_name,
        product_price: req.product_price,
        tags: req.tags,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "data not recieved",
    });
  }
}

export async function DELETE(request: NextRequest) {
  const req = await request.json();
  try {
    const res = await db.delete(cartTable).where(eq(cartTable.id, req.id));
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
}

export async function PATCH(request: NextRequest) {
  const req = await request.json();
  try {
    const res = await db
      .update(cartTable)
      .set({ quantity: req.quantity })
      .where(eq(cartTable.id, req.id));
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
}
