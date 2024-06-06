import Image from "next/image";
import Link from "next/link";
import React from "react";

type dataType = {
  heading: string;
  subHeading: string;
  p1: string;
  p2: string;
  link: string;
}[];

const Hero = ({
  heading,
  heading2,
  subHeading,
  p1,
  p2,
  link,
  linkHeader,
  index,
}: {
  heading: string;
  heading2?: string;
  subHeading: string;
  p1: string;
  p2?: string;
  link: string;
  linkHeader: string;
  index: number;
}) => {
  return (
    <div
      className={`container xl:px-[13rem] lg:px-[0rem] lg:flex ${
        index % 2 !== 0 ? "flex-row" : "flex-row-reverse"
      } justify-between items-center`}
    >
      <div>
        <Image
          className="select-none mb-5 lg:mb-0"
          src={`/images/home/interior-design-${index}.png`}
          alt="interior design"
          width="560"
          height="100"
        />
      </div>
      <div className="flex flex-col justify-content-center text-justify [text-align-last:center] font-semibold tracking-[2px] leading-7 text-[13px] lg:w-[32.25rem] text-lightText">
        <h1 className="header font-palatino text-[17px] tracking-[5px]">
          {heading}
        </h1>
        <p className="semi-header pt-2 font-dipotic text-[18px] font-medium">
          {subHeading}
        </p>
        {heading2 ? (
          <h1 className="header pt-3 font-palatino text-[17px] tracking-[5px]">
            {heading2}
          </h1>
        ) : (
          <span></span>
        )}
        <div className="flex justify-center p-8 ">
          <Image width="80" height="10" src="/divider.png" alt="divder" />
        </div>
        <p className="primary-text description [word-spacing:2px] pb-3">{p1}</p>
        {p2 ? (
          <p className="primary-text description pb-3">{p2}</p>
        ) : (
          <span></span>
        )}
        <div className="group flex justify-center items-center mt-7 mb-5">
          <Image
            className="absolute opacity-30"
            height="10"
            width="100"
            src="/icons/main-logo.png"
            alt="logo"
          />
          <Link
            href={link}
            className="relative text-[15px] tracking-[3px] opacity-60 py-5 group-hover:opacity-80 transition-all ease-in-out duration-300"
          >
            {linkHeader}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
