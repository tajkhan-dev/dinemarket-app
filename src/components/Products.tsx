"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";

import Image from "next/image";
import { getProducts } from "../../sanity/lib/client";
import { product } from "../../sanity/types/product";

export default function Products() {
  const [data, setdata] = useState<product[]>([]);
  useEffect(() => {
    const getdata = async () => {
      const product = await getProducts();
      setdata(product);
    };
    getdata();
  }, []);
  return (
    <>
      <div className="text-center mt-20 mb-5">
        <p className="text-[#0062F7] font-semibold mb-5">Hello</p>
        <h1 className="text-[35px] font-extrabold">Check What We Have</h1>
      </div>

      <div className="carousel mx-14 rounded-box flex gap-x-10 ">
        {data.map((prod, k: number) => (
          <Link
            className="carousel-item"
            href={`/products/${prod.slug}`}
            key={k}
          >
            <div className=" text-center text-lg font-bold  rounded-lg">
              <Image
                src={urlForImage(prod.image).url()}
                alt=""
                width={350}
                height={350}
              />
              <p className="">{prod.name}</p>
              <p>${prod.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
