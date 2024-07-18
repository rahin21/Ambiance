"use client";
import { settingType } from "@/types/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
function ContactInfo({ footer }: { footer?: boolean }) {
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
    <div className="flex flex-col items-center">
      {!footer && (
          <Image
            src={"/images/logo-sm.png"}
            width={70}
            height={100}
            alt="company logo"
            className="mx-4"
          />
        )}
          <h2 className="font-palatino py-1 text-lightText uppercase">
            CONTACT US
          </h2>

      <Link
        href="https://www.google.com/maps/place/1515+Slocum+St,+Dallas,+TX+75207,+USA/@32.7929559,-96.8188138,17z/data=!3m1!4b1!4m6!3m5!1s0x864e9948b25bbeed:0x2278cbcccb4f33ad!8m2!3d32.7929559!4d-96.8188138!16s%2Fg%2F11bw3zb07r?entry=ttu"
        className="footer-link-text footer-description py-1 "
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
    </div>
  );
}

export default ContactInfo;
