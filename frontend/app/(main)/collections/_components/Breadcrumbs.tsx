"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { useGetProductNameQuery } from '@/graphql/_generated';
import { client } from '@/graphql/client';
import React from 'react'

export default function BreadCrumbs({
    pageType,
    collectionType,
    productSlug
  }: {
    pageType: string;
    collectionType?: string;
    productSlug?: string;
  }) {
    const label = pageType === "allPage" ? "All Products" : collectionType;
    const productsPage = pageType === "categoryPage" || pageType === "allPage";

    const { data: productData } = useGetProductNameQuery(client, { slug: productSlug as string }, { enabled: pageType === "productPage" });
    const productName = productData?.products?.data[0]?.attributes?.title;

  
    return (
      <Breadcrumb >
      <BreadcrumbList className="text-typographyDark text-[12px] py-[15px]  flex-nowrap  [scrollbar-width:none] overflow-auto  ">
        <BreadcrumbItem>
          <BreadcrumbLink className="" href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="opacity-50" />
        <BreadcrumbItem>
          <BreadcrumbLink href="/collections">Collections</BreadcrumbLink>
        </BreadcrumbItem>
            {productsPage && (
                <>
                    <BreadcrumbSeparator className="opacity-50" />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="capitalize">{label}</BreadcrumbPage>
                    </BreadcrumbItem>
                </>
            )}
            {pageType === "productPage" && (
                <>
                    <BreadcrumbSeparator className="opacity-50" />
                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/collections/${collectionType}`} className="capitalize ">
                        {collectionType}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator  className="opacity-50" />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="capitalize text-nowrap">{productName}</BreadcrumbPage>
                    </BreadcrumbItem>
                </>
            )}
      </BreadcrumbList>
    </Breadcrumb>
    );
  }
  