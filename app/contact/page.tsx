import React from "react";
import type { Metadata } from "next";
import ContactBox from "@/components/contact/contactBox";
import Form from "@/components/contact/form";
import ContactImg from "@/components/contact/contactImg";


export const metadata: Metadata = {
  title: "Contact",
};
function page() {
  return (
    <div className="container">
      <ContactImg/>
      <div className="lg:flex justify-between items-start min-w-[59.6%] gap-5 pt-3">
        <ContactBox />
        <Form />
      </div>
    </div>
  );
}

export default page;
