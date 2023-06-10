

import Image from "next/image";
import Link from "next/link";
import { BsCart, CiSearch } from "./Icon";
import { SignedIn, SignedOut, } from "@clerk/nextjs/app-beta";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-around mt-2">
        <div className="p-2">
          <Link href={"/"}>
            <Image src={"/logo.webp"} alt=" " height={150} width={150} />
          </Link>
        </div>
        <div className="flex ">
          <Link className="py-2  px-4 text-md" href={"/female"}>
            Female
          </Link>
          <Link className="py-2  px-4 text-md" href={"/male"}>
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
          <Link href={"/cart"}>
            <BsCart size={20} />
          </Link>
        </div>
        <div>
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
