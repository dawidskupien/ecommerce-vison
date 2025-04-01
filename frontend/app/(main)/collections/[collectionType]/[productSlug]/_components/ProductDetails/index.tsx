"use client";
import {
  GetProductQuery,
} from "@/graphql/_generated";

import ProductHeading from "./ProductHeading";
import ProductBenefits from "./ProductBenefits";
import ProductAccordion from "./ProductAccordion";
import ProductForm from "./ProductForm";
import ProductShare from "./ProductShare";

const accordion = [
  {
      title: "Shipping & Returns",
      content: "Make sure to read and understand the return policy before making a purchase. Some stores offer free returns, while others may charge a restocking fee or only accept returns for certain items.",
  },
  {
      title: "Compatibility",
      content: "The connectivity options of your device are also essential to consider. For example, if you're purchasing a printer, you need to ensure that it is compatible with your computer's connectivity options, such as USB, Bluetooth, or Wi-Fi.",
  },
]


export default function ProductDetails({
  data,
}: {
  data: GetProductQuery | undefined;
}) {
  const product = data?.products?.data[0].attributes;

  if (!product) return null;

  return (
    <div className="product-details text-typographyDark">
        <ProductHeading
            tags={product.labels}
            title={product.title}
            price={product.price}
        />
        <div className="product-details--separator border-b my-[20px]" />
        <ProductForm data={data} />
        <ProductBenefits />
        <p className="product-description text-base text-typographyDark mb-[10px]">{product.description}</p>
        <ProductAccordion accordion={accordion}/>
        <ProductShare />
    </div>
  );
}


