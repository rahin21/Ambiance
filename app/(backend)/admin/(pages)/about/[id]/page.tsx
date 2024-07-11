import AboutForm from '@/components/tailAdmin/about/aboutForm'
import axios from 'axios'
import React from 'react'

async function AboutId({ params }:{params:{id:string}}) {
    const res = await axios.get(`http://localhost:3000/api/about/${params.id}`)
    const about= res.data;
    console.log(about);
  return (
    <>
   
     <AboutForm about={about} isUpdate/>
    </>
  )
}

export default AboutId