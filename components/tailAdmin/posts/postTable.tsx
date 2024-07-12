import Image from "next/image";
import React from "react";
import Link from "next/link";
import { postType } from "@/types/types";

function PostTable({ post }: { post: postType[] }) {
  return (
    <div className="rounded-sm border border-stroke shadow-default bg-black/20 p-5 mt-5">
      <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-base text-gray-700 uppercase bg-black/20">
          <tr>
            <th scope="col" className="px-6 py-3">
              Key
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Thumbnail
            </th>
            <th scope="col" className="px-6 py-3">
              Gallery
            </th>
            <th scope="col" className="px-6 py-3">
              Update
            </th>
          </tr>
        </thead>
        <tbody>
          {post.map((item) => (
            <tr key={item.id} className="bg-white border-b border-black/20">
              <td className="px-6 py-4">{item.key}</td>
              <td className="px-6 py-4">{item.title}</td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 w-[15rem]"
              >
                <Image
                  src={item.thumbnail}
                  width={200}
                  height={200}
                  alt={`post image`}
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 w-[18rem]"
              >
                <div className="flex flex-wrap justify-center gap-1">
                
                  {item.gallery.map((img,index) => (
                    index<4?
                    <Image
                    key={img}
                      src={img}
                      width={100}
                      height={200}
                      alt={`post image`}
                    />
                    :
                    <span key={img}></span>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4">
                <Link
                  href={`/admin/posts/${item.id}`}
                  className="inline-flex items-center justify-center bg-black px-4 py-1 text-center font-medium text-white hover:bg-opacity-90 "
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostTable;
