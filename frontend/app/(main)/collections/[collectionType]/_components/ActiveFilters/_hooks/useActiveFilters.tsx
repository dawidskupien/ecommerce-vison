import { getFilters } from "@/app/(main)/collections/_fetchers/getFilters";
import { InferedProductsParamKeys, ProductsParams, useProductsParams } from "@/app/(main)/collections/_hooks/useProductsParams";
import ColorBadge from "../ColorBadge"

export default function useActiveFilters() {
    const [params, setParams] = useProductsParams();
    const maxPrice = getFilters().data.filters?.price?.max || 999 as number;
    const activeFilters = extractActiveFilters(params);
    const hasActiveFilter = activeFilters.filter(({ param }) => param !== "page").length > 0;


    function extractActiveFilters(params: ProductsParams) {
      return Object.entries(params).flatMap(([param, value]) => {
        if (param === "sort") return []; 
        return Array.isArray(value)
          ? value.map((val) => ({ param: param as InferedProductsParamKeys, value: val as string }))
          : value
          ? [{ param: param as InferedProductsParamKeys, value }]
          : [];
      });
    }

      const handleClearFilters = () => {
        setParams({
          page: undefined,
          availability: undefined,
          vendor: undefined,
          priceGte: undefined,
          priceLte: undefined,
          color: undefined,
          material: undefined,
        });
      };

      const handleRemoveFilter = (param: InferedProductsParamKeys, value: string | number) => {
        let updatedParams: Partial<ProductsParams> = { ...params };
      
        if (param === "priceGte" || param === "priceLte") {
          updatedParams.priceGte = undefined;
          updatedParams.priceLte = undefined;
        } else if (Array.isArray(params[param])) {
          updatedParams[param] = (params[param])?.filter((val) => val !== value) as any;
        } else {
          updatedParams[param] = undefined;
        }
      
        setParams(updatedParams);
      };
      

      const formatPriceRange = (priceGte: number, priceLte: number) => {
        return `${priceGte?.toFixed(2)} - ${priceLte?.toFixed(2)}`;
      }

      const renderValue = (param: InferedProductsParamKeys, value: string | number) => {
        switch (param) {
          case "availability":
            return "In stock";
          case "color":
            return <ColorBadge color={value as string} />;
          case "priceLte":
          case "priceGte":
            return formatPriceRange(params?.priceGte ?? 0, params.priceLte ?? maxPrice);
          default:
            return value;
        }
      };
    
    

    return {
        activeFilters,
        handleRemoveFilter,
        params,
        handleClearFilters,
        renderValue,
        hasActiveFilter
    }
}
