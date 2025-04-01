export default () => ({
  seo: {
    enabled: true,
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        category: {
          field: "slug",
          references: "name",
        },
      },
    },
  },
  graphql: {
    enabled: true,
    // config: {
    //   apolloServer: {
    //     context: ({ ctx }) => {
    //       return {
    //         strapi: ctx.strapi,
    //       };
    //     },
    //   },
    // },
  },
  "react-icons": true,
});
