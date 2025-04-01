"use client";

import {
  useState,
  useEffect,
  Fragment,
  SetStateAction,
  ChangeEvent,
  use,
} from "react";
import { useDebounce } from "use-debounce";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { getTrackBackground } from "react-range";
import type { AccordionItemIdentifier } from "./filters.types";
import { Range } from "react-range";
import { getFilters } from "../../../_fetchers/getFilters";
import { useProductsParams } from "../../../_hooks/useProductsParams";

type PriceProps = {} & AccordionItemIdentifier;

export default function PriceFilter({ trackValue, label }: PriceProps) {
  const maxPrice = getFilters().data?.filters?.price?.max || 999 as number;

  const [params, setParams] = useProductsParams();
  const parsedRangedValues: [number, number] = [
    params?.priceGte || 0,
    params?.priceLte || maxPrice,
  ];

  const [currentRangeValues, setCurrentRangeValues] =
    useState<[number, number]>(parsedRangedValues);
  const [values] = useDebounce(currentRangeValues, 300);

  useEffect(() => {
    setCurrentRangeValues(parsedRangedValues);
  }, [params.priceGte, params.priceLte]);

  useEffect(() => {
    setParams({
      ...params,
      priceGte: values[0] > 0 ? values[0] : undefined,
      priceLte: values[1] < maxPrice ? values[1] : undefined,
      page: 1,
    });
  }, [values, maxPrice]);

  return (
    <AccordionItem value={trackValue}>
      <AccordionTrigger>{label}</AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-4">
          <p>{`The highest price is $${maxPrice}`}</p>
          <div className="flex justify-center flex-wrap gap-[1.563rem]">
            <PriceRange
              values={currentRangeValues}
              setValues={setCurrentRangeValues}
              maxPrice={maxPrice}
            />
            <div className="flex justify-between items-center w-full gap-3 ">
              <PriceRangeInputs
                values={currentRangeValues}
                setValues={setCurrentRangeValues}
                maxPrice={maxPrice}
              />
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

type TupleRangeValuesProps = {
  values: [number, number];
  setValues: React.Dispatch<SetStateAction<[number, number]>>;
  maxPrice: number;
};

function PriceRange({ values, setValues, maxPrice }: TupleRangeValuesProps) {
  return (
    <Range
      values={values}
      step={1}
      min={0}
      max={maxPrice}
      onChange={(currentValues) => setValues(currentValues as [number, number])}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "0.25rem",
            width: "100%",
            marginInline: "0.625rem",
            background: getTrackBackground({
              values,
              colors: ["#ccc", "#303c43", "#ccc"],
              min: 0,
              max: maxPrice,
            }),
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props: { key, ...props } }) => (
        <div
          key={key}
          className="h-4 w-4 rounded-full bg-white shadow-md border border-black"
          {...props}
        />
      )}
    />
  );
}

function PriceRangeInputs({
  values,
  setValues,
  maxPrice,
}: TupleRangeValuesProps) {
  function handlePriceChange(
    e: ChangeEvent<HTMLInputElement>,
    inputIndex: number
  ) {
    const currentValue = Number(e.target.value);

    const clampedValue = Math.max(0, Math.min(maxPrice, currentValue));

    const updatedValues = values?.map((value, index) =>
      index === inputIndex ? clampedValue : value
    );
    setValues(updatedValues as [number, number]);
  }

  return (
    <Fragment>
      {values?.map((value, currentInputIndex) => (
        <Fragment key={currentInputIndex}>
          <div
            className="relative flex justify-between items-center"
            key={currentInputIndex}
          >
            <span className="currency absolute left-3 opacity-50">$</span>
            <input
              className="price-amount-single hideArrows py-[0.688rem] pl-[1.875rem] pr-[0.813rem] w-full text-end border border-gray-300 bg-background rounded"
              type="number"
              value={value?.toFixed(2)}
              onChange={(e) => handlePriceChange(e, currentInputIndex)}
              step="any"
            />
          </div>
          {currentInputIndex === 0 && <span className="w-3">—</span>}
        </Fragment>
      ))}
    </Fragment>
  );
}
