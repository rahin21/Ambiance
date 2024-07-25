
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import LoginForm from "@/components/loginForm";
import axios from "axios";

export const metadata: Metadata = {
  title: "Login",
};

async function page() {
  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/auth/user`);
  const user = res.data;

  const session = await getServerSession(authOptions);
  if(user<1){
    redirect("/signup")
  }
  if (!session?.user) {
    return (
      <LoginForm/>
    );
  } else {
    redirect("/admin");
  }
}

export default page;
