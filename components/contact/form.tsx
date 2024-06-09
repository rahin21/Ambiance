"use client"
import React from "react";
import ButtonOverLogo from "../buttonOverLogo";
import { variantsSlideIn } from "@/libs/motion";
import { motion } from "framer-motion";

function Form() {
  return (
    <motion.div
      initial={variantsSlideIn.right}
      whileInView={variantsSlideIn.onscreen}
      transition={{
        type: "tween",
        duration: 1,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full"
    >
      <form className="flex flex-col font-openSans gap-3 min-w-[48%] lg:mt-0 mt-3">
        <input
          className="bg-primary border-none text-[#a7a1a4] text-center leading-3 px-5 text-[13px] focus-visible:outline-[#a7a1a4] focus-visible:[outline-style:solid] py-2"
          type="text"
          placeholder="NAME"
        />
        <input
          className="bg-primary border-none text-[#a7a1a4] text-center leading-3 px-5 text-[13px] focus-visible:outline-[#a7a1a4] focus-visible:[outline-style:solid] py-2"
          type="text"
          placeholder="EMAIL ADDRESS"
        />
        <input
          className="bg-primary border-none text-[#a7a1a4] text-center leading-3 px-5 text-[13px] focus-visible:outline-[#a7a1a4] focus-visible:[outline-style:solid] py-2"
          type="text"
          placeholder="PHONE NUMBER"
        />
        <input
          className="bg-primary border-none text-[#a7a1a4] text-center leading-3 px-5 text-[13px] focus-visible:outline-[#a7a1a4] focus-visible:[outline-style:solid] py-2"
          type="text"
          placeholder="LOCATION"
        />
        <input
          className="bg-primary border-none text-[#a7a1a4] text-center leading-3 px-5 text-[13px] focus-visible:outline-[#a7a1a4] focus-visible:[outline-style:solid] py-2"
          type="text"
          placeholder="PROJECT DETAILS"
        />
        <select
          name="iam"
          id="dropdown"
          className="bg-primary font-openSans border-none text-[#a7a1a4] text-center leading-3 px-5 text-[13px] focus-visible:outline-none py-2"
        >
          <option value="I AM A...">I AM A...</option>
          <option value="Home Owner">Home Owner</option>
          <option value="Designer">Designer</option>
          <option value="Other">Designer</option>
        </select>

        <ButtonOverLogo>Submit</ButtonOverLogo>
      </form>
    </motion.div>
  );
}

export default Form;
