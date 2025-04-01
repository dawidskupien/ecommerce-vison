"use client";
import { Accordion } from "@/components/ui/accordion";
import React from "react";
import { VendorFilter, MaterialFilter, ColorFilter } from "./CheckboxFilters";
import PriceFilter from "./Price";
import AvailabilityFilter from "./Availability";
import { cn } from "@/utils/helpers";


export default function Filters() {


  return (
      <aside
        className={cn(
          `hidden lg:static lg:block lg:min-w-full lg:bg-transparent lg:h-fit lg:overflow-hidden`,
        )}
      >
        <Accordion 
        defaultValue={[
          "availability",
          "vendor",
          "price",
          "color",
          "material",
        ]}
        type="multiple"
      >
        <AvailabilityFilter trackValue="availability" label="Availability" />
        <VendorFilter trackValue="vendor" label="Brand" />
        <PriceFilter trackValue="price" label="Price" />
        <ColorFilter trackValue="color" label="Color" />
        <MaterialFilter trackValue="material" label="Material" />
      </Accordion>
      </aside>
  );
}



