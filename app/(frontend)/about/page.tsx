import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ClientInfo from "@/components/about/clientInfo";
import Magazine from "@/components/about/magazine";
import Loading from "../loading";

export const metadata: Metadata = {
  title: "About",
};

async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/about`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function page() {

  const about = await getData();

  if(!about){
    return(<Loading/>)
  }
  
  return (
    <div className="container">
      <ClientInfo about={about}/>
      <Magazine/>
    </div>
  );
}

export default page;
