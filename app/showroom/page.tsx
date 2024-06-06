import React from "react";

import type { Metadata } from "next";
import Slider from "@/components/home/slider";
import { showroomSliderImages } from "@/constants/showroomSliderImages";
import Heading from "@/components/showroom/heading";
import Gallery from "@/components/showroom/gallery";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Showroom",
};
function page() {
  return (
    <div className="flex flex-col items-center justify-center lg:mx-0 mx-5 mt-8">
      <Slider sliderImages={showroomSliderImages} />
      <Heading />
      <Gallery />
      <div className="text-center text-lightText tracking-[2px] leading-7 text-[13px] lg:py-16 mt-10 py-10">
        <h1 className="header font-palatino text-[17px] tracking-[5px]">
          #LAURALEECLARKSHOWROOM
        </h1>
        <p className="semi-header pt-2 font-dipotic text-[18px] font-medium">
          shop the showroom floor
        </p>
        <div className="flex justify-center p-8 ">
          <Image width="80" height="10" src="/divider.png" alt="divder" />
        </div>
      </div>
    </div>
  );
}

export default page;
