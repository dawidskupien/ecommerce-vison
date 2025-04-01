interface ProductByCategoryArgs {
  slug: string;
  vendors?: string[] | string;
  materials?: string[] | string;
  price?: { min: number; max: number };
  colors?: string[] | string;
  pagination?: { page: number; pageSize: number };
  sort?: "date_desc" | "date_asc" | "name_asc" | "name_desc" | "price_asc" | "price_desc";
}

interface ProductByCategoryResponse {
  data: any[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    pageCount: number;
  };
}

const productsByCategoryResolver = {
  async productsByCategory(
    parent: any,
    {
      slug,
      vendors = [],
      materials = [],
      price,
      colors = [],
      pagination = { page: 1, pageSize: 10 },
      sort,
    }: ProductByCategoryArgs,
    strapi: any
  ): Promise<ProductByCategoryResponse> {
    const productFilters: any = {
      ...(slug !== "all" && { category: { slug } }),
      ...(vendors.length > 0 && {
        vendor: { name: { $in: Array.isArray(vendors) ? vendors : [vendors] } },
      }),
      ...(materials.length > 0 && {
        variants: {
          material: { name: { $in: Array.isArray(materials) ? materials : [materials] } },
        },
      }),
      ...(colors.length > 0 && {
        variants: {
          color: { name: { $in: Array.isArray(colors) ? colors : [colors] } },
        },
      }),
      ...(price && price.min !== undefined && price.max !== undefined && {
        price: { value: { $gte: price.min, $lte: price.max } },
      }),
    };

    const sortOptions: Record<string, string> = {
      date_desc: "createdAt:desc",
      date_asc: "createdAt:asc",
      name_asc: "title:asc",
      name_desc: "title:desc",
      price_asc: "price.value:asc",
      price_desc: "price.value:desc",
    };

    const sortQuery = sort ? sortOptions[sort] : undefined;

    try {
      const products = await strapi.entityService.findMany("api::product.product", {
        filters: productFilters,
        populate: {
          variants: {
            populate: ["color", "material"],
          },
          vendor: true,
          price: true,
          category: true,
        },
        sort: sortQuery,
        limit: pagination.pageSize,
        start: pagination.pageSize * (pagination.page - 1),
      });

      const total = await strapi.entityService.count("api::product.product", {
        filters: productFilters,
      });

      const pageCount = total ? Math.ceil(total / pagination.pageSize) : 0;

      return {
        data: products,
        meta: {
          total,
          page: pagination.page,
          pageSize: pagination.pageSize,
          pageCount,
        },
      };
    } catch (error) {
      console.error("Error fetching products by category:", error);
      throw new Error("Failed to fetch products by category.");
    }
  },
};

export default productsByCategoryResolver;
