import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image';
import ContactBox from '@/components/contact/contactBox';
import Form from '@/components/contact/form';
export const metadata: Metadata = {
  title: "Contact"
}
function page() {
  return (
    <div className='flex flex-col items-center justify-center lg:px-0 px-4'>
      <Image src={'/images/contact/contact.webp'} width='1140' height={100} alt='contact'/>
      <div className='lg:flex justify-between items-start min-w-[60%] gap-5 pt-3'>
      <ContactBox/>
      <Form/>
      </div>
    </div>
  )
}

export default page