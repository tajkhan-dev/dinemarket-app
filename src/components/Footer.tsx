
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "./Icon";

export default function Footer() {
  return (
    <>
      <div className="flex justify-around  mt-[200px]">
        <div className="max-w-[300px] ">
          <Image src={"/logo.webp"} alt="" width={200} height={0} />
          <p className="font-light mt-10">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex justify-start mt-10 gap-x-6">
            <FaTwitter className="bg-[#F1F1F1] p-1" size={35} />
            <FaFacebookF className="bg-[#F1F1F1] p-1 " size={35} />
            <FaLinkedinIn className="bg-[#F1F1F1] p-1 " size={35} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[#666666] text-[20px] font-bold">Company</p>
          <Link href={''}>About</Link>
          <Link href={''}>Terms of Use</Link>

          <Link href={''}>Privacy Policy</Link>
          <Link href={''}>How it Works</Link>

          <Link href={''}>Contact Us</Link>
        </div>
        <div className="flex flex-col gap-4">
        <p className="text-[#666666] text-[20px] font-bold">Support</p>
          <Link href={''}>Support Carrer</Link>
          <Link href={''}>24h Service</Link>

          <Link href={''}>Quick Chat</Link>
          
        </div>
        <div className="flex flex-col gap-4">
        <p className="text-[#666666] text-[20px] font-bold">Contact</p>
          <Link href={''}>Whatsapp</Link>
          <Link href={''}>Support 24h</Link>

         
        </div>
      </div>
      <div className="inline-flex items-center justify-center w-full">
    <hr className="w-[87%] h-[2px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2">
        <svg aria-hidden="true" className="w-5 h-5 text-gray-700 " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    </div>
</div>
<div className="flex justify-around text-center">
  <p  className="w-[160px]">Copyright © 2022 Dine Market</p>
  <p className="w-[160px]">Design by. <span className="font-bold"> Weird Design Studio</span></p>
  <p className="w-[200px]">Code by.  <span className="font-bold">Zainulabdeen-101 on github</span>  </p>
</div>
    </>
  );
}
