import SliderInfo from "@/components/tailAdmin/Sliders/sliderInfo";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getServiceData } from "@/app/(backend)/admin/services/page";
import ServiceTable from "@/components/tailAdmin/Services/serviceTable";

async function Home() {
  let slider;
  let services;
  try {
    const res = await axios.get(`http://localhost:3000/api/slider/home`);
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
