import React from 'react'
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGooglemybusiness } from "react-icons/si";

function Social({className}:{className?:string}) {
  return (
    <div className={`flex justify-center items-center gap-5 p-5 ${className}`}>
          <Link
            className="icon-link"
            href="https://www.facebook.com/LauraLeeClarkID/"
          >
            <FaFacebookF className=" text-2xl" />
          </Link>
          <Link
            className="icon-link"
            href="https://www.pinterest.com/lauraleeclarkid/?eq=laura%20lee%20car&etslf=8558"
          >
            <FaPinterest className=" text-2xl" />
          </Link>
          <Link
            className="icon-link ms-1"
            href="https://www.instagram.com/lauraleeclarkinteriordesign/"
          >
            <ImInstagram className=" text-2xl" />
          </Link>
          <Link
            className="icon-link ms-1"
            href="https://www.instagram.com/lauraleeclarkinteriordesign/"
          >
            <FaXTwitter className=" text-2xl" />
          </Link>
          <Link
            className="icon-link ms-1"
            href="https://www.instagram.com/lauraleeclarkinteriordesign/"
          >
            <SiGooglemybusiness className=" text-2xl" />
          </Link>
        </div>
  )
}

export default Social