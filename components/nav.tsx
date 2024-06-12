"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Header from "./header";
import { usePathname } from "next/navigation";

function Nav() {
  const currentPath = usePathname();
  
  const navItems = [
    { label: "ABOUT", href: "/about" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "NEWS", href: "/news" },
    { label: "GET STARTED", href: "/get-started" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <div className="text-gray-500">
      <Header navItems={navItems} />
      <nav className="container flex justify-between font-openSans text-[15px] tracking-widest pt-4">
        {navItems.map((navItem,i)=>(

        <div key={i} className="group hover:italic cursor-pointer lg:flex text-center  hidden ">
          <Link className={`${currentPath === navItem.href? "italic": "" } my-5 lg:flex lg:flex-col lg:justify-center lg:items-center`} href={navItem.href}>
            {navItem.label}
          <Image
            src={"/divider.png"}
            width={70}
            height={100}
            alt="company logo"
            className={`${currentPath === navItem.href? "visible": "invisible" } group-hover:visible my-1`}
          />
          </Link>
        </div>
        ))}
        
      </nav>
    </div>
  );
}

export default Nav;
