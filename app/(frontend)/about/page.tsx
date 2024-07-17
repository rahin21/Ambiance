import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ClientInfo from "@/components/about/clientInfo";
import Magazine from "@/components/about/magazine";
import axios from "axios";

export const metadata: Metadata = {
  title: "About",
};

async function page() {

  let about;
  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/about`);
  about = res.data
  

  return (
    <div className="container">
      <ClientInfo about={about}/>
      <Magazine/>
    </div>
  );
}

export default page;
