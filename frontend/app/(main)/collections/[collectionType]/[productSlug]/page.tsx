"use client"
import { client } from "@/graphql/client";
import { useGetProductQuery, useGetProductsByCategoryQuery } from "@/graphql/_generated";
import ProductDetails from "./_components/ProductDetails";
import ProductGallery from "./_components/ProductGallery";
import ProductsSlider from "@/components/ProductsSlider";
import getProducts from "../../_fetchers/getProducts";
import { useSuspenseQuery } from "@tanstack/react-query";



const videoText = {
  title: "Motion detection",
  description: "Answer the door from anywhere with Video Doorbell Wired. See visitors in crisp HD video, get rea-time alerts when motion is detected.",
}

export default function CollectionProductPage({
  params,
}: {
  params: { productSlug: string };
}) {
  const { data } = useGetProductQuery(client, {
    slug: params.productSlug as string,
  });
  const { data: products } = useSuspenseQuery({
    queryKey: useGetProductsByCategoryQuery.getKey({
        slug: "all",
    }),
    queryFn: useGetProductsByCategoryQuery.fetcher(client, {
        slug: "all",
    }),
});



  const images = data?.products?.data[0]?.attributes?.images?.data || [];
  const variantImages = data?.products?.data[0]?.attributes?.variants?.map(variant => {
    return { id: variant?.variantId, image: variant?.image };
  });

if (!variantImages) return null;
  return (
    <>
      <div className="lg:grid gap-[clamp(1.875rem,5%,2.5rem)] min-h-screen grid-cols-[minmax(45%,740px)_clamp(360px,45%,calc(1280px-40px-740px))] w-full " >
        <ProductGallery images={images} variantImages={variantImages as any}  />
        <ProductDetails data={data} />
      </div>
      <VideoBanner title={videoText.title} description={videoText.description} />
      <ProductsSlider
        className="mb-[50px]"
        title="You may also like" 
        desc="Combine your style with these products"
        products={products}
        quantity={4}
      />
    </>
  );
}


function VideoBanner ({title, description}: {title: string, description: string}) {
  return (
    <div className="relative flex items-center justify-center mt-[35px] mb-[50px] bg-black rounded-2xl">
    <div className="absolute text-center text-white px-[15px] md:px-[50px] max-w-[650px] z-10 ">
      <h3 className="text-3xl md:text-[52px] lg:text-[60px] mb-[20px] font-semibold">{title}</h3>
      <p className="text-lg font-roboto">{description}</p>
    </div>
    <video className="w-full object-cover h-[500px] md:h-[550px] rounded-2xl opacity-80" autoPlay loop muted>
      <source src="/videos/video.mp4" type="video/mp4" />
    </video>
  </div>
  )
}