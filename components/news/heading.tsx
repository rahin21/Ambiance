"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



const bestHomeData = [
  {
    p1: "Best Traditionnal",
    p2: "Furniture",
  },
  {
    p1: "Best Home",
    p2: "Accessories Store",
  },
  {
    p1: "Best Home",
    p2: "Accessories Store",
  },
  {
    p1: "100 Best Shops in",
    p2: "Dallas",
  },
  {
    p1: "Best Traditionnal",
    p2: "Furniture",
  },
  {
    p1: "Best Addition to",
    p2: "Dragon Street",
  },
  {
    p1: "Best Addition to",
    p2: "Dragon Street",
  },
  {
    p1: "Best Addition to",
    p2: "Dragon Street",
  },
  {
    p1: "Best Addition to",
    p2: "Dragon Street",
  },
  {
    p1: "Best Addition to",
    p2: "Dragon Street",
  },
];

function Heading() {
  return (
    <div className="flex flex-col justify-center text-justify items-center font-semibold tracking-[2px] pt-20 pb-10 leading-7 text-lightText">
      <h1 className="header font-palatino text-[20px] tracking-[5px]">
        OUR EXCLUSIVE LINES
      </h1>
      <p className="semi-header pt-2 font-dipotic text-[20px] font-medium">
        available from our floor or to order
      </p>
      <div className="flex justify-center p-8 ">
        <Image width="80" height="10" src="/divider.png" alt="divder" />
      </div>

      {/* <Swiper
        slidesPerView={6}
        className="mySwiper container lg:w-[80%] w-screen sm:mx-0 mx-5"
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          '@0.75': {
            slidesPerView: 3,
            spaceBetween: -90,
          },
          '@1.00': {
            slidesPerView: 4,
            spaceBetween: -40,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: -60,
          },
        }}
      >
        {bestHomeData.map((data, i) => (
          <SwiperSlide key={i}
          >
            <div className="flex flex-col items-center justify-center">
              <Image
                width="150"
                height="100"
                src="/images/news/bestDhome.webp"
                alt="divder"
              />
              <p className="text-[15px]">{data.p1}</p>
              <p className="text-[15px]">{data.p2}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}

      {/* <div className="flex justify-center p-8 ">
        <Image width="80" height="10" src="/divider.png" alt="divder" />
      </div> */}
    </div>
  );
}

export default Heading;
