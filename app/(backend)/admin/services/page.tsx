import ServiceForm from '@/components/tailAdmin/Services/serviceForm'
import ServiceTable from '@/components/tailAdmin/Services/serviceTable'
import React from 'react'

async function getData() {
  const res = await fetch('http://localhost:3000/api/service', 
    { next:{tags:["service"]}}
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

async function Services() {
  const services = await getData();
  console.log(services); 
  return (
    <div>
      <ServiceForm/>
      <ServiceTable service={services}/>
    </div>
  )
}

export default Services