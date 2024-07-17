import React from "react";
import type { Metadata } from "next";
import Slider from "@/components/home/slider";
import Heading from "@/components/news/heading";
import Gallery from "@/components/news/gallery";
import Image from "next/image";
import axios from "axios";


export const metadata: Metadata = {
  title: "News",
};


async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/slider/news`)
  const slider = res.data
    // console.log(slider);
  return (
    <div className="container flex flex-col items-center justify-center pt-5">
      <Slider slider={slider} />
      <Heading />
      <Gallery searchParams={searchParams} />
     
      
    </div>
  );
}

export default page;
