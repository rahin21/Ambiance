import React from "react";
import type { Metadata } from "next";
import AccordionComponent from "@/components/getStarted/accordion";
import axios from "axios";

export const metadata: Metadata = {
  title: "Get Started",
};

async function page() {
  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/faq`);
  const questions = res.data;
  console.log(questions);
  return (
    <div className="container">
      <h1 className="header font-palatino text-lightText text-[24px] tracking-[5px] text-center py-5">
        F.A.Q
      </h1>
      <AccordionComponent questions={questions}/>
    </div>
  );
}

export default page;
