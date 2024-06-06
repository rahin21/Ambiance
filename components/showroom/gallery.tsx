import { showroom } from '@/constants/showroomData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Gallery() {
  return (
    <div className=" grid md:grid-cols-2 gap-0 md:gap-4  grid-cols-1  px-5">
        {showroom.map((data,i)=>(
            <div key={i} className="flex flex-col justify-center items-center lg:px-16 px-0">
            <Link href={data.link} className="pb-5 pt-10">
              <Image src={data.img} width="480" height="0" alt="award" />
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
  )
}

export default Gallery