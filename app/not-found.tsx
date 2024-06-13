import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-8xl font-extrabold italic text-lightText/50 m-6">404!</h1>
      <p className="text-3xl mb-16">Not Found</p>
      <Link href={"/"} className="group p-2 px-4 text-lg bg-primary rounded-lg text-lightText font-semibold inline-flex items-center justify-center gap-x-2">
        <MdOutlineKeyboardBackspace className="text-2xl group-hover:rotate-45 duration-300"/>
        Back To Home
      </Link>
    </div>
  );
}

export default NotFound;
