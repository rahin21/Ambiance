"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function PortfolioGallery({
  entries,
}: {
  entries: { name: string; img: string; link: string }[];
}) {
  return (
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        viewport={{once: false}}
        >
            <div className=" grid md:grid-cols-2 gap-0 md:gap-4  grid-cols-1  px-5">
      {entries.map((data, i) => (

            <div  key={i} className="flex flex-col justify-center items-center">
              <Link href={data.link} className="pb-5 pt-8">
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
        </motion.div>
  );
}

export default PortfolioGallery;
