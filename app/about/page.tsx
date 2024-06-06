import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ClientInfo from "@/components/about/clientInfo";
import Magazine from "@/components/about/magazine";

export const metadata: Metadata = {
  title: "Home",
};

function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ClientInfo/>
      <Magazine/>
    </div>
  );
}

export default page;
