import Image from "next/image";
import React, { MouseEventHandler, useEffect, useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

type navItemType = { label: string; href: string }[];

function Header({ navItems }: { navItems: navItemType }) {
  const [Show, setShow] = useState<boolean>(false);
  function showMenu(): any {
    if (!Show) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  return (
    <div>
      <div className="bg-primary text-end">
        <div className="flex justify-end items-center p-3 lg:hidden">
          <button className="" onClick={showMenu}>
            <GiHamburgerMenu className="text-xl" />
          </button>
        </div>

        <div className="container font-openSans py-3 text-[11px] lg:block hidden">
          <Link className=" tracking-[2px]" href={"tel:2142657272"}>
            214-265-7272
          </Link>
          <span className="px-5">.</span>
          <Link
            className="tracking-[2px]"
            href={"email:INFO@LAURALEECLARK.COM"}
          >
            INFO@LAURALEECLARK.COM
          </Link>
        </div>

        {navItems.map((navItem, i) => (
          <div
            key={i}
            className={`${
              Show ? "visible" : "hidden"
            } font-openSans tracking-[2px] p-2 `}
          >
            <Link href={navItem.href}>{navItem.label}</Link>
          </div>
        ))}
      </div>
      <Link href={"/"} className="flex items-center justify-center py-4">
        <Image
          src={"/images/logo.png"}
          width={270}
          height={100}
          alt="company logo"
        />
      </Link>
    </div>
  );
}

export default Header;
