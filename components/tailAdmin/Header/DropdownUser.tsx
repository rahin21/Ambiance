import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClickOutside from "../ClickOutside";
import { FaChevronDown } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black ">
            Deborah Diershaw
          </span>
          <span className="block text-xs">Ambiance Design</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src={"/images/logo-sm.png"}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="User"
          />
        </span>

          {/* <button
            className="flex items-center gap-3.5 px-[22px] py-4 font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            onClick={() => signOut()}
          >
            <BiLogOut className="text-3xl" />
          </button> */}
          <FaChevronDown />
      </Link>
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-[#C7CBD1] shadow-default `}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-4 dark:border-strokedark">
            <li>
              <Link
                href="/admin/profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <IoPersonOutline className="text-xl" />
                My Profile
              </Link>
            </li>
          </ul>
          <button
            className="flex items-center gap-3.5 px-[22px] py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            onClick={() => signOut()}
          >
            <BiLogOut className="text-xl" />
            Log Out
          </button>
        </div>
      )}

     
        
   
    </ClickOutside>
  );
};

export default DropdownUser;
