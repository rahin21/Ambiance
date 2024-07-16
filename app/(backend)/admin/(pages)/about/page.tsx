import AboutForm from '@/components/tailAdmin/about/aboutForm'
import AboutInfo from '@/components/tailAdmin/about/aboutInfo'
import React from 'react'

async function getData() {
  const res = await fetch("http://localhost:3000/api/about", 
    {
    next: { tags: ["about"] },
  }
);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function About() {
  let data = await getData();
  
  return (
    <div>
      <AboutForm />
      {data.length>0 &&
       <AboutInfo about={data}/>
      }
    </div>
  )
}

export default About