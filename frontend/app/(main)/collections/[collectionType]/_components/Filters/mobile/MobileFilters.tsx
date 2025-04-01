import { Accordion } from '@/components/ui/accordion';
import { cn } from '@/utils/helpers';
import React, { useState } from 'react'
import AvailabilityFilter from '../Availability';
import { ColorFilter, MaterialFilter, VendorFilter } from '../CheckboxFilters';
import PriceFilter from '../Price';
import ProductsQuantity from '../../ProductsQuantity';
import { Button } from '@/components/ui/button';
import { IoCloseOutline } from 'react-icons/io5';
import { useProductsParams } from '@/app/(main)/collections/_hooks/useProductsParams';
import Sort from '../../Sort';

export default function MobileFilters({toggleOpen}: {toggleOpen: () => void}) {
  return (
    <>
        <Backdrop toggleOpen={toggleOpen} />
        <aside
        className={cn(
        `filters-sidebar grid grid-rows-[auto,1fr,auto] fixed top-0 left-0 w-full h-dvh max-w-[min(33.75rem,100%-15px)]  z-[9999] bg-white rounded-e-2xl `,
        )}
    >
            <FilterHeader toggleOpen={toggleOpen} />
            <div className='overflow-auto overflow-x-hidden p-[1.875rem]'>
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
                <div className="flex justify-between lg:hidden py-5">
                    <span className="text-[0.938rem] font-medium">Sort by</span>
                    <Sort />
                </div>
            </div>
        <FilterFooter toggleOpen={toggleOpen} />
        </aside>
    </>
    )
}


function Backdrop({ toggleOpen }: { toggleOpen: () => void }) {
    return (
      <div
        onClick={toggleOpen}
        className="click-capture inset-0 bg-[#9FA3A7]/20 lg:hidden z-[9998] absolute backdrop-blur-[7px]"
      />
    );
  }


  function FilterHeader({ toggleOpen }: { toggleOpen: () => void }) {
    return (
      <div className="border-b flex justify-between p-[1.875rem] lg:hidden ">
        <div>
          <h2 className="font-semibold text-lg">Filter and sort</h2>
          <ProductsQuantity quantity={4} />
        </div>
        <Button onClick={toggleOpen} variant="unstyled">
          <IoCloseOutline className="size-[24px]" />
        </Button>
      </div>
    );
  }


  function FilterFooter ({ toggleOpen }: { toggleOpen: () => void }) {
    const [params, setParams] = useProductsParams();
  
    function handleClearFilters() {
      setParams({});
      toggleOpen();
    }
    return (
      <div className="grid grid-cols-2 lg:hidden gap-[7px] w-full  left-0 bottom-0 p-[1.875rem] max-w-[min(33.75rem,100%-15px)] lg:max-w-[15rem] bg-white border-t">
      <Button
        className="btn-clear-all text-[0.75rem] font-medium uppercase text-primary-blue underline underline-offset-4 lg:hidden rounded-full "
        onClick={handleClearFilters}
        variant="unstyled"
      >
        Clear 
      </Button>
      <Button
        className="btn-apply lg:hidden bg-typographyDark text-white rounded-full"
        onClick={toggleOpen}
      >
        Apply
      </Button>
    </div>
    );
  }