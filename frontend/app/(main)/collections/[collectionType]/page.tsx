"use client"
import { Suspense, useState } from "react";
import Products from "./_components/Products";
import ActiveFilters from "./_components/ActiveFilters";
import Sort from "./_components/Sort";
import Filters from "./_components/Filters";
import ProductsQuantity from "./_components/ProductsQuantity";
import { Button } from "@/components/ui/button";
import { VscSettings } from "react-icons/vsc";
import MobileFilters from "./_components/Filters/mobile/MobileFilters";
import BottomSection from "./_components/BottomSection";



export default function CollectionProductPage() {


  return (
    <>
      <div className="lg:grid min-h-screen lg:[grid-template-columns:clamp(200px,22%,240px)1fr] lg:gap-[clamp(20px,4%,40px)] mb-[50px]">
        <Filters />
        <div className="w-full">

          <Suspense fallback="Loading products...">
            <Products />
          </Suspense>
        </div>
      </div>
      <BottomSection />
    </>
  );
}



