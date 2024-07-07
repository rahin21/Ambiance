import MenuForm from '@/components/tailAdmin/Menus/menuForm';
import { ParamsType } from '@/types/paramTypes';
import axios from 'axios';
import React from 'react'


async function Key({params}:{params:ParamsType}) {

  const key = params.key
  let data = [];
  let items = [];
  try {
    const res = await axios.get(`http://localhost:3000/api/menu/${key}`);
    data=res.data;
    items=res.data.items;
  } catch (error) {
    console.log(error);
  }
 
  
  return (
    <div>
      {items&&
      <MenuForm params={params} items={items} isUpdate/>
      }
    </div>
  )
}

export default Key