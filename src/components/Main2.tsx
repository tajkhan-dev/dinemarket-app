
import Image from "next/image";

export default function Main2() {
  return (
    <>
      <h1 className="font-extrabold mt-[100px] text-[45px] tracking-wider leading-[60px] absolute max-w-[500px] right-[100px]">
        Unique and Authentic Vintage Designer Jewellery
      </h1>
      <div className="mb-[150px] bg-[#FBFCFF] mt-[280px] flex justify-around">
        <div className="max-w-[600px] ">
          <h1 className="absolute tracking-wider leading-[110px] max-w-[100px] text-[#ECEDEF] text-[100px] font-extrabold ">
            Different from others
          </h1>
          <div className="relative  z-1 grid grid-cols-2 gap-x-28 gap-y-8">
            <div className="max-w-[160px]">
              <h6 className="font-bold text-lg">
                Using Good Quality Materials
              </h6>
              <p className="font-light mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="max-w-[160px]">
              <h6 className="font-bold text-lg">100% Handmade Products</h6>
              <p className="font-light mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="max-w-[160px]">
              <h6 className="font-bold text-lg">Modern Fashion Design</h6>
              <p className="font-light mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="max-w-[160px]">
              <h6 className="font-bold text-lg">Discount for Bulk Orders</h6>
              <p className="font-light mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[550px]">
          <div className=" flex ">
            <Image src={"/main.webp"} width={250} height={250} alt="" />
            <div className="max-w-[300px] ">
              <p className="text-justify p-6 font-extralight tracking-wider">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable
              </p>

              <button className="bg-black rounded p-4 mx-6 mt-3 text-white ">
                See All Product{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className=" text-[#ECEDEF] mx-auto left-0 right-0 z-[-1] absolute text-[115px]  tracking-widest font-extrabold">Newsletter</h1>
        <h3 className="font-extrabold text-[35px] tracking-wider">Subscribe Our Newsletter</h3>
        <p className="tracking-widest font-extralight mt-5">Get the latest information and promo offers directly</p>
        <div>
            <input className="border border-black text-left text-sm w-[350px] p-2  mt-8 mr-2" type="email" name="" id="" placeholder="Input Email Address" />
            <button className="bg-black text-white rounded  p-2">Get Started</button>
        </div>
      </div>
    </>
  );
}
