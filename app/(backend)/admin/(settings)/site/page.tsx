import SiteForm from "@/components/tailAdmin/Setting/siteForm";
import { settingType } from "@/types/types";
import axios from "axios";
import Link from "next/link";
import React from "react";
async function getData() {
  const res = await fetch("http://localhost:3000/api/setting", 
    {
    next: { tags: ["setting"] },
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
async function Site() {
  let data = await getData();
  // console.log(data);
  return (
    <div>
      <h4 className="text-2xl font-semibold text-black mb-4">
        Add a new setting
      </h4>
      <SiteForm  params={{key:""}} name={""} description={""} />

      
  <div className="relative overflow-x-auto mt-5">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-black/20">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Key
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((setting: settingType) => (
            <tr key={setting.id} className="bg-white border-b border-black/20">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {setting.key}
                </th>
                <td className="px-6 py-4">
                    {setting.name}
                </td>
                <td className="px-6 py-4">
                    {setting.description}
                </td>
                <td className="px-6 py-4">
                    <Link href={`/admin/site/${setting.key}`} className="inline-flex items-center justify-center bg-black px-4 py-1 text-center font-medium text-white hover:bg-opacity-90 ">
                      Edit
                    </Link>
                </td>
            </tr>
          ))}
        </tbody>
    </table>
</div>
    </div>
  );
}

export default Site;
