import React from "react";
import type { Metadata } from "next";
import { portfolio } from "@/constants/portfolioData";
import LinkOverLogo from "@/components/linkOverLogo";
import PaginationControls from "@/components/paginationControl";
import PortfolioGallery from "@/components/portfolio/portfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
};

function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";
  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 6, 12 ...
  const end = start + Number(per_page); // 6, 12, 18 ...

  const entries = portfolio.slice(start, end);

  return (
    <div className="container pt-5 lg:px-0">
      <PortfolioGallery entries={entries} />
      {portfolio.length <= 6 ? (
        <></>
      ) : (
        <div className="flex justify-center pt-10">
          <PaginationControls
            hasNextPage={end < portfolio.length}
            hasPrevPage={start > 0}
            totalData={portfolio.length}
            route={"portfolio"}
          />
        </div>
      )}

      <div className="lg:my-28 my-10">
        <LinkOverLogo link="/contact" linkHeader="CONTACT US" />
      </div>
    </div>
  );
}

export default page;
