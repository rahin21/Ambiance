"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaPinterest } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { menuType, settingType } from "@/types/types";
import { BsTwitterX } from "react-icons/bs";
import { SiGooglemybusiness } from "react-icons/si";
import Social from "../footer/social";

export const socialIcons = {
  facebook: <FaFacebookF className=" text-2xl"/>,
  instagram: <ImInstagram className=" text-2xl"/>,
  pinterest: <FaPinterest className=" text-2xl"/>,
  twitter: <BsTwitterX className=" text-2xl"/>,
  googleBusiness: <SiGooglemybusiness className=" text-2xl"/>,
};

function ContactBox() {
  const [settings, setSetting] = useState<settingType[] | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/setting-key?key=contact`);
        setSetting(res.data);
      } catch (err) {
        console.log("Error fetching slider data");
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (settings) {
      settings.find((setting) => {
        if (setting.name === "address") {
          setAddress(setting.description);
        }
        if (setting.name === "phone") {
          setPhone(setting.description);
        }
        if (setting.name === "email") {
          setEmail(setting.description);
        }
      });
    }
  }, [settings]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      viewport={{ once: true, amount: 0.01 }}
      className="flex flex-col items-center bg-primary font-openSans text-[16px] tracking-[2px] font-semibold text-[#a7a1a4] p-4 min-w-[50%]"
    >
      <Image
        src={"/images/logo-sm.png"}
        width={70}
        height={100}
        alt="company logo"
        className="mx-4"
      />
      <h2 className="font-palatino py-1 text-lightText uppercase">
        CONTACT US
      </h2>
      <Link
        href="https://www.google.com/maps/place/1515+Slocum+St,+Dallas,+TX+75207,+USA/@32.7929559,-96.8188138,17z/data=!3m1!4b1!4m6!3m5!1s0x864e9948b25bbeed:0x2278cbcccb4f33ad!8m2!3d32.7929559!4d-96.8188138!16s%2Fg%2F11bw3zb07r?entry=ttu"
        className="footer-link-text footer-description py-1 uppercase"
      >
        {address || "address"}
      </Link>
      <div className="pb-5">
        <Link
          className="footer-link-text footer-description py-1"
          href={`tel:${phone}`}
        >
          {phone || "phone"}
        </Link>
        <span>.</span>
        <Link className="email-link footer-link-text" href={`mailto:${email}`}>
          {email || "email"}
        </Link>
      </div>
      <h2 className="footer-header font-palatino text-lightText py-1 uppercase">
        Social
      </h2>
      <p className="footer-link-text footer-description pb-3">M-F 9am-5pm</p>
      <div className="flex justify-center items-center gap-2 py-1">
        <Social/>
      </div>
    </motion.div>
  );
}

export default ContactBox;
