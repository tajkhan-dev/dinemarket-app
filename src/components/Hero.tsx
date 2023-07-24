
import Image from "next/image";
import { BsCart } from "./Icon";

export default function Hero() {
  return (
    <>
      <div className="lg:flex justify-around">
        <div className=" md:ml-[30px] max-w-[500px] mt-[50px] lg:mt-[100px]">
          <button className="bg-[#E1EDFF]  text-[#0000FF] rounded-lg p-2  font-semibold">
            Sale 70%
          </button>
          <h1 className="text-[40px] md:text-[60px] font-bold md:leading-[70px]">
            An Industrial Take on Streetwear
          </h1>
          <p className=" mt-5 font-light">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <button className=" mt-5 flex px-2 font-bold bg-black rounded-lg p-2 text-white">
            <BsCart stroke="" size={25} />
            Start Shopping
          </button>
          <div className="grid min-[320px]:grid-cols-2 lg:grid-cols-4 min-[320px]:justify-center md:justify-between mt-5">
            <Image src={"/Featured1.webp"} alt="" width={100} height={100} />
            <Image src={"/Featured2.webp"} alt="" width={100} height={100} />

            <Image src={"/Featured3.webp"} alt="" width={100} height={100} />

            <Image src={"/Featured4.webp"} alt="" width={100} height={100} />
          </div>
        </div>
        <div className="md:hidden lg:block rounded-full bg-[#FFECE3] mt-[22px]">
          <Image
            src={"/header.webp"}
            className="z-10"
            alt=""
            height={570}
            width={570}
          />
        </div>
      </div>
    </>
  );
}
