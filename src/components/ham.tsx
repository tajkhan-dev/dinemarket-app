"use client"
import React, { useState } from 'react'
import {BsCart, HiBars3BottomRight} from './Icon'
import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
export default function Ham() {
    const [display,setDisplay]=useState(false)
    const  Handlenav = ()=>{
      setDisplay((prev)=>!prev)
    }
  return (

<>

<div >
    <HiBars3BottomRight onClick={Handlenav} size={30} />
</div>
    <div className={display ? "w-[75%] h-screen z-20 fixed  top-0 left-0 bg-white/90 ease-in-out   duration-150 ":'left-[-100%] ease-out duration-150'} >
        
       
  
   <div className={display?"flex flex-col items-center justify-center":"hidden"}>
   <div className="flex items-center gap-3 md:mt-2">
          <Link href={"/cart"}>
            <BsCart size={25} />
          </Link>
      
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
        </div>
          <Link className="py-2  px-4 text-md" href={"/female"}>
            Female
          </Link>
          <Link className="py-2  px-4 text-md" href={"/male"}>
            Male
          </Link>
          <Link className="py-2  px-4 text-md" href={"#"}>
            Kids
          </Link>
          <Link className="py-2  px-4 text-md" href={"/products"}>
            All Products
          </Link>
        </div>

  


</div> 
</>
  )
}
