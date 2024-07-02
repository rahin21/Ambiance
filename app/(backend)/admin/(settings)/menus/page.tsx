// import MenuForm from "../components/menuForm";
import { menuType } from "@/types/paramTypes";
import axios from "axios";
import Link from "next/link";

async function Menus() {
  let data = [];
  try {
    const res = await axios.get("http://localhost:3000/api/menu");
    data=res.data;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="rounded-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-stroke darkbg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      {data.map((menu:menuType)=>(

      <div key={menu.id} className="p-3 border border-stroke">
        <div className="flex justify-between gap-x-4">
          <h4 className="text-2xl font-semibold text-black dark:text-white capitalize">
            {menu.key}
          </h4>
        
          <Link
            href={`/admin/menus/${menu.key}`}
            className="inline-flex items-center justify-center bg-primary px-6 py-2 text-center font-medium text-white dark:text-black hover:bg-opacity-90 "
          >
            Edit
          </Link>
        </div>
        <ul>
          {menu.items.map((item)=>(
          <li key={`${menu.key}-${item.name}`}>{item.name}</li>
          ))}
        </ul>
      </div>
      ))}
    </div>
  );
}

export default Menus;
