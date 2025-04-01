import filtersResolver from "./graphql/resolvers/filters";
import productsByCategoryResolver from "./graphql/resolvers/productsByCategory";
import typeDefs from "./graphql/typeDefs";

export default {
  register({ strapi }: { strapi: any }) {
    const extensionService = strapi.service("plugin::graphql.extension");

    extensionService.use(({ strapi }: { strapi: any }) => ({
      typeDefs,
      resolvers: {
        Query: {
          filters: (parent: any, args: any) =>
            filtersResolver.filters(parent, args, strapi),
          productsByCategory: (parent: any, args: any) =>
            productsByCategoryResolver.productsByCategory(parent, args, strapi),
        },
      },
    }));
  },
};
