import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ClientInfo from "@/components/about/clientInfo";
import Magazine from "@/components/about/magazine";

export const metadata: Metadata = {
  title: "About",
};

function page() {
  return (
    <div className="container">
      <ClientInfo/>
      <Magazine/>
    </div>
  );
}

export default page;
