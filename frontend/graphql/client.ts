import { GraphQLClient } from "graphql-request";
import { cache } from "react";
import { isServer } from "@tanstack/react-query";

export const client = new GraphQLClient("http://localhost:1337/graphql", {
  method: "GET",
  errorPolicy: "all",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
    // fetch: cache(async (url, params) =>
    //   fetch(url, { ...params, next: { revalidate: 600 } })
    // )
    // fetch/
    fetch: async(url, params) =>
      fetch(url, {...params, cache: "force-cache", next: { revalidate: 600 }})
});
