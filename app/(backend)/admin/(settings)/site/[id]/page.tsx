import SiteForm from "@/components/tailAdmin/Setting/siteForm";
import { ParamsType } from "@/types/types";
import axios from "axios";
import React from "react";

async function SiteKey({ params }: { params: ParamsType }) {
  const id = params.id;
  let data;

  try {
    const res = await axios.get(`http://localhost:3000/api/setting/${id}`);
    data = res.data;
  } catch (error) {
    console.log(error);
  }

  return <div>
    <SiteForm site={data} isUpdate/>
  </div>;
}

export default SiteKey;
