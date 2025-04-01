"use client"

import { useGetCategoriesQuery } from "@/graphql/_generated";
import { client } from "@/graphql/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import Category from "@/components/Category";


export default function Collections() {
const { data, isLoading } = useSuspenseQuery({
    queryKey: useGetCategoriesQuery.getKey(),
    queryFn: useGetCategoriesQuery.fetcher(client)
})
if(isLoading) return <div>Loading...</div>
const categories = data?.categories?.data || [];
  return (
       <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2.5 gap-y-5 md:gap-[1.875rem] mb-20">
        {categories.map((category) => (
          <   Category key={category.id} category={category} />
        ))}
      </div>
  )
}



