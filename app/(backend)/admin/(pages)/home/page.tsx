import SliderInfo from "@/components/tailAdmin/Sliders/sliderInfo";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ServiceTable from "@/components/tailAdmin/Services/serviceTable";
import { getServiceData } from "@/constants/admin/serviceData";

async function Home() {
  let slider;
  let services;
  try {
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/slider/home`);
    slider = res.data;
    services = await getServiceData();
  } catch (error) {
    console.log(error);
  }
  
  return (
    <div>
      <SliderInfo slider={slider}/>
      <ServiceTable service={services}/>
    </div>
  );
}

export default Home;
