import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkOverLogo from "../linkOverLogo";
import axios from "axios";
import { GalleryType } from "@/types/types";

async function Magazine() {
  let gallery;
  let imgs:string[]=[];
  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/gallery`);
  gallery = res.data;
  gallery.map((item:GalleryType)=>{
    imgs.push(...item.imgs)
  })
  
  return (
    <div className="flex flex-col items-center justify-center lg:mx-0 mx-5">
      <div className="h-[1px] w-full bg-gray-300 mt-8"></div>
      <h1 className=" text-lightText text-center font-palatino text-[20px] lg:tracking-[5px] tracking-[3px] py-8">
        GALLERY
      </h1>

      {/* magazine */}
      <div className="lg:flex lg:flex-wrap md:grid md:grid-cols-3 md:gap-5 grid grid-cols-2 gap-3 justify-center">
        {imgs?.map((img:string) => (
          <div
            key={img}
            className="aspect-square w-[325px] overflow-hidden"
          >
          <Image
            src={img}
            width="1620"
            height="1620"
            alt="award"
            className="h-full w-full object-cover my-5"
          />
          </div>
        ))}
      </div>
      <div className="my-8">
        <LinkOverLogo link="/portfolio" linkHeader="OUR PORTFOLIO" />
      </div>
    </div>
  );
}

export default Magazine;
