import { gql } from "graphql-request";

export const GET_HEADER = gql`
  query getHeader {
    announcementBar {
      data {
        attributes {
          announcements {
            announcement
            backgroundColor
          }
        }
      }
    }
    navigation {
      data {
        attributes {
          logo {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          links {
            id
            name
            url
            sublinks {
              id
              name
              url
            }
          }
        }
      }
    }
    subNavigation {
      data {
        attributes {
          currencySelect {
            currency
            countryImage {
              data {
                attributes {
                  url
                  alternativeText
                  width
                  height
                }
              }
            }
          }
          links {
            id
            name
            url
          }
          socials {
            id
            url
            icon {
              data {
                attributes {
                  url
                  alternativeText
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ANNOUNCEMENT_BAR = gql`
  query getAnnouncementBar {
    announcementBar {
      data {
        attributes {
          announcements {
            announcement
            backgroundColor
          }
        }
      }
    }
  }
`;

export const GET_NAVIGATION = gql`
  query getNavigation {
    navigation {
      data {
        attributes {
          logo {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          links {
            id
            name
            url
            sublinks {
              id
              name
              url
            }
          }
        }
      }
    }
  }
`;

export const GET_NAVIGATION_TOP_BAR = gql`
  query getNavigationTopBar {
    subNavigation {
      data {
        attributes {
          currencySelect {
            currency
            countryImage {
              data {
                attributes {
                  url
                  alternativeText
                  width
                  height
                }
              }
            }
          }
          links {
            id
            name
            url
          }
          socials {
            id
            url
            icon {
              data {
                attributes {
                  url
                  alternativeText
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      data {
        id
        attributes {
          name
          slug
          description
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  query getCategory($slug: String!) {
    categories(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          name
          description
          slug
        }
      }
    }
  }
`;

// const PRODUCT_FRAGMENT = gql`
//   fragment Product on Product {
//     title
//     slug
//     description
//     sku
//     stock
//     vendor {
//       name
//       slug
//     }
//     price {
//       value
//       currency
//       discountedValue
//     }
//     images {
//       data {
//         attributes {
//           url
//           alternativeText
//         }
//       }
//     }
//     category {
//       data {
//         attributes {
//           name
//           description
//           slug
//         }
//       }
//     }
//     colors {
//       name
//       value
//     }
//     materials {
//       id
//       name
//     }
//     labels {
//       id
//       name
//     }
//   }
// `;

const PRODUCT_FRAGMENT = gql`
 fragment Product on Product {
    title
    slug
    description
    sku
    stock
    vendor {
      name
      slug
    }
    price {
      value
      currency
      discountedValue
    }
    images {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
    category {
      data {
        attributes {
          name
          description
          slug
        }
      }
    }
    labels {
      name
    }
    variants {
      id
      variantId
      image {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
      color {
        name
        value
      }
      material { 
        name
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  ${PRODUCT_FRAGMENT}
  query getProducts {
    products {
      data {
        id
        attributes {
          ...Product
        }
      }
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
  ${PRODUCT_FRAGMENT}
  query getProductsByCategory(
    $slug: String!
    $colors: [String]
    $vendors: [String]
    $materials: [String]
    $price: PriceRangeInput
    $pagination: PaginationInput
    $sort: SortOptions
  ) {
    productsByCategory(
      slug: $slug
      colors: $colors
      vendors: $vendors
      price: $price
      materials: $materials
      pagination: $pagination
      sort: $sort
    ) {
      data {
        ...Product
      }
      meta {
        total
        page
        pageSize
        pageCount
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          ...Product
        }
      }
    }
  }
`;

export const GET_PRODUCT_NAME = gql`
  query getProductName($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
        }
      }
    }
  }
`;

export const GET_FILTERS = gql`
  query getCategoryFilters($slug: String!) {
    filters(slug: $slug) {
      colors {
        name
        value
        count
      }
      vendors {
        name
        count
      }
      materials {
        name
        count
      }
      price {
        min
        max
      }
    }
  }
`;

export const GET_CURRENCIES = gql`
  query getCurrencies {
    currencySelect {
      data {
        attributes {
          Option {
            id
            currency
            countryImage {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
