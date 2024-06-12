import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import useDisclosure from "@/hooks/useDisclosure";

type navItemType = { label: string; href: string }[];

function Header({ navItems }: { navItems: navItemType }) {
  const {Show,showMenu} = useDisclosure();
  return (
    <div className="">
      <div className="bg-primary text-end lg:relative fixed top-0 w-full z-10">
        <div className="flex justify-end items-center p-3 lg:hidden">
          <button className="" onClick={showMenu}>
            <GiHamburgerMenu className="text-xl" />
          </button>
        </div>

        <div className="container font-openSans py-3 text-[13px] lg:block hidden">
          <Link className=" tracking-[2px]" href={"tel:2142657272"} onClick={showMenu}>
          (817)-925-2478
          </Link>
          <span className="px-5">.</span>
          <Link
            className="tracking-[2px]"
            href={"email:INFO@DEBORAH-DIERSHAW.COM"}
          >
            INFO@DEBORAH-DIERSHAW.COM
          </Link>
        </div>

        {navItems.map((navItem, i) => (
          <div
            key={i}
            className={`${
              Show ? "visible" : "hidden"
            } font-openSans tracking-[2px] p-2 text-center`}
          >
            <Link href={navItem.href} onClick={showMenu}>{navItem.label}</Link>
          </div>
        ))}
      </div>
      <Link href={"/"} className="flex items-center justify-center lg:pt-0 pt-10">
        <Image
          src={"/images/logo.jpeg"}
          width={270}
          height={100}
          alt="company logo"
        />
      </Link>
    </div>
  );
}

export default Header;
