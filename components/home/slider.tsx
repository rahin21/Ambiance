import React from 'react'
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  return (
    <div className="lg:w-[70rem] w-auto mx-0 mb-[-30px]">
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
          <Image
            className=" select-none"
            draggable={false}
            src={"/images/home/slider-image-1.png"}
            alt="slider-1"
            width="1500"
            height="100"
          />
          <Image
            className=" select-none"
            draggable={false}
            src={"/images/home/silder-image-2.png"}
            alt="slider-2"
            width="1500"
            height="100"
          />
          <Image
            className=" select-none"
            draggable={false}
            src={"/images/home/slider-image-3.png"}
            alt="slider-2"
            width="1500"
            height="100"
          />
        </Carousel>
      </div>
  )
}

export default Slider