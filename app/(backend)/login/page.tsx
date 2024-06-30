
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import LoginForm from "@/components/loginForm";

export const metadata: Metadata = {
  title: "Login",
};

async function page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return (
      <LoginForm/>
    );
  } else {
    redirect("/admin");
  }
}

export default page;
