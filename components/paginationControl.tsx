"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalData:number;
  route: string;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalData,
  route
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "6";

  return (
    <div className="flex items-center gap-4 text-lightText">
      <button
        className={`${!hasPrevPage?`opacity-50`: `opacity-100`} p-1 rounded-full bg-primary text-3xl`}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/${route}?page=${Number(page) - 1}&per_page=${per_page}#gallery`, );
        }}
      >
        <MdKeyboardArrowLeft/>
      </button>

      <h1 className="text-xl font-semibold">
        {page} of {Math.ceil(totalData / Number(per_page))}
      </h1>

      <button
        className={`${!hasNextPage?`opacity-50`: `opacity-100`} p-1 rounded-full bg-primary text-3xl`}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/${route}?page=${Number(page) + 1}&per_page=${per_page}#gallery`, );
        }}
      >
        <MdKeyboardArrowRight/>
      </button>
    </div>
  );
};

export default PaginationControls;
