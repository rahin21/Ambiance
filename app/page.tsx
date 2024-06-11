"use client";

import Hero from "@/components/home/hero";
import Slider from "@/components/home/slider";
import datas from "@/constants/homeData";
import { homeSliderImages } from '@/constants/homeSliderImages';
import { motion } from "framer-motion";



export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center lg:mx-0 mx-5 mt-8 " >
      <motion.div
      className="card-container pb-14"
      initial={{ opacity: 0, y:100}}
      animate={{ opacity: 1,  y:0}}
      transition={{ duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01] }}
    >
      <Slider sliderImages={homeSliderImages} />
    </motion.div>
      {datas.map((data, i) => (
        <Hero
          key={i}
          heading={data.heading}
          heading2={data.heading2}
          subHeading={data.subHeading}
          p1={data.p1}
          p2={data?.p2}
          link={data.link}
          linkHeader={data.linkHeader}
          index={i+1}
        />
      ))}
    </main>
  );
}
