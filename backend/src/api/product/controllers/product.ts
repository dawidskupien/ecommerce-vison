import { factories } from "@strapi/strapi";
import { sanitize, validate } from "@strapi/utils";

interface Product {
  id: number;
  attributes: {
    title: string;
    description: string;
    price: {
      value: number;
      currency: string;
    };
    vendor: {
      name: string;
      slug: string;
    };
    category: {
      data: {
        attributes: {
          slug: string;
        };
      };
    };
    images: {
      data: {
        attributes: {
          alternativeText: string;
        };
      }[];
    };
    colors: {
      name: string;
      value: string;
    }[];
    materials: {
      type: string;
    }[];
  };
}

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async findProductsByCategoryOrAll(ctx) {
      const contentType = strapi.contentType("api::product.product");

      // Validate the query parameters
      await validate.contentAPI.query(ctx.query, contentType, {
        auth: ctx.state.auth,
      });

      // Sanitize the query parameters
      const sanitizedQueryParams = await sanitize.contentAPI.query(
        ctx.query,
        contentType,
        { auth: ctx.state.auth }
      );

      // Fetch products based on sanitized query
      let products;

      if (ctx.params.slug === "all") {
        products = await strapi.entityService.findMany("api::product.product", {
          ...sanitizedQueryParams,
          populate: "*",
        });
      } else {
        const categories = await strapi.entityService.findMany(
          "api::category.category",
          {
            filters: { slug: ctx.params.slug },
            populate: { products: true },
          }
        );

        if (!categories || categories.length === 0) {
          return { data: [] };
        }

        products = categories[0].products;
      }

      // Sanitize the output and cast it to the Product array
      const sanitizedResults = (await sanitize.contentAPI.output(
        products,
        contentType,
        { auth: ctx.state.auth }
      )) as Product[];

      return {
        data: sanitizedResults.map((product) => ({
          id: product.id,
          attributes: product,
        })),
      };
    },
  })
);
