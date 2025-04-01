
import { GraphQLClient } from "graphql-request";

const requestHeaders = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
}
console.log(process.env.NEXT_PUBLIC_API_TOKEN)

export const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string, {
  method: "GET",
  errorPolicy: "all",
  headers: requestHeaders
});
