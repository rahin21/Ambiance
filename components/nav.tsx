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
    { label: "SHOWROOM", href: "/showroom" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <div className=" text-gray-500">
      <Header navItems={navItems} />
      <nav className="flex font-openSans text-[11px] tracking-widest mx-[24rem] justify-between">
        {navItems.map((navItem,i)=>(

        <div key={i} className="group hover:italic cursor-pointer lg:visible invisible">
          <Link className={`${currentPath === navItem.href? "italic": "" }  my-5`} href={navItem.href}>
            {navItem.label}
          </Link>
          <Image
            src={"/divider.png"}
            width={70}
            height={100}
            alt="company logo"
            className={`${currentPath === navItem.href? "visible": "invisible" } group-hover:visible my-1`}
          />
        </div>
        ))}
        
      </nav>
    </div>
  );
}

export default Nav;
