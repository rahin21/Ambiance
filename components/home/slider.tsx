"use client"
import React from 'react'
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion"

function Slider({sliderImages}:{sliderImages:string[]}) {
  return (
    <motion.div
    initial={{scale:0.5}}
    animate={{scale:1}}
     className="lg:w-[71rem] w-auto mx-0 mb-[-30px]">
        <Carousel
          autoPlay
          infiniteLoop
          showIndicators={false}
          interval={3000}
          emulateTouch
          swipeable
          showArrows={false}
          showStatus={false}
        >
          {sliderImages.map((img,i)=>(
          <Image
            key={i}
            className=" select-none"
            draggable={false}
            src={img}
            alt="slider-1"
            width="1500"
            height="100"
          />
          ))}
        </Carousel>
      </motion.div>
  )
}

export default Slider