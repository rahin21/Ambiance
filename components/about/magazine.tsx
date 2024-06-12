import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkOverLogo from "../linkOverLogo";
import { arr, aboutImages } from "@/constants/aboutData";

function Magazine() {
  return (
    <div className="flex flex-col items-center justify-center lg:mx-0 mx-5">
      <div className="h-[1px] w-full bg-gray-300 mt-8"></div>
      <h1 className=" text-lightText text-center font-palatino text-[20px] lg:tracking-[5px] tracking-[3px] py-8">
        GALLERY
      </h1>

      {/* magazine */}
      <div className="lg:flex lg:flex-wrap md:grid md:grid-cols-3 md:gap-3 grid grid-cols-2 gap-3 justify-center">
        {aboutImages.map((img, i) => (
          <Image
            key={i}
            src={`/images/about/gallery/${img}`}
            width="320"
            height="322"
            alt="award"
            className="sm:h-[320px] h-[190px]  my-3"
          />
        ))}
      </div>
      <div className="my-8">
        <LinkOverLogo link="/portfolio" linkHeader="OUR PORTFOLIO" />
      </div>
    </div>
  );
}

export default Magazine;
