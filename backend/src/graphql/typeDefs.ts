const typeDefs = `
type Color {
    name: String
    value: String
    count: Int
}

type Vendor {
    name: String
    count: Int
}

type Material {
    name: String
    count: Int
}

type Price {
    min: Float
    max: Float
}

type Filter {
    colors: [Color]
    vendors: [Vendor]
    materials: [Material]
    price: Price
}

input PriceRangeInput {
    min: Float
    max: Float
}

input PaginationInput {
    page: Int
    pageSize: Int
}

type PaginationMeta {
    total: Int
    page: Int
    pageSize: Int
    pageCount: Int
}


type ProductsByCategory {
    data: [Product]
    meta: PaginationMeta
}
enum SortOptions {
  date_desc
  date_asc
  name_asc
  name_desc
  price_asc
  price_desc
}

type Query {
    filters(slug: String!): Filter
    productsByCategory(
        slug: String!,
        vendors: [String],
        materials: [String],
        price: PriceRangeInput,
        colors: [String]
        pagination: PaginationInput,
        sort: SortOptions
    ): ProductsByCategory
}
`;

export default typeDefs;
