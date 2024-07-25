import { cn } from "@/lib/utils";
import { sliderType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";


function SliderInfo({slider,className}:{slider:sliderType; className?:string}) {

  return (
    <div className={cn(`border border-stroke bg-black/20 p-5 shadow-default mt-8`,className)}>
      <div className="flex justify-between mb-3">
        <h1 className="text-lg font-semibold text-black capitalize">
          {slider.key} sliders
        </h1>
        <Link
          href={`/admin/sliders/${slider.key}`}
          className="inline-flex items-center justify-center bg-black px-4 py-1  text-center font-medium text-white hover:bg-opacity-90 "
        >
          Edit
        </Link>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-start gap-5">
        {slider.img.map((image) => (
          <div key={image}>
            <Image src={image} alt="img-home" width={120} height={120} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderInfo;
