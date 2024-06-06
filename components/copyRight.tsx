import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CopyRight = () => {
  return (
    <div className='container mx-auto'>
        <div className="flex justify-center items-center">
        <div className="h-[1px] w-full bg-gray-300"></div>
        <Image
          src={"/icons/main-logo2.png"}
          width={70}
          height={100}
          alt="company logo"
          className="mx-4"
        />
        <div className="h-[1px] w-full bg-gray-300"></div>
      </div>
      <div className="mt-4 mb-8 text-[#a7a1a4]">
        <Link
          className=" font-sans tracking-[2px] text-[11px] font-bold pt-5"
          href={"https://www.instagram.com/lauraleeclarkinteriordesign/"}
        >
          {" "}
          JOIN THE CONVERSATION @LAURALEECLARKINTERIORDESIGN
        </Link>
      </div>
      <div className="h-[1px] w-full bg-gray-300"></div>
    </div>
  )
}

export default CopyRight