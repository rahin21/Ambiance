import LinkOverLogo from "@/components/linkOverLogo";
import ImagePreviewer from "@/components/portfolio/imagePreviewer";
import { kipsBayDallas } from "@/constants/portfolio-kips/kips-bay-Images";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";


export const metadata: Metadata = {
  title: "Kips Bay Dallas 2023",
};

function page() {
  return (
    <div className="container">
      <div className="py-5">
        <LinkOverLogo link="/portfolio" linkHeader="BACK TO GALLERIES" />
      </div>
        <h1 className="header text-center text-lightText font-palatino text-[17px] tracking-[5px]">
          KIPS BAY DALLAS 2023
        </h1>
      <div className="flex justify-center p-8 mb-10">
        <Image width="80" height="10" src="/divider.png" alt="divder" />
      </div>
      <ImagePreviewer images={kipsBayDallas} />
      <div className="py-5">
        <LinkOverLogo link="/portfolio" linkHeader="BACK TO GALLERIES" />
      </div>
    </div>
  );
}

export default page;
