"use client";
import { cartitem } from "@/components/types";
import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import Image from "next/image";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineShopping,
  RiDeleteBinLine,
} from "@/components/Icon";

export default function Page() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/cart", fetcher);

  const [itemQuantities, setItemQuantities] = useState<number[]>([]);

  if (error) return <div>failed to load</div>;
   if (!data) return <div>loading...</div>;

  if (itemQuantities.length === 0) {
    setItemQuantities(data.items.map((item: cartitem) => item.quantity));
  }

  const increment = (index: number) => {
    const updatedQuantities = [...itemQuantities];
    updatedQuantities[index] += 1;
    setItemQuantities(updatedQuantities);
  };

  const decrement = (index: number) => {
    const updatedQuantities = [...itemQuantities];
    if (updatedQuantities[index] !== 1) {
      updatedQuantities[index] -= 1;
    }
    setItemQuantities(updatedQuantities);
  };

  console.log(data);
  const totalPrice = data.items.reduce(
    (accumulator: any, i: any, index: any) =>
      accumulator + i.product_price * itemQuantities[index],
    0
  );
  const deleteItem = async (itemId: number) => {
    try {
      const res = await fetch("/api/cart", {
        method: "DELETE",
        body: JSON.stringify({
          id: itemId,
        }),
      });

      const result = await res.json();
      if (res.ok) {
        mutate("/api/cart");
      } else {
        console.log("Failed to delete item:", res.status);
      }
    } catch (error) {
      console.log("Failed to delete item:", error);
    }
  };

  return (
    <>
      <div className="mx-auto">
        {data.items.length < 1 && (
          <div className="">
            <AiOutlineShopping size={150} />
            <h1>Your shopping bag is empty</h1>
          </div>
        )}
      </div>
      <div className="flex justify-evenly mt-5 ">
        <div>
          <h1 className="font-bold text-4xl ml-10">Shopping Cart</h1>
          {data.items.map((i: cartitem, index: number) => {
            const quantity = itemQuantities[index];
            const totalPrice = i.product_price * quantity;
            return (
              <>
                <div key={index} className="flex m-10  gap-5">
                  <div>
                    <Image src={i.imageurl} width={250} height={250} alt="" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-2xl tracking-widest">{i.product_name}</p>
                    <p className="font-semibold text-lg">{i.tags}</p>
                    <p className="font-bold text-xl">Delivery Estimation</p>
                    <p className="text-yellow-500 font-bold text-lg">
                      5 Working Days
                    </p>
                    <p className="text-xl font-bold">${totalPrice}</p>
                    <div>
                      <RiDeleteBinLine
                        size={30}
                        fill={"#CC0000"}
                        onClick={() => deleteItem(i.id)}
                      />

                      <div className="flex gap-2 text-lg mt-5">
                        <AiOutlineMinusCircle
                          size={25}
                          onClick={() => decrement(index)}
                        />
                        {itemQuantities[index]}
                        <AiOutlinePlusCircle
                          size={25}
                          onClick={() => increment(index)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="mt-20 flex flex-col gap-5">
          <h3 className="font-bold text-2xl tracking-wide">Order Summary</h3>

          <div className=" text-xl flex gap-3">
            <p className="">Total item :</p>
            <p className="font-bold">{data.items.length}</p>
          </div>
          <div className="  text-xl flex gap-3">
            <p>Sub Total :</p>
            <p className="font-bold">${totalPrice}</p>
          </div>
          <div>
            <button className="px-4 py-2 bg-black text-white">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
