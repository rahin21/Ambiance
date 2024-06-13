"use client";
import { news } from "@/constants/newsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PaginationControls from "../paginationControl";
import { motion } from "framer-motion";

function Gallery({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";
  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 7, 14 ...
  const end = start + Number(per_page); // 7, 14, 21 ...

  const entries = news.slice(start, end);
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.5,delay:0.1}}>
      <div
        id="gallery"
        className=" grid md:grid-cols-2 gap-0 md:gap-4  grid-cols-1  px-5"
      >
        {entries.map((data, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center lg:px-8 px-0"
          >
            <Link href={data.link} className="pb-5 pt-10">
              <Image src={data.img} width="580" height="0" alt="award" />
            </Link>
            <Link
              href={data.link}
              className="font-palatino text-lg tracking-[5px] opacity-70 hover:opacity-90 transition-all ease-in-out duration-200"
            >
              {data.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-10">
        <PaginationControls
          hasNextPage={end < news.length}
          hasPrevPage={start > 0}
          totalData={news.length}
          route={"news"}
        />
      </div>
      <div />
    </motion.div>
  );
}

export default Gallery;
