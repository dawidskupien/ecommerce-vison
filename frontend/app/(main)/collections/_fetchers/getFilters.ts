"use client"

import { useParams } from "next/navigation"
import { client } from "@/graphql/client";
import { useSuspenseQuery, UseSuspenseQueryResult } from "@tanstack/react-query";
import { useGetCategoryFiltersQuery, GetCategoryFiltersQuery } from "@/graphql/_generated";


export function getFilters(): UseSuspenseQueryResult<GetCategoryFiltersQuery, Error> {
    const params = useParams<{collectionType: string}>();

    return useSuspenseQuery({
        queryKey: useGetCategoryFiltersQuery.getKey({ slug: params?.collectionType }),
        queryFn: useGetCategoryFiltersQuery.fetcher(client, {
          slug: params?.collectionType,
        }),
    });
}