import Image from "next/image";

export default function Promotion() {
  

// const arr =[]

  return (
    <>
    <div className="min-[320px]:m-5">

      <div className="text-center mt-20 mb-5">
        <p className="text-[#0062F7] text-sm font-semibold mb-5">PROMOTIONS</p>
        <h1 className="text-[35px] font-extrabold">Our Promotion Events</h1>
      </div>
      <div className="lg:flex lg:justify-evenly">
        <div>
          <div className=" h-[200px] flex justify-around bg-[#D6D6D8] max-w-[700px] mx-auto ">
            <div className=" p-2 max-w-[180px]">
              <p className="  md:text-[40px] font-bold">Get UP to 60%</p>
              <p>for the summer season</p>
            </div>
            <Image src={"/event1.webp"} width={260} height={260} alt="event1" />
          </div>

          <div className=" mt-5 text-center text-white p-2  h-[200px]  bg-[#212121] max-w-[700px] mx-auto ">
            <p className="text-[40px] font-bold mt-5">Get 30% Off</p>
            <p>use promo code</p>
            <button className="mt-2 bg-[#474747] rounded-lg text-lg  p-2">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
<div className="md:flex gap-10 justify-center items-center">


        <div className="bg-[#EFE1C7] h-[420px] max-w-[300px]">
          <p>Flex Sweatshirt</p>
          <p>
            <del>$100</del> <ins>$75:00</ins>
          </p>
          <Image className="mt-5" src={"/event2.webp"} width={275} height={275} alt={""} />
        </div>
        <div className="bg-[#D6D6D8] h-[420px] max-w-[300px]">
          <p>Flex Push Buttpn Bomber</p>
          <p>
            <del>$225</del> <ins className="font-bold">$190:00</ins>
          </p>
          <Image  className="mt-3" src={"/event3.webp"} width={275} height={275} alt={""} />
        </div>
</div>
      </div>
    </div>
    </>
  );
}






