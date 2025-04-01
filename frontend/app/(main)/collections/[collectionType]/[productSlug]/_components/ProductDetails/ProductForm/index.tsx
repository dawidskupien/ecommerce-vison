"use client";
import { Button } from "@/components/ui/button";
import { GetProductQuery } from "@/graphql/_generated";
// import { addToCart } from "../../../actions";
import ProductQuantity from "./ProductQuantity";
import VariantSelect from "./VariantSelect";
import { useProductParams } from "../../../_hooks/useProductParams";
import { useEffect, useState } from "react";
import { useVariantSelect } from "./_hooks/useVariantSelect";
import { useCartStore } from "@/providers/cart-store-provider";

interface ProductFormProps {
  data: GetProductQuery | undefined;
}

export default function ProductForm({data}: ProductFormProps) {
  const product = data?.products?.data[0];
  const [colors, materials, selectedVariant, handleClick, variantId] = useVariantSelect(product?.attributes?.variants as any);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleCart } = useCartStore((state) => state);

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const image = product?.attributes?.variants?.find((variant) => variant?.variantId === variantId)?.image?.data?.attributes;
    addToCart({
      id: product?.id + variantId as string,
      title: {
       name:  product?.attributes?.title as string,
       link: product?.attributes?.slug as string,
      },
      price: product?.attributes?.price?.value as number,
      currency: product?.attributes?.price?.currency as string,
      image: {
        url: image?.url as string,
        alt: image?.alternativeText || "product image" as string,
      },
      variant: {
        color: selectedVariant.color as string,
        material: selectedVariant.material as string,
      },
      quantity: quantity,
    });
    toggleCart();
  }

  
  return (
    <form onSubmit={handleSubmit} >
      <input type="hidden" name="id" value={data?.products?.data[0]?.id} />
      <input type="hidden" name="title" value={product?.attributes?.title} />
      <input type="hidden" name="price" value={product?.attributes?.price?.value} />
      <input type="hidden" name="currency" value={product?.attributes?.price?.currency} />
      <input type="hidden" name="variantId" value={variantId} />
      <input
        type="hidden"
        name="imageUrl"
        value={product?.attributes?.images?.data[0]?.attributes?.url}
      />
      <input
        type="hidden"
        name="imageAlt"
        value={product?.attributes?.images?.data[0]?.attributes?.alternativeText}
      />
      <VariantSelect
        label="Color"
        selectedValue={selectedVariant.color}
        handleClick={handleClick}
        items={colors as any}
      />
      <VariantSelect
        label="Material"
        selectedValue={selectedVariant.material}
        handleClick={handleClick}
        items={materials as any}
      />
      <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
      <div className="flex flex-col md:flex-row gap-[12px] mb-[25px]">
        <Button
          variant="unstyled"
          className="flex-1 bg-[#3F72E5] text-white rounded-[25px] min-h-[50px] text-base"
          type="submit"
        >
          Add to cart
        </Button>
        <Button
          variant="unstyled"
          className="flex-1 bg-[#222B30] min-h-[50px] py-[7px] text-white rounded-[25px] text-base"
        >
          Buy it now
        </Button>
      </div>
    </form>
  );
}
