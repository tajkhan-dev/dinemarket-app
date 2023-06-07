import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "../../../../lib/drizzle";

export async function GET(request:NextRequest){
  try{
    const items= await db.select().from(cartTable)
     console.log(items)
     return NextResponse.json({items},{
      headers:{
        "Access-Control-Allow-Origin":'*'
      }
     })
  }catch(error){
    console.log(error)
  }
}

export async function POST(request: NextRequest) {
  const req = await request.json();
try {
    const res = await db
      .insert(cartTable)
      .values({
        uid:req.uid,
        quantity: req.quantity,
        imageurl:req.imageurl,
        product_name:req.product_name,
        product_price:req.product_price,
        tags:req.tags
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


