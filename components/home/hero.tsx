import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LinkOverLogo from "../linkOverLogo";
import { motion, Variants } from "framer-motion";
import { variantsSlideIn } from "../../libs/motion";

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
      className={`container xl:px-[12.5rem] lg:px-[0rem] lg:flex ${
        index % 2 !== 0 ? "flex-row" : "flex-row-reverse"
      } justify-between items-center`}
    >
      <motion.div

        initial={index % 2 !== 0 ? variantsSlideIn.left:variantsSlideIn.right }
        whileInView={variantsSlideIn.onscreen}
        transition= {variantsSlideIn.transition}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div>
          <Image
            className="select-none mb-5 lg:mb-0"
            src={`/images/home/interior-design-${index}.png`}
            alt="interior design"
            width="568"
            height="100"
          />
        </div>
      </motion.div>
      <motion.div
        initial={index % 2 !== 0 ? variantsSlideIn.right:variantsSlideIn.left }
        whileInView={variantsSlideIn.onscreen}
        transition={variantsSlideIn.transition}
        viewport={{ once: true, amount: 0.4 }}
      >
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
          <p className="primary-text description [word-spacing:2px] pb-3">
            {p1}
          </p>
          {p2 ? (
            <p className="primary-text description pb-3">{p2}</p>
          ) : (
            <span></span>
          )}
          <LinkOverLogo link={link} linkHeader={linkHeader} />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
