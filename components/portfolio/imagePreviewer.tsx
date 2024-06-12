"use client"


import Image from 'next/image';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


function ImagePreviewer({images}: {images:string[]}) {
  return (
    <PhotoProvider maskClassName='white' maskOpacity={0.9}>
    <div className="foo grid grid-cols-2 md:grid-cols-3 sm:gap-10 gap-3">
      {images.map((item, index) => (
        <PhotoView key={index} src={item}>
          <Image src={item} width='480' height="100" alt="" className='xl:h-[450px] lg:h-[250px] sm:h-[200px] h-[180px]' />
        </PhotoView>
      ))}
    </div>
  </PhotoProvider>
  )
}

export default ImagePreviewer