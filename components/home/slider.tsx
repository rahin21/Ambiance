"use client";
import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


function Slider({ sliderImages }: { sliderImages: string[] }) {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      className="container w-screen md:px-0 px-5 lg:px-24 mb-[-30px]"
    >

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mySwiper "
      >
        {sliderImages.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              className=" select-none"
              draggable={false}
              src={img}
              alt="slider-1"
              width="1400"
              height="100"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </motion.div>
  );
}

export default Slider;
