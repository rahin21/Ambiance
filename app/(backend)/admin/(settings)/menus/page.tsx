// import MenuForm from "../components/menuForm";
import MenuForm from "@/components/tailAdmin/Menus/menuForm";
import { menuType } from "@/types/paramTypes";
import axios from "axios";
import Link from "next/link";

async function Menus() {
  let data = [];
  try {
    const res = await axios.get("http://localhost:3000/api/menu");
    data = res.data;
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <div className="">
        <h4 className="text-2xl font-semibold text-black mb-4">
          Add a new menu
        </h4>
        <MenuForm params={{ key: "" }} items={[{ name: "", link: "" }]} />
      </div>
      <div className="border border-stroke bg-black/20 px-7.5 py-6 shadow-default mt-8">
        <div className="rounded-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((menu: menuType) => (
            <div key={menu.id} className="p-3 border border-black">
              <div className="flex justify-between gap-x-4 border-b-[1px] pb-1">
                <h4 className="text-2xl font-semibold text-black capitalize">
                  {menu.key}
                </h4>

                <Link
                  href={`/admin/menus/${menu.key}`}
                  className="inline-flex items-center justify-center bg-black px-4 py-1 text-center font-medium text-white hover:bg-opacity-90 "
                >
                  Edit
                </Link>
              </div>
              <ul>
                {menu.items.map((item) => (
                  <li key={`${menu.key}-${item.name}`}>{item.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menus;
