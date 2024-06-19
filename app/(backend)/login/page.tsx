import React from "react";
import type { Metadata } from "next";

import LoginForm from "@/components/loginForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = {
  title: "Login",
};


async function page() {
  const session = await getServerSession(authOptions);
  if(!session?.user){
  return (
    <div className="container flex flex-col justify-center mx-auto lg:px-0 px-5 h-screen">

      <div className="flex flex-col justify-content-center text-justify [text-align-last:center] font-semibold tracking-[2px] leading-7 text-[16px] text-lightText">
          <LoginForm/>
      </div>

      
    </div>
  );
} else {
  redirect('/admin')
}
}

export default page;
