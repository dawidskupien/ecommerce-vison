import { createFilterFactory, CreateFilterProps } from "./filter.factory";
import { getFilters } from "../../../_fetchers/getFilters";
import type { AccordionItemIdentifier } from "./filters.types";



export function VendorFilter(identifier: AccordionItemIdentifier) {
  const filters = getFilters();
  return createFilterFactory({
    type: "vendor",
    list: filters?.data?.filters?.vendors as CreateFilterProps["list"],
    identifier
  })
}
export function MaterialFilter(identifier: AccordionItemIdentifier) {
  const filters = getFilters();
  return createFilterFactory({
    type: "material",
    list: filters?.data?.filters?.materials as CreateFilterProps["list"],
    identifier
  })
}
export function ColorFilter(identifier: AccordionItemIdentifier) {
  const filters = getFilters();
  return createFilterFactory({
    type: "color",
    list: filters?.data?.filters?.colors as CreateFilterProps["list"],
    identifier
  });
}
