
import React from "react";
import { HydrationBoundary, QueryClient, dehydrate, useQueryClient } from "@tanstack/react-query";
import { useGetCategoriesQuery } from "@/graphql/_generated";
import { client } from "@/graphql/client";
import { getQueryClient } from "@/providers/query-client-helper"
import Collections from "./collections";

const CategoryPage = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({
    queryKey: useGetCategoriesQuery.getKey(),
    queryFn: useGetCategoriesQuery.fetcher(client)
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Collections/>
    </HydrationBoundary>
  );
};

export default CategoryPage;
