import React from "react";
import { Metadata } from "next";
import { UploadForm } from "@/components/tailAdmin/uploadForm";


export const metadata: Metadata = {
  title: "Admin",
};

async function page() {
  return (

      <UploadForm/>

  );
}

export default page;
