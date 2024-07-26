"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PaginationControls from "../paginationControl";
import { motion } from "framer-motion";
import { postType } from "@/types/types";
import axios from "axios";

function Gallery({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const [news, setNews] = useState<postType[] | null >(null)
  
  useEffect(()=>{
    const getData = async () => {
      try {
        const res = await axios.get(`/api/post-key?key=news`);
        setNews(res.data);
        
      } catch (err) {
        console.log('Error fetching slider data');
      }
    }
    getData()
  },[])
  
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";
  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 7, 14 ...
  const end = start + Number(per_page); // 7, 14, 21 ...

  const entries = news?.slice(start, end);
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.5,delay:0.1}}>
      <div
        id="gallery"
        className=" grid md:grid-cols-2 gap-0 md:gap-4  grid-cols-1  lg:px-5"
      >
        {entries?.map((data:postType) => (
          <div
            key={data?.id}
            className="flex flex-col justify-center items-center lg:px-8 px-0"
          >
            <Link href={`/news/${data?.id}`} className="pb-5 pt-10 aspect-4/3 lg:w-[90%] w-full inline-block overflow-hidden">
              <Image src={data?.thumbnail} width="580" height="0" alt="award" className="w-full h-full object-cover"/>
            </Link>
            <Link
              href={`/news/${data?.id}`}
              className="font-palatino text-lg text-center tracking-[5px] opacity-70 hover:opacity-90 transition-all ease-in-out duration-200 uppercase"
            >
              {data.title}
            </Link>
          </div>
        ))}
      </div>
      {news && news?.length <= 6 ? (
        <></>
      ) : (
      <div className="flex justify-center pt-10">
        <PaginationControls
          hasNextPage={end < (news?.length || 0)}
          hasPrevPage={start > 0}
          totalData={news?.length || 0}
          route={"news"}
        />
      </div>
      )}
      <div />
    </motion.div>
  );
}

export default Gallery;
