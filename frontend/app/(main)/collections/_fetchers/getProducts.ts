"use client";

import { useParams } from "next/navigation";
import { client } from "@/graphql/client";
import { useSuspenseQuery, UseSuspenseQueryResult } from "@tanstack/react-query";
import { useProductsParams } from "../_hooks/useProductsParams";
import { useGetProductsByCategoryQuery, GetProductsByCategoryQuery, InputMaybe, SortOptions } from "@/graphql/_generated";


export default function useGetProducts(): UseSuspenseQueryResult<GetProductsByCategoryQuery, Error> {
    const { collectionType } = useParams<{ collectionType: string }>(); 
    const [params] = useProductsParams(); 

    const minPrice = params?.priceGte ? params.priceGte : 0;
    const maxPrice = params?.priceLte ? params.priceLte : 999;
    const pageSize = parseInt(process.env.NEXT_PUBLIC_PAGE_SIZE || "10")


    return useSuspenseQuery({
        queryKey: useGetProductsByCategoryQuery.getKey({
            slug: collectionType,
            vendors: params.vendor as string[],
            materials: params.material as string[],
            colors: params.color as string[],
            price: {
                min: minPrice,
                max: maxPrice,
            },
            pagination: { page: params.page, pageSize },
            sort: params.sort as InputMaybe<SortOptions>,
        }),
        queryFn: useGetProductsByCategoryQuery.fetcher(client, {
            slug: collectionType,
            vendors: params.vendor as string[],
            materials: params.material as string[],
            colors: params.color as string[],
            price: {
                min: minPrice,
                max: maxPrice,
            },
            pagination: { page: params.page, pageSize },
            sort: params.sort as InputMaybe<SortOptions>,
        }),
    });
}