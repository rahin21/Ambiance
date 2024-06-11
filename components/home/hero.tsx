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
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      viewport={{ once: true, amount: 0.01 }}
        className={`container xl:px-[12.5rem] lg:px-[0rem] lg:flex ${
          index % 2 !== 0 ? "flex-row" : "flex-row-reverse"
        } justify-between items-center`}
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
        <div className="flex flex-col justify-content-center text-justify [text-align-last:center] font-semibold tracking-[2px] leading-7 text-[13px] lg:w-[32.25rem] text-lightText pt-5">
          <h1 className="header font-palatino text-[20px] tracking-[5px]">
            {heading}
          </h1>
          <p className="semi-header pt-2 font-dipotic text-[20px] font-medium">
            {subHeading}
          </p>
          {heading2 ? (
            <h1 className="header pt-3 font-palatino text-[20px] tracking-[5px]">
              {heading2}
            </h1>
          ) : (
            <span></span>
          )}
          <div className="flex justify-center p-8">
            <Image width="80" height="10" src="/divider.png" alt="divder" />
          </div>
          <p className="primary-text description [word-spacing:2px] text-[16px] pb-3">
            {p1}
          </p>
          {p2 ? (
            <p className="primary-text description pb-3 text-[16px]">{p2}</p>
          ) : (
            <span></span>
          )}
          <LinkOverLogo link={link} linkHeader={linkHeader} />
        </div>
      </motion.div>
  );
};

export default Hero;
