"use client";

import Hero from "@/components/home/hero";
import Slider from "@/components/home/slider";
import datas from "@/constants/homeData";
import { homeSliderImages } from '@/constants/homeSliderImages';

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center lg:mx-0 mx-5">
      <Slider sliderImages={homeSliderImages} />
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
