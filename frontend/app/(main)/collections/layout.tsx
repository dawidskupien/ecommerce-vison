"use client"
import React, { useEffect } from "react";
import BreadCrumbs from "./_components/Breadcrumbs";
import Header from "./_components/Header";
import { useParams } from "next/navigation";


export default function layout({ children }: { children: React.ReactNode}) {
  const { collectionType, productSlug } = useParams();

  const pageType = productSlug
    ? "productPage"
    : collectionType === "all"
      ? "allPage"
      : collectionType
        ? "categoryPage"
        : "collectionsPage";

  return (
    <div className="flex flex-col px-[15px] md:px-[50px] overflow-auto">
      <div className="max-w-[80rem] mx-auto w-full">
        <BreadCrumbs
          pageType={pageType}
          productSlug={productSlug as string}
          collectionType={collectionType as string}
        />
        {pageType !== "productPage" && <Header pageType={pageType} collectionType={collectionType}  />}
      {children}
      </div>
    </div>
  );
}






