import ServiceForm from '@/components/tailAdmin/Services/serviceForm'
import ServiceTable from '@/components/tailAdmin/Services/serviceTable'
import { getServiceData } from '@/constants/admin/serviceData';

import React from 'react'


async function Services() {
  const services = await getServiceData();
  
  return (
    <div>
      <ServiceForm/>
      <ServiceTable service={services}/>
    </div>
  )
}

export default Services