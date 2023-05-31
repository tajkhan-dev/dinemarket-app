import React from "react";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";

import Image from "next/image";
import { getProducts } from "../../sanity/lib/client";

export default async function Products() {
  const product = await getProducts();
  return (
    <div>
      <div className="text-center mt-20 mb-5">
        <p className="text-[#0062F7] font-semibold mb-5">Hello</p>
        <h1 className="text-[35px] font-extrabold">Check What We Have</h1>
      </div>
      <div>
        <div className="carousel mx-14 rounded-box flex gap-x-10 ">
          {product.map((prod) => (
            <Link
              className="carousel-item"
              href={`/products/${prod.slug}`}
              key={prod._id}
            >
              <div className=" text-center text-lg font-bold  rounded-lg">
                <Image
                  src={`${urlForImage(prod.image)}`}
                  alt=""
                  width={350}
                  height={0}
                />
                <p className="">{prod.name}</p>
                <p>${prod.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
