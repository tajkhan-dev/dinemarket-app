import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCart, CiSearch } from "./Icon";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-around mt-2">
        <div className="p-2">
          <Image src={"/logo.webp "} alt=" " height={0} width={150} />
        </div>
        <div className="flex ">
          <Link className="py-2  px-4 text-md" href={""}>
            Female
          </Link>
          <Link className="py-2  px-4 text-md" href={""}>
            Male
          </Link>
          <Link className="py-2  px-4 text-md" href={""}>
            Kids
          </Link>
          <Link className="py-2  px-4 text-md" href={"/products"}>
            All Products
          </Link>
        </div>
        <div className=" h-[25px] mt-[10px] flex rounded-md  border">
          <CiSearch size={20} />
          <input
            className=""
            type="search"
            name=""
            placeholder="what your looking for"
            id=""
          />
        </div>
        <div className="rounded-full bg-gray-200 p-3">
          <BsCart size={20} />
        </div>
      </div>
    </>
  );
}


