import React from "react";

import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Beverly Drive",
};
function page() {
  return (
    <div className="container mx-auto lg:px-0 px-5">
      <div className="flex flex-col justify-content-center text-justify [text-align-last:center] font-semibold tracking-[2px] leading-7 text-[13px] text-lightText">
        <h1 className="header font-palatino text-[20px] tracking-[5px] py-8">
          BEVERLY DRIVE
        </h1>
        <p className="semi-header pt-2 font-openSans font-medium py-2 text-[16px]">
          This content is password protected. To view it please enter your
          password below:
        </p>
      </div>
      <div className="flex flex-col text-center items-center">
        <label className="text-lightText tracking-[2px] pb-1 text-[16px]">Password:</label>
        <input
          className="bg-primary border-none text-[#a7a1a4] text-center md:w-[25%] w-full leading-3 px-5 text-[13px] focus-visible:outline-[#a7a1a4] focus-visible:[outline-style:solid] py-2"
          type="password"
        />
        <div className="group flex justify-center items-center mt-7 mb-5">
          <Image
            className="absolute opacity-30"
            height="10"
            width="100"
            src="/icons/main-logo.png"
            alt="logo"
          />
          <button
            className="relative text-lightText text-[15px] tracking-[3px] opacity-60 py-16 group-hover:opacity-80 transition-all ease-in-out duration-300 font-semibold "
          >
            ENTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
