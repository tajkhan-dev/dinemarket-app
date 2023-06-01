import { NextResponse } from "next/server"

export async function POST(request:Request){
    const req=await request.json()
    console.log(req)
    return NextResponse.json({
        message:"post successful"
    })
}
