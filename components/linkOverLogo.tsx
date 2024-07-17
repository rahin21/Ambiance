import Image from "next/image";
import Link from "next/link";
import React from "react";

function LinkOverLogo({
  link,
  linkHeader,
}: {
  link: string;
  linkHeader: string;
}) {
  return (
    <div className="group flex justify-center items-center mt-7 mb-5">
      <Image
        className="absolute opacity-30"
        height="10"
        width="100"
        src="/icons/main-logo.png"
        alt="logo"
      />
      <Link
        href={link}
        className="relative text-lightText text-[15px] tracking-[3px] opacity-60 py-5 group-hover:opacity-90 transition-all ease-in-out duration-300 font-semibold uppercase"
      >
        {linkHeader}
      </Link>
    </div>
  );
}

export default LinkOverLogo;
