import React from "react";
import { Metadata } from "next";
import { getSliderData } from "@/constants/admin/slidersData";
import SliderInfo from "@/components/tailAdmin/Sliders/sliderInfo";
import { sliderType } from "@/types/types";
import ServiceTable from "@/components/tailAdmin/Services/serviceTable";
import { getServiceData } from "@/constants/admin/serviceData";

export const metadata: Metadata = {
  title: "Admin",
};

async function page() {
  const sliders = await getSliderData();
  const services = await getServiceData();

  return (
    <div>
      <h1 className="text-xl font-semibold text-black capitalize">sliders</h1>
      <div className="grid grid-cols-3 gap-7">
        {sliders.map((slider: sliderType) => (
          <div key={slider.id} className="">
            <SliderInfo
              slider={slider}
              className="h-[16rem] overflow-scroll no-scrollbar"
            />
          </div>
        ))}
      </div>

      <ServiceTable service={services} />
    </div>
  );
}

export default page;
