import React from "react";

import type { Metadata } from "next";
import Slider from "@/components/home/slider";
import { newsSliderImages } from "@/constants/newsSliderImages";
import Heading from "@/components/news/heading";
import Gallery from "@/components/news/gallery";
import Image from "next/image";


export const metadata: Metadata = {
  title: "News",
};


function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  
    
  return (
    <div className="flex flex-col items-center justify-center pt-5">
      <Slider sliderImages={newsSliderImages} />
      <Heading />
      <Gallery searchParams={searchParams} />
      
    </div>
  );
}

export default page;
