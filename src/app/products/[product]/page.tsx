import React, { use } from "react";
import Image from "next/image";
import { useState } from "react";
import { getproduct } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { BsCart } from "@/components/Icon";
import { Btn } from "@/components/Comp";
const size = ["XS", "SM", "MD", "LG", "XL"];

interface props {
  params: { product: string };
}

export default async function page({ params }: props) {
  const slug = params.product;
  const prod = await getproduct(slug);
  
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
              className="text-[#666666] rounded-full hover:bg-gray-100 p-[10px] hover:shadow-lg">
              {s}
            </button>
          ))}
        </div>
        <div>
          <Btn />
        </div>

        <div className="flex items-center ">
          <button className="bg-black p-2 text-center text-white ">
            Add to Cart
          </button>
          <p className="font-bold text-xl">{prod.price}</p>
        </div>
      </div>

      <div className="flex flex-col my-10  items-center  w-full">
        <h1 className="font-bold text-2xl text-start ">Product information</h1>
        <hr className="w-[70%] border border-[#666666]" />
      </div>

      <div className="mx-[200px]">
        <div className=" flex gap-x-[150px] ">
          <p className="text-[#666666] text-lg tracking-widest font-bold">
            PRODUCT DETAILS
          </p>
          <p className="max-w-[500px] tracking-wider font-extralight text-justify ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
            voluptatem deleniti vero ad temporibus at minima ex quas veritatis
            animi ipsum voluptas laudantium fugiat atque, laborum iure amet fuga
            optio earum. Eligendi est voluptatibus magnam illum aut dolores ab,
            id nostrum non culpa iusto repellendus officiis deleniti beatae
            architecto atque?{" "}
          </p>
        </div>
        <div className=" flex mt-10  gap-x-[180px]">
          <p className="text-[#666666] text-lg tracking-widest font-bold">
            PRODUCT CARE
          </p>
          <ul className="max-w-[500px] tracking-wider list-disc  text-justify text-md  font-extrabold">
            <li>Hand wash using cold water.</li>
            <li>Do not using bleach.</li>
            <li>Hang it to dry.</li>
            <li>Iron on low temperature.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
