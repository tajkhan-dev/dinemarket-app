

import Image from "next/image";
import Link from "next/link";
import { BsCart, CiSearch } from "./Icon";

import { UserButton } from "@clerk/nextjs";

import { SignedOut,SignedIn } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
 

export default function Navbar() {
  return (
    <>
      <div className="flex justify-around mt-2 h-[40px]">
        <div className=" ">
          <Link href={"/"}>
            <h1 className="font-bold text-[30px] leading-none">Dine Market</h1>
          </Link>
        </div>
        <div className="flex ">
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
        <div className="h-[50px] p-2">
          <Link href={"/cart"}>
            <BsCart size={20} />
          </Link>
        </div>
        <div className="mt-2">
          <SignedIn>
           <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button >Sign In</button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </>
  );
}
