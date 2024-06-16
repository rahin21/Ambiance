import React from "react";

import type { Metadata } from "next";
import Image from "next/image";
import Input from "@/components/contact/input";
import LoginForm from "@/components/loginForm";
export const metadata: Metadata = {
  title: "Dashboard",
};


function page() {
  return (
    <div className="container mx-auto lg:px-0 px-5">
      <div className="flex flex-col justify-content-center text-justify [text-align-last:center] font-semibold tracking-[2px] leading-7 text-[13px] text-lightText">
        <h1 className="header font-palatino text-[20px] tracking-[5px] py-8 uppercase">
        Dashboard
        </h1>
        <p className="semi-header pt-2 font-openSans font-medium py-2 text-[16px]">
          This content is password protected. To view it please enter your
          password below:
        </p>
      </div>
      <div className="flex flex-col text-center items-center">
          <LoginForm/>

      </div>
    </div>
  );
}

export default page;
