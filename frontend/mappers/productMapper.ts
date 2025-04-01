import { Product } from "@/graphql/_generated";


interface ProductMapperProps{
    product: Product;

}

export function productMapper({ product } : ProductMapperProps ){
  return {
    title: {
        name: product?.title,
        link: `/collections/${product?.category?.data?.attributes?.slug}/${product?.slug}`,
    },
    vendor: {
        name: product?.vendor?.name,
        link: product?.vendor?.slug
    },
    price: product?.price?.value,
    currency: product?.price?.currency,
    image: {
        url: product?.variants?.[0]?.image?.data?.attributes?.url,
        alt: product?.variants?.[0]?.image?.data?.attributes?.alternativeText
    },
    variant: {
      color: product?.variants?.[0]?.color,
      material: product?.variants?.[0]?.material,
    },
  };
}

