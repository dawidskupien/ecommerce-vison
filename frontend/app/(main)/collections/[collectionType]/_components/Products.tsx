"use client";
import {
  Product,
  ProductImage,
  ProductVendor,
  ProductName,
  ProductPrice,
} from "@/components/ui/product";
import  getProducts from "../../_fetchers/getProducts";
import Pagination from "./Pagination";
import Link from "next/link";
import { productMapper } from "@/mappers/productMapper";
import { Product as ProductType } from "@/graphql/_generated";
import Sort from "./Sort";
import ProductsQuantity from "./ProductsQuantity";
import ActiveFilters from "./ActiveFilters";
import { useState } from "react";
import MobileFilters from "./Filters/mobile/MobileFilters";
import { Button } from "@/components/ui/button";
import { VscSettings } from "react-icons/vsc";


export default function Products() {
  const { data } = getProducts();
  const products = data?.productsByCategory?.data;
  const productsMeta = data?.productsByCategory?.meta;

  if (products?.length === 0) {
    return <h1>No products find</h1>;
  }

  return (
    <div>
        <div className="grid grid-cols-2 grid-rows-2">
          <MobileButton  className="block lg:hidden" />
          <Sort className="hidden lg:block" />
          <ProductsQuantity quantity={productsMeta?.total || 0}/>
          <ActiveFilters />
        </div>
      <div className="flex flex-wrap   -mx-[10px]">
        {products?.map((product) => (
          <div className=" max-w-[50%] md:max-w-[25%] break-words px-[10px]  basis-1/2  md:basis-1/4  mb-[1.25rem]">
          <Product
            product={productMapper({ product: product as ProductType })}
            key={product?.title}
          >
            <Link href={`/collections/${product?.category?.data?.attributes?.slug}/${product?.slug}`}>
              <ProductImage className="mb-5 " />
            </Link>
            <div className="flex flex-col">
              <ProductVendor  />
              <ProductName />
              <ProductPrice />
            </div>
          </Product>
          </div>
        ))}
      </div>
      {products && products?.length > 12 && <Pagination paginationMeta={productsMeta} />}
    </div>
  );
}



interface MobileButtonProps extends React.ComponentProps<"button"> {}

function MobileButton ({className}: MobileButtonProps ) {
  const [isOpen, setIsOpen] = useState(false);
const toggleOpen = () => setIsOpen((prev) => !prev);
    return (
      <>
        {isOpen && <MobileFilters toggleOpen={toggleOpen} />}
        <Button
        onClick={toggleOpen}
        className="lg:hidden flex items-center text-xs leading-[19.2px] mr-[30px]"
        variant="unstyled"
      >
      <VscSettings className="mr-[10px]" />
      Filter and sort
      </Button>
    </>
)}