import type { Metadata } from "next";
import { redirect } from "next/navigation";
import axios from "axios";
import SignUpForm from "@/components/tailAdmin/signupForm";

export const metadata: Metadata = {
  title: "Login",
};

async function page() {
  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/auth/user`);
  const user = res.data;

  if (user.length > 0) {
    redirect("/signin");
  } else {
    return (
      <div>
        <SignUpForm/>
      </div>
    );
  }
}

export default page;
