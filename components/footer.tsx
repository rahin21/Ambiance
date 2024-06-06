import Image from "next/image";
import Link from "next/link";
import React from "react";
import CopyRight from "./copyRight";
import { FaFacebookF } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";

function Footer() {
  return (
    <div className="text-center mt-10">
      <CopyRight />
      <div className="bg-primary font-openSans text-[13px] tracking-[2px] font-semibold text-[#a7a1a4] mt-16 py-4">
        <h2 className="footer-header font-palatino text-lightText py-1">SHOWROOM HOURS</h2>
        <p className="footer-link-text footer-description py-1">M-F 9am-5pm</p>
        <div className="flex justify-center items-center py-1">
          <Link
            className="icon-link"
            href="https://www.facebook.com/LauraLeeClarkID/"
          >
            <FaFacebookF className=""/>
          </Link>
          <Link
            className="icon-link opacity-30"
            href="https://www.pinterest.com/lauraleeclarkid/?eq=laura%20lee%20car&etslf=8558"
          >
            <Image
              className="mx-1"
              width="16"
              height="10"
              src="/icons/footer/pinterest.svg"
              alt=""
            />
          </Link>
          <Link
            className="icon-link ms-1"
            href="https://www.instagram.com/lauraleeclarkinteriordesign/"
          >
            <ImInstagram className=""/>
          </Link>
        </div>

        <h2 className="footer-header contact-heading font-palatino py-1 text-lightText">CONTACT US</h2>
        <Link
          href="https://www.google.com/maps/place/1515+Slocum+St,+Dallas,+TX+75207,+USA/@32.7929559,-96.8188138,17z/data=!3m1!4b1!4m6!3m5!1s0x864e9948b25bbeed:0x2278cbcccb4f33ad!8m2!3d32.7929559!4d-96.8188138!16s%2Fg%2F11bw3zb07r?entry=ttu"
          className="footer-link-text footer-description py-1"
        >
          1515 Slocum St Dallas, TX 75207
        </Link>
        <div>
          <Link
            className="footer-link-text footer-description py-1"
            href="tel:2142657272"
          >
            214-265-7272
          </Link>
        </div>
        <div className="footer-description footer-link-text p-1">
          <span>Email: </span>
          <a
            className="email-link footer-link-text"
            href="mailto:info@lauraleeclark.com"
          >
            info@lauraleeclark.com
          </a>
        </div>
        <div className="flex justify-center items-center p-2">
          <div className=" py-1 bg-gray-500 w-20"></div>
        </div>
        <div className="p-1">
          <span className="footer-description footer-link-text">
            © 2024 LAURA LEE CLARK
          </span>
          <span className="footer-description footer-link-text px-1 "> . </span>
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
            href="/privacy-policy.html"
          >
            PRIVACY POLICY
          </Link>
        </div>
        <div>
          <Link className="footer-description footer-link-text p-1" href="/">
            PORTECTED
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
