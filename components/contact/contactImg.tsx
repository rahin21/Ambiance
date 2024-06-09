"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function ContactImg() {
  return (
    <div>
      <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
        <Image
          src={"/images/contact/contact.webp"}
          width="1130"
          height={100}
          alt="contact"
        />
      </motion.div>
    </div>
  );
}

export default ContactImg;
