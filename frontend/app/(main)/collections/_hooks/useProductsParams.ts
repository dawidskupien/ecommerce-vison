import {
    DelimitedArrayParam,
    StringParam,
    useQueryParams,
    withDefault,
    QueryParamConfig,
    DecodedValueMap,
    NumberParam,
  } from "use-query-params";
  
  const createParamsConfig = () => ({
    page: withDefault(NumberParam, 1),
    availability: StringParam,
    vendor: withDefault(DelimitedArrayParam, [] as string[]),
    priceGte: NumberParam,
    priceLte: NumberParam,
    color: withDefault(DelimitedArrayParam, [] as string[]),
    material: withDefault(DelimitedArrayParam, [] as string[]),
    sort: StringParam,
  });
  
  type InferQueryProductsParams<T extends Record<string, any>> = {
    [K in keyof T]: T[K] extends QueryParamConfig<infer P, infer Q>
      ? QueryParamConfig<P, Q>
      : T[K];
  };
  export type InferedProductsParamKeys = keyof InferQueryProductsParams<
    ReturnType<typeof createParamsConfig>
  >;
  export type ProductsParams = DecodedValueMap<
    InferQueryProductsParams<ReturnType<typeof createParamsConfig>>
  >;
  
  export function useProductsParams() {
    const [queryParams, setQueryParams] = useQueryParams(createParamsConfig());

    const setParams = (params: Partial<ProductsParams>) => {
        
        const filteredParams = {
          ...params,
          vendor: params.vendor?.length === 0 ? undefined : params.vendor,
          material: params.material?.length === 0 ? undefined : params.material,
          color: params.color?.length === 0 ? undefined : params.color,
        };
    
        setQueryParams(filteredParams);
      };

  
    return [queryParams, setParams] as const;
  }
  