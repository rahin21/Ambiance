import React from "react";
import type { Metadata } from "next";
import { portfolio } from "@/constants/portfolioData";
import Image from "next/image";
import Link from "next/link";
import LinkOverLogo from "@/components/linkOverLogo";

export const metadata: Metadata = {
  title: "Portfolio",
};
function page() {
  return (
    <div className="container mx-auto lg:w-[60%] lg:px-0">
      <div className=" grid md:grid-cols-2 gap-0 md:gap-4  grid-cols-1  px-5">
        {portfolio.map((data, i) => (
          <div key={i} className="flex flex-col justify-center items-center">
            <Link href={data.link} className="pb-5 pt-10">
              <Image src={data.img} width="480" height="0" alt="award" />
            </Link>
            <Link
              href={data.link}
              className="font-palatino text-lg tracking-[5px] opacity-70 hover:opacity-90 transition-all ease-in-out duration-200"
            >
              {data.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="lg:my-28 my-10">
        <LinkOverLogo link="/contact" linkHeader="CONTACT US" />
      </div>
    </div>
  );
}

export default page;
