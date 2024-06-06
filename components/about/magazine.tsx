import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkOverLogo from "../linkOverLogo";

const arr = [1, 2, 3];
const image = [
  "D-Home-March.jpg",
  "DHome.webp",
  "LLC_D-Home.jpg",
  "LuxeInteriorsDesign.webp",
  "D-Home-March.jpg",
  "DHome.webp",
  "LLC_D-Home.jpg",
  "LuxeInteriorsDesign.webp",
  "D-Home-March.jpg",
  "DHome.webp",
  "LLC_D-Home.jpg",
  "LuxeInteriorsDesign.webp",
  "D-Home-March.jpg",
  "DHome.webp",
  "LLC_D-Home.jpg",
  "LuxeInteriorsDesign.webp",
  "D-Home-March.jpg",
  "DHome.webp",
  "LLC_D-Home.jpg",
  "LuxeInteriorsDesign.webp",
  "D-Home-March.jpg",
  "DHome.webp",
  "LLC_D-Home.jpg",
  "LuxeInteriorsDesign.webp",
  "D-Home-March.jpg",
  "DHome.webp",
  "LLC_D-Home.jpg",
  "LuxeInteriorsDesign.webp",
  "D-Home-March.jpg",
  "DHome.webp",
  "LLC_D-Home.jpg",
  "LuxeInteriorsDesign.webp",
  "D-Home-March.jpg",
  "DHome.webp",
  "LLC_D-Home.jpg",
  "LuxeInteriorsDesign.webp",
];

function Magazine() {
  return (
    <div className="flex flex-col items-center justify-center lg:mx-0 mx-5">
      <div className="h-[1px] w-full bg-gray-300 mt-8"></div>
      <h1 className=" text-lightText text-center font-palatino text-[17px] lg:tracking-[5px] tracking-[3px] py-8">
        RECOGNITION
      </h1>
      {/* award */}
      <div className="flex justify-between lg:w-[60%]">
        {arr.map((a) => (
          <a key={a} href={"../../assets/pdfs/dummy.pdf"}>
            <Image
              src={"/images/about/awards/awards-1-1.jpg"}
              width="420"
              height="0"
              alt="award"
            />
          </a>
        ))}
      </div>
      {/* magazine */}
      <div className="lg:flex lg:flex-wrap md:grid md:grid-cols-3 md:gap-3 grid grid-cols-2 gap-3 justify-between lg:w-[70%] ">
        {image.map((img, i) => (
          <a key={i} href={"../../assets/pdfs/dummy.pdf"}>
            <Image
              src={`/images/about/magazine/${img}`}
              width="320"
              height="322"
              alt="award"
              className="md:h-[400px] h-[250px]  my-3"
            />
          </a>
        ))}
      </div>
      <div className="my-8">
        <LinkOverLogo link="/portfolio" linkHeader="OUR PORTFOLIO" />
      </div>
    </div>
  );
}

export default Magazine;
