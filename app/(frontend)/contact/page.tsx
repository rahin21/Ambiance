import React from "react";
import type { Metadata } from "next";
import ContactBox from "@/components/contact/contactBox";
import Form from "@/components/contact/form";
import ContactImg from "@/components/contact/contactImg";
import axios from "axios";
import Slider from "@/components/home/slider";


export const metadata: Metadata = {
  title: "Contact",
};
async function page() {
  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/slider/contact`)
  const slider = res.data
  return (
    <div className="container">
      <Slider slider={slider}/>
      <div className="lg:flex justify-between items-start min-w-[59.6%] gap-5 pt-3">
        <ContactBox />
        <Form />
      </div>
    </div>
  );
}

export default page;
