import Link from "next/link";
import { BsCart, CiSearch } from "./Icon";

import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

import Ham from "./ham";

export default function Navbar() {
  return (
    <>
      <div className="flex lg:justify-around items-center justify-between mt-2 h-[40px]">
        <div className=" ">
          <Link href={"/"}>
            <h1 className="font-bold text-[20px] md:text-[30px] leading-none">
              Dine Market
            </h1>
          </Link>
        </div>
        <div className="hidden lg:flex ">
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
        <div className="hidden h-[25px] mt-[10px] lg:flex rounded-md  border">
          <CiSearch size={20} />

          <input
            className=""
            type="search"
            name=""
            placeholder="what your looking for"
            id=""
          />
        </div>

        <div className=" hidden lg:flex items-center gap-3 md:mt-2">
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
        <div className="lg:hidden">
          <Ham />
        </div>
      </div>
    </>
  );
}
