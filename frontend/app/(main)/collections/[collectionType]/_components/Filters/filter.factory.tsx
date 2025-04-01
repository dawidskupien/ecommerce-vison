import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import type { AccordionItemIdentifier } from "./filters.types";
import { useProductsParams } from "../../../_hooks/useProductsParams";

type FilterType = "vendor" | "material" | "color";

export type CreateFilterProps = {
  type: FilterType;
  list: { name: string; count: number }[]
  identifier: AccordionItemIdentifier;
};

export function createFilterFactory({ type, list, identifier }: CreateFilterProps) {

  return (
    <AccordionItem value={identifier?.trackValue}>
      <AccordionTrigger>{identifier?.label}</AccordionTrigger>
      <AccordionContent>
        <ul className={`${type}-list`}>
          {list?.map((item, idx: number) => (
            <ListItem
              type={type}
              key={item?.name}
              name={item?.name}
              count={item?.count}
            />
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

export function ListItem({
  name,
  count,
  type,
}: {
  name: string;
  count: number;
  type: FilterType;
}) {
  const [params, setParams] = useProductsParams()
  function handleToggleChange(type: FilterType, value: string) {
    const isChecked = params[type]?.includes(value);
    setParams({
      ...params,
      [type]: isChecked
        ? (params[type] as string[]).filter((v) => v !== value)
        : [...(params[type] as string[]), value],
      page: 1,
    });
  }
  return (
    <li className="flex items-center gap-2">
      <Checkbox
        className="bg-white"
        checked={params?.[type]?.includes(name)}
        onCheckedChange={() => handleToggleChange(type, name)}
      />
      <p className={`${type}-name capitalize text-[0.938rem] text-typographyDark`}>{name} <span className="count opacity-60 text-[.813rem] ml-0.5">({count})</span></p>
    </li>
  );
}
