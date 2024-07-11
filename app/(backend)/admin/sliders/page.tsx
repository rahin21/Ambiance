import SliderForm from "@/components/tailAdmin/Sliders/sliderForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/slider", {
    next: { tags: ["slider"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Sliders() {
  const data = await getData();

  return (
    <div>
      <SliderForm params={{ key: "" }}  imgs={[""]} />
      <div>
        {data.map((item: { id: string; key: string; img: string[] }) => (
          <div
            key={item.id}
            className="border border-stroke bg-black/20 px-7.5 py-6 shadow-default mt-8"
          >
            <div className="flex justify-between mb-5">
              <h1 className="text-2xl font-semibold text-black capitalize">
                {item.key} slider
              </h1>
              <Link
                href={`/admin/sliders/${item.key}`}
                className="inline-flex items-center justify-center bg-black px-4 py-1 text-center font-medium text-white hover:bg-opacity-90 "
              >Edit</Link>
            </div>
            <div className="flex gap-5">
              {item.img.map((image) => (
                <div key={image}>
                  <Image src={image} alt="img-home" width={150} height={150} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sliders;
