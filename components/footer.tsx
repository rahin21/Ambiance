import Image from "next/image";
import Link from "next/link";
import React from "react";
import CopyRight from "./copyRight";
import { FaFacebookF } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGooglemybusiness } from "react-icons/si";

function Footer() {
  return (
    <div className="text-center mt-10">
      <CopyRight />
      <div className="bg-primary font-openSans text-lg tracking-[2px] font-semibold text-[#a7a1a4] mt-16 py-4">
        <h2 className="text-xl font-palatino py-1 text-lightText">
          CONTACT US
        </h2>

        <div>
          <span>Phone: </span>
          <Link className="py-1" href="tel:2142657272">
            (817)-925-2478
          </Link>
        </div>

        <div className="p-1">
          <span>Email: </span>
          <Link
            className="email-link footer-link-text"
            href="mailto:info@lauraleeclark.com"
          >
            info@deborah-diershaw.com
          </Link>
        </div>

        <div className="flex justify-center items-center gap-5 p-5">
          <Link
            className="icon-link"
            href="https://www.facebook.com/LauraLeeClarkID/"
          >
            <FaFacebookF className=" text-3xl" />
          </Link>
          <Link
            className="icon-link"
            href="https://www.pinterest.com/lauraleeclarkid/?eq=laura%20lee%20car&etslf=8558"
          >
            <FaPinterest className=" text-3xl" />
          </Link>
          <Link
            className="icon-link ms-1"
            href="https://www.instagram.com/lauraleeclarkinteriordesign/"
          >
            <ImInstagram className=" text-3xl" />
          </Link>
          <Link
            className="icon-link ms-1"
            href="https://www.instagram.com/lauraleeclarkinteriordesign/"
          >
            <FaXTwitter className=" text-3xl" />
          </Link>
          <Link
            className="icon-link ms-1"
            href="https://www.instagram.com/lauraleeclarkinteriordesign/"
          >
            <SiGooglemybusiness className=" text-3xl" />
          </Link>
        </div>
        <div className="flex  justify-center items-center p-2">
          <div className=" py-1 bg-gray-500 w-20"></div>
        </div>
        <div className="p-1 flex sm:flex-row flex-col justify-center items-center sm:gap-3">
          <div className="footer-description footer-link-text">
            © 2024 AMBIANCE DESIGN
          </div>
          <div className="footer-description footer-link-text px-1 "> . </div>
          <a
            className="footer-description footer-link-text"
            href="https://clickandco.co/"
          >
            A CLICK & CO. WEBSITE
          </a>
        </div>
        <div className="py-1">
          <Link
            className="footer-description footer-link-text"
            href="/privacy-policy"
          >
            PRIVACY POLICY
          </Link>
        </div>
        <div>
          <Link
            className="footer-description footer-link-text p-1"
            href="/protected"
          >
            PORTECTED
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
