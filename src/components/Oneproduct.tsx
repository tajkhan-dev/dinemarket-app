"use client";
import {useAuth } from "@clerk/nextjs";
import React, { FC, useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "./Icon";
import { product } from "../../sanity/types/product";


const size = ["XS", "SM", "MD", "LG", "XL"];

export const Oneproduct: FC<{ prod: product }> = ({ prod }) => {
  const { isLoaded, userId} = useAuth();

  

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
          uid:userId,
          quantity: num,
          imageurl: urlForImage(prod.image).url() ,
          product_name: prod.name,
          product_price:prod.price,
          tags:prod.tags

        }),
      });
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <Image
          src={`${urlForImage(prod.image)}`}
          height={0}
          width={550}
          alt=""
        />
      </div>
      <div>
        <p className="font-semibold text-2xl tracking-widest">{prod.name}</p>
        <p>Select Size</p>
        <div className="flex gap-3">
          {size.map((s) => (
            <button
              key={s}
              className="text-[#666666] rounded-full hover:bg-gray-100 p-[10px] hover:shadow-lg"
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex">
          quantity
          <AiOutlineMinusCircle onClick={dec} />
          {num}
          <AiOutlinePlusCircle onClick={inc} />
        </div>

        <div className="flex items-center ">
          {
            userId ||isLoaded ? 
             <button
            onClick={handleAddtoCart}
            className="bg-black p-2 text-center text-white "
          >
            Add to Cart
          </button>
            :<p>Sign In first</p>
          }
         
          <p className="font-bold text-xl"> ${prod.price}</p>
         
        </div>
      </div>
    </>
  );
};
