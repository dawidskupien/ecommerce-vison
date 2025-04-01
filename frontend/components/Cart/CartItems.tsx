import React from "react";
import { Product, ProductImage, ProductName, ProductPrice, ProductVariants, ProductQuantity } from "../ui/product";
import { IProduct } from "@/types/Product";

interface CartItemsProps {
  items: IProduct[];
}

export default function CartItems ({ items }: CartItemsProps) {
    return (
    <div className="py-[1.563rem] px-[1.875rem] overflow-y-auto">
        {items.map((item) => (
          <Product
          product={item}
          key={`${item?.id}-${item?.variant?.color}-${item?.variant?.material}`}
        >
          <div className="flex mb-[1.25rem]">
            <div className="max-w-[75px] mr-[15px]">
              <ProductImage className="aspect-[1200/1500] rounded-[8px]" />
            </div>
            <div className="w-full">
              <div className="lg:flex justify-between">
                <ProductName className="text-base" />
                <ProductPrice className="font-normal text-base" />
              </div>
              <ProductVariants className="mt-[5px]" />
              <ProductQuantity className="mt-[8px]" />
            </div>
          </div>
        </Product>
        ))}
    </div>
    );
}



