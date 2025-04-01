const filtersResolver = {
  async filters(parent: any, { slug }: { slug: string }, strapi) {
    const fetchProducts = async () => {
      const fetchOptions = {
        populate: ["variants.color", "variants.material", "vendor", "price"],
      };

      if (slug === "all") {
        return strapi.entityService.findMany(
          "api::product.product",
          fetchOptions
        );
      }

      const [category] = await strapi.entityService.findMany(
        "api::category.category",
        {
          filters: { slug },
          populate: { products: fetchOptions },
        }
      );

      if (!category) throw new Error("Category not found");

      return category.products;
    };

    try {
      const products = await fetchProducts();

      const countByField = (items: any[], field: string) =>
        Object.values(
          items.reduce((acc: any, item: any) => {
            const key = item[field];
            if (key) {
              acc[key] = acc[key] || { ...item, count: 0 };
              acc[key].count++;
            }
            return acc;
          }, {})
        );

      const colors = countByField(
        products.flatMap((product: any) =>
          product.variants.map(
            (variant: any) =>
              variant.color && {
                name: variant.color.name,
                value: variant.color.value,
              }
          ).filter(Boolean)
        ),
        "name"
      );

      const materials = countByField(
        products.flatMap((product: any) =>
          product.variants.map(
            (variant: any) =>
              variant.material && { name: variant.material.name }
          ).filter(Boolean)
        ),
        "name"
      );

      const vendors = countByField(
        products.map((product: any) => product.vendor),
        "name"
      );

      const prices = products
        .map((product: any) => product.price?.value)
        .filter((value: number | undefined) => value !== undefined);

      return {
        colors,
        vendors,
        materials,
        price: {
          min: prices.length ? Math.min(...prices) : null,
          max: prices.length ? Math.max(...prices) : null,
        },
      };
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products.");
    }
  },
};

export default filtersResolver;
