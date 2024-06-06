import Image from "next/image";
import Link from "next/link";
import React from "react";

function Form() {
  return (
    <form className="flex flex-col font-openSans gap-3 min-w-[48%]">
      <input className="bg-primary border-none text-[#a7a1a4] text-center leading-3 px-5 text-[13px] focus-visible:outline-[#a7a1a4] focus-visible:[outline-style:solid] py-2" type="text" placeholder="NAME" />
      <input className="bg-primary border-none text-[#a7a1a4] text-center leading-3 px-5 text-[13px] focus-visible:outline-[#a7a1a4] focus-visible:[outline-style:solid] py-2" type="text" placeholder="EMAIL ADDRESS" />
      <input className="bg-primary border-none text-[#a7a1a4] text-center leading-3 px-5 text-[13px] focus-visible:outline-[#a7a1a4] focus-visible:[outline-style:solid] py-2" type="text" placeholder="PHONE NUMBER" />
      <input className="bg-primary border-none text-[#a7a1a4] text-center leading-3 px-5 text-[13px] focus-visible:outline-[#a7a1a4] focus-visible:[outline-style:solid] py-2" type="text" placeholder="LOCATION" />
      <input className="bg-primary border-none text-[#a7a1a4] text-center leading-3 px-5 text-[13px] focus-visible:outline-[#a7a1a4] focus-visible:[outline-style:solid] py-2" type="text" placeholder="PROJECT DETAILS" />
      <select name="iam" id="dropdown" className="bg-primary font-openSans border-none text-[#a7a1a4] text-center leading-3 px-5 text-[13px] focus-visible:outline-none py-2">
        <option value="I AM A...">I AM A...</option>
        <option value="Home Owner">Home Owner</option>
        <option value="Designer">Designer</option>
        <option value="Other">Designer</option>
      </select>
      <div className="group flex justify-center items-center mt-7 mb-5">
          <Image
            className="absolute opacity-30"
            height="10"
            width="100"
            src="/icons/main-logo.png"
            alt="logo"
          />
          <button
            className="relative text-lightText text-[15px] tracking-[3px] opacity-60 py-5 group-hover:opacity-80 transition-all ease-in-out duration-300 font-semibold"
          >
            Submit
          </button>
        </div>
    </form>
  );
}

export default Form;
