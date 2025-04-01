"use client";
import React, { Suspense } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ProductsSlider from "@/components/ProductsSlider";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/providers/cart-store-provider";
import CartBredcrums from "./_components/CartBreadcrumbs";
import { Product,  ProductImage,  ProductName, ProductPrice, ProductQuantity, ProductVariants } from "@/components/ui/product";
import { IProduct } from "@/types/Product";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useGetProductsByCategoryQuery } from "@/graphql/_generated";
import { useSuspenseQuery } from "@tanstack/react-query";
import { client } from "@/graphql/client";




export default function page() {
  const {items, total} = useCartStore((state) => state);
  const { data: products } = useSuspenseQuery({
    queryKey: useGetProductsByCategoryQuery.getKey({
        slug: "all",
    }),
    queryFn: useGetProductsByCategoryQuery.fetcher(client, {
        slug: "all",
    })
  });
  const isItems = !!items?.length;

  return (
    <div className="px-[15px] md:px-[50px] lg:px-0 max-w-[1280px] mx-auto ">
      <CartBredcrums />
      <h1 className="text-2xl font-semibold  pt-[15px] -tracking-[0.56px] lg:-tracking-[0.84px] pb-[30px] lg:text-4xl" >
        Your cart
      </h1>
      {isItems ? 
      <>
          <div className="lg:grid lg:grid-cols-[1fr,380px] gap-x-[50px]">
            <CartTable  cartItems={items} />
            <EstimateShipping />
            <CartCollaterals total={total} />
            <Link className="hidden lg:block mt-[20px] text-primary-blue text-medium" href="/collections/all">Continue Shopping</Link>

          </div>
            <ProductsSlider 
              className="mb-[50px] lg:mt-[80px]"
              title="You may also like"
              desc="Browse the best of our favorite sale styles and brands."
              quantity={4}
              products={products}
            />
          </>
      : <CartIsEmpty />}
    </div>
  );
}


function CartTable({ cartItems }: { cartItems: IProduct[] }) {
  return (
    <table className="h-fit [grid-area:1/1/2/2]">
      <thead >
        <th className="w-[480px] text-start font-medium ">Product</th>
        <th className="hidden md:block min-w-[150px] text-start font-medium">Quantity</th>
        <th className="text-end font-medium">Total</th>
      </thead>
      <tbody className="border-t border-gray-300   ">
        {cartItems.map((item) => (
          <Product key={item.id} product={{...item}}>
            <tr key={item.id}>
              <td className="py-[20px] pr-[15px]">
                <div className="flex">
                  <ProductImage className="w-[75px] md:w-[96px] mr-[15px]" />
                  <div>
                    <ProductName className="text-base" />
                      <ProductVariants />
                      <div className="flex lg:hidden">
                        <ProductQuantity />
                      </div>
                  </div>
                </div>
              </td>
              <td className="hidden lg:flex items-center h-full">
                <ProductQuantity />
              </td>
              <td className="text-end ">
                <ProductPrice />
              </td>
            </tr>
          </Product>
        ))}
      </tbody>
    </table>
  );
}


function EstimateShipping() {
  return (
    <Accordion className="[grid-area:2/1/3/2]" defaultValue={["2"]} type="multiple">
      <AccordionItem value="2">
      <AccordionTrigger>Estimate Shipping</AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-2 gap-2">
          <Input className="bg-transparent col-span-2" placeholder="Country" />
          <Input className="bg-transparent" placeholder="Province" />
          <Input className="bg-transparent" placeholder="Zip code" />
          <Button className="bg-typographyDark text-white rounded-[25px] w-3/4">Estimate</Button>
        </div>
      </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function CartCollaterals({ total }: { total: number }) {
  const percent = total < 200 ? (total / 200) * 100 : 100;

  return (
    <div className="w-full border h-fit border-gray-300 rounded-xl p-[30px] flex flex-col [grid-area:1/2/3/3]">
      <div className="mb-[25px] text-center">
        <p className="text-sm font-roboto font-medium mb-[10px]">{(200 - total) > 0 ? `Spend ${(200-total).toFixed(2)} more for free ship`: "Free shipping will be applied at checkout"}</p>
        <div className="h-1.5 border rounded-[3px] ">
          <div style={{width: `${percent}%` }} className="bg-primary-blue rounded-[3px] h-full"></div>
        </div>
      </div>
      <textarea placeholder="Order special instructions" className="min-h-[6rem] bg-transparent text-sm border-2 p-2 mb-[20px]"></textarea>

      <div className="flex justify-between  mb-[10px]">
        <p className="text-base font-roboto font-medium">Total:</p>
        <p className="text-xl font-roboto font-medium">${total.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2 mt-[10px] mb-[15px]">
        <Checkbox /> 
        <label className="text-sm">I agree to the terms and conditions</label>
      </div>
      <Link href="/checkout" >
        <Button className="bg-primary-blue text-white rounded-[25px] w-full hover:bg-blue-800">Checkout</Button>
      </Link>
      <p className="text-xs text-center mt-[20px]">Tax included. Shipping calculated at checkout.</p>
    </div>
  );
}

function CartIsEmpty() {
  return <div className="text-center">Your cart is empty</div>;
}
