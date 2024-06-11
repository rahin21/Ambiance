"use client";
import React from "react";
import ButtonOverLogo from "../buttonOverLogo";
import { motion } from "framer-motion";
import Input from "./input";

function Form() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      viewport={{ once: true, amount: 0.01 }}
      className="min-w-[48%]"
      >
      <form className="flex flex-col font-openSans gap-3 lg:mt-0 mt-3">
        <Input placeholder="NAME" />
        <Input placeholder="EMAIL ADDRESS" />
        <Input placeholder="PHONE NUMBER" />
        <Input placeholder="LOCATION" />
        <Input placeholder="PROJECT DETAILS" />
        <select
          name="iam"
          id="dropdown"
          className="bg-primary font-openSans border-none text-[#a7a1a4] text-center leading-3 px-5 text-[16px] focus-visible:outline-none py-2"
        >
          <option value="I AM A...">I AM A...</option>
          <option value="Home Owner">Home Owner</option>
          <option value="Designer">Designer</option>
        </select>
        <ButtonOverLogo>Submit</ButtonOverLogo>
      </form>
    </motion.div>
  );
}

export default Form;
