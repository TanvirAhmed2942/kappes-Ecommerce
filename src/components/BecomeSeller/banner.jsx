import Image from "next/image";
import React from "react";
import SellerLogin from "./sellerLogin";

function SellerBanner() {
  return (
    <div className="bg-kappes w-full md:w-[85%] md:mx-auto flex p-6 flex-col md:flex-row item-center mt-6 lg:item-start justify-center gap-4 md:gap-10 lg:gap-16 xl:gap-40 rounded-xl">
      {/* Banner Section */}
      <div className=" flex flex-col  md:justify-between md:items-center items-center  ">
        <div className="md:flex-1 mb-6 md:mb-0 md:mr-6">
          <h1 className="text-2xl text-center md:text-left lg:text-left md:text-3xl font-bold text-white mb-2">
            Become a Seller of The Canuck Mall
          </h1>
          <p className="text-slate-200 text-center md:text-left ">
            Create your seller account now and reach millions of customers!
          </p>
        </div>
        <div className="w-full flex justify-end md:block  ">
          <Image
            src="/assets/becomeSeller/Seller.png"
            width={500}
            height={500}
            alt="Seller illustration"
            className="w-full "
            priority
          />
        </div>
      </div>
      <div className="w-full h-full lg:w-fit">
        <SellerLogin />
      </div>
    </div>
  );
}

export default SellerBanner;
