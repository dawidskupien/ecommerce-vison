"use client";
import { useGetProductsByCategoryQuery } from "@/graphql/_generated";
import HeroSlider from "./_components/HeroSlider";
import PromotionsBlocks from "./_components/PromotionsBlocks";
import { client } from "@/graphql/client";
import ProductsSlider from "@/components/ProductsSlider";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import MediaSection from "./_components/MediaSection";
import FloatingText from "./_components/FloatingText";
import CategoryList from "./_components/CategoryList";


export default function Home() {
  const { data: products } = useSuspenseQuery({
    queryKey: useGetProductsByCategoryQuery.getKey({
        slug: "all",
    }),
    queryFn: useGetProductsByCategoryQuery.fetcher(client, {
        slug: "all",
    })
  });

  return (
    <main className=" lg:max-w-[min(80rem,100%-100px)] mx-auto pt-[15px]">
      <HeroSlider />
      <PromotionsBlocks />
      <ProductsSlider
        quantity={6}
        title="Bestsellers"
        className="px-[15px] md:px-[50px] lg:px-0 mt-[20px] mb-[50px] border-b pb-[50px]"
        desc="Browse the best of our favorite sale styles and brands."
        products={products}
      />
      <MediaSection />
      <FloatingText />
      {/* <CategoryList /> */}
      <ProductsSlider
        quantity={4}
        className="px-[15px] md:px-[50px] lg:px-0 mb-[100px]"
        title="New Arrivals"
        desc="Shop for the best selection of smart home products."
        products={products}
      />

    </main>
  );
}

















