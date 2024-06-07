"use client"


import Image from 'next/image';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


function ImagePreviewer({images}: {images:string[]}) {
  return (
    <PhotoProvider maskClassName='white'>
    <div className="foo grid grid-cols-3 sm:gap-10 gap-1 xl:mx-[12.5rem] lg:mx-[6rem] mx-5">
      {images.map((item, index) => (
        <PhotoView key={index} src={item}>
          <Image src={item} width='380' height="100" alt="" className='xl:h-[350px] lg:h-[250px] sm:h-[200px] h-[115px]' />
        </PhotoView>
      ))}
    </div>
  </PhotoProvider>
  )
}

export default ImagePreviewer