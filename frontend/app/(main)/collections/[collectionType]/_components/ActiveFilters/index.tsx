"use client";

import { Button } from "@/components/ui/button";
import useActiveFilters from "./_hooks/useActiveFilters";

interface ActiveFiltersProps extends React.ComponentProps<"div"> {}

export default function ActiveFilters({ className }: ActiveFiltersProps) {
  const {
    activeFilters,
    handleRemoveFilter,
    handleClearFilters,
    params,
    renderValue,
    hasActiveFilter,
  } = useActiveFilters();

  return (
    <div className="flex items-center flex-wrap gap-3 col-span-2 mb-4">
      {activeFilters
        .filter(({ param }) => !(param === "priceGte" && params.priceLte !== undefined) && param !== "page")
        .map(({ param, value }) => (
          <Button
            key={`${param}-${value}`}
            variant="unstyled"
            onClick={() => handleRemoveFilter(param, value)}
            className="flex items-center p-2 rounded-full text-sm border leading-5 h-[32px] border-borderColor hover:border-gray-800 cursor-pointer"
          >
            {renderValue(param, value)}
            <span className="ml-2 mr-1">x</span>
          </Button>
        ))}
      {hasActiveFilter && (
        <Button
          variant="unstyled"
          onClick={handleClearFilters}
          className="clear-all-button text-blue-500 font-medium underline text-sm cursor-pointer h-[32px] leading-5"
        >
          Clear all
        </Button>
      )}
    </div>
  );
}
