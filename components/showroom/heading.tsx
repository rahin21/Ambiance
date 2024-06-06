import Image from "next/image";
import React from "react";

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
];

function Heading() {
  return (
    <div className="flex flex-col justify-content-center text-justify font-semibold tracking-[2px] leading-7 text-[13px] text-lightText">
      <h1 className="header font-palatino text-[17px] tracking-[5px]">
        OUR EXCLUSIVE LINES
      </h1>
      <p className="semi-header pt-2 font-dipotic text-[18px] font-medium">
        available from our floor or to order
      </p>
      <div className="flex justify-center p-8 ">
        <Image width="80" height="10" src="/divider.png" alt="divder" />
      </div>

      <div className="container mx-auto grid grid-cols-2 sm:flex sm:justify-center sm:flex-wrap gap-12">
        {bestHomeData.map((data, i) => (
          <div key={i}>
            <Image
              width="150"
              height="100"
              src="/images/showroom/bestDhome.webp"
              alt="divder"
            />
            <p>{data.p1}</p>
            <p>{data.p2}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center p-8 ">
        <Image width="80" height="10" src="/divider.png" alt="divder" />
      </div>
    </div>
  );
}

export default Heading;
