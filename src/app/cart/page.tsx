import { AiOutlineShopping } from "@/components/Icon";

import React from "react";
export async function cartItems() {
  try {
    const res = await fetch("/api/cart", {
      method: "GET",
    });
    const cart = await res.json();
    return cart;
  } catch (error) {
    console.log(error);
  }
}

export default async function page() {
  const item = await cartItems();
  console.log(item);

  return (
    <>
      {/* {item.length < 1 && (
        <div className="empty-cart">
          <AiOutlineShopping size={150} />
          <h1>Your shopping bag is empty</h1>
        </div>
      )} */}
    </>
  );
}
