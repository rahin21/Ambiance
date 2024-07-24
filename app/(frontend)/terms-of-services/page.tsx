import React from "react";
import type { Metadata } from "next";
import { getTermData } from "@/constants/admin/privacyData";

export const metadata: Metadata = {
  title: "Terms of Services",
};
async function page() {
  const terms = await getTermData();
  return (
    <div className="container mx-auto text-justify text-[16px] [text-align-last:center] font-openSans leading-8 tracking-[2px] font-semibold text-lightText opacity-80">
      {/* TERMS AND CONDITIONS  */}
      <article className="prose max-w-none prose-headings:text-lightText prose-headings:font-normal prose-headings:uppercase" dangerouslySetInnerHTML={{__html:terms.description}}></article>
    </div>
  );
}

export default page;
