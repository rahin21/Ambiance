import SiteForm from "@/components/tailAdmin/Setting/siteForm";
import { ParamsType } from "@/types/types";
import axios from "axios";
import React from "react";

async function SiteKey({ params }: { params: ParamsType }) {
  const key = params.key;
  let data = [];

  try {
    const res = await axios.get(`http://localhost:3000/api/setting/${key}`);
    data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return <div>
    <SiteForm params={params} name={data.name} description={data.description} isUpdate/>
  </div>;
}

export default SiteKey;
