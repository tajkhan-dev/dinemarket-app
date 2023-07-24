"use client";
import { useAuth } from "@clerk/nextjs";
import React, { FC, useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "./Icon";
import { product } from "../../sanity/types/product";
import { Toaster, toast } from "react-hot-toast";

const size = ["XS", "SM", "MD", "LG", "XL"];

export const Oneproduct: FC<{ prod: product }> = ({ prod }) => {
  const { isLoaded, userId } = useAuth();


  const [num, setnum] = useState(1);
  function inc() {
    setnum(num + 1);
  }
  function dec() {
    if (num !== 1) {
      setnum(num - 1);
    }
  }

  const handleAddtoCart = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          uid: userId,
          quantity: num,
          imageurl: urlForImage(prod.image).url(),
          product_name: prod.name,
          product_price: prod.price * num,
          tags: prod.tags,
        }),
      });
      const result = await res.json();
      console.log(result);
      if(res.ok){
        toast.success("Added to Cart Successfully")
      }
     

      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="min-[320px]:mx-[20px] md:flex  justify-center gap-10 mt-20">
        <div>
          <Image
            src={urlForImage(prod.image).url()}
            height={550}
            width={550}
            alt=""
          />
        </div>
        <div className="mt-10">
          <p className="font-semibold text-2xl tracking-widest">{prod.name}</p>
          <p className="tracking-widest">{prod.tags}</p>
          <p className="font-semibold text-2xl mt-5">Select Size</p>
          <div className="flex gap-4">
            {size.map((s) => (
              <button
                key={s}
                className="text-[#666666] font-semibold rounded-full hover:bg-gray-100 p-[10px] hover:shadow-lg"
              >
                {s}
              </button>
            ))}
          </div>
            <div className="flex gap-2 text-lg mt-5">
            <p className="font-semibold text-xl tracking-widest">quantity:</p>

            <AiOutlineMinusCircle size={25} onClick={dec} />
            {num}
            <AiOutlinePlusCircle size={25} onClick={inc} />
          </div>

          <div className="flex gap-3 items-center mt-5">
            {isLoaded ? (
              <button
                onClick={()=>{
                  handleAddtoCart()
                  
                }}
                className="bg-black py-2 px-4 text-xl text-center text-white "
              >
                Add to Cart
              </button>
            ) : (
              <p>Sign In first</p>
              )}

            <p className="font-bold text-2xl"> ${prod.price}</p>
              <Toaster />
          </div>
        </div>
      </div>
    </>
  );
};
