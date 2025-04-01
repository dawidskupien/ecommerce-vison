import { Category } from '@/graphql/_generated';
import React from 'react';

export default function useGetHeaderData(pageType: string, category?: Category) {
    const titleMap: { [key: string]: string } = {
        collectionsPage: "Shop by category",
        allPage: "All Products",
        categoryPage: category?.name
            ? category.name.charAt(0).toUpperCase() + category.name.slice(1)
            : "",
    };

    const descriptionMap: { [key: string]: string } = {
        collectionsPage: "Add a short description for your collections",
        allPage: "Shop now, not later. Browse the best of our favorite sale styles and brands.",
        categoryPage: category?.description || "",
    };

    const title = titleMap[pageType] || "";
    const description = descriptionMap[pageType] || "";

    return [title, description];
}
