import SliderForm from "@/components/tailAdmin/Sliders/sliderForm";
import SliderInfo from "@/components/tailAdmin/Sliders/sliderInfo";
import { sliderType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/slider`, {
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
      <SliderForm params={{ key: "" }} imgs={[""]} />
      <div>
        {data.map((slider: sliderType) => (
          <SliderInfo key={slider.id} slider={slider} />
        ))}
      </div>
    </div>
  );
}

export default Sliders;
