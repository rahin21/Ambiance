import SliderInfo from '@/components/tailAdmin/Sliders/sliderInfo';
import axios from 'axios';
import React from 'react'

async function Contact() {
  let slider;
  let services;
  try {
    const res = await axios.get(`http://localhost:3000/api/slider/contact`);
    slider = res.data;
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      <SliderInfo slider={slider}/>
    </div>
  )
}

export default Contact