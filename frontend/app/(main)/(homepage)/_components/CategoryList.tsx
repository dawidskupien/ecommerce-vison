import { useGetCategoriesQuery } from "@/graphql/_generated";
import { client } from "@/graphql/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import Category from "@/components/Category";


export default function CategoryList() {
const { data, isLoading } = useSuspenseQuery({
    queryKey: useGetCategoriesQuery.getKey(),
    queryFn: useGetCategoriesQuery.fetcher(client)
})
if(isLoading) return <div>Loading...</div>
const categories = data?.categories?.data || [];
  return (
       <div className="flex gap-5 mb-20">
        {categories.map((category) => (
          <   Category key={category.id} category={category} />
        ))}
      </div>
  )
}