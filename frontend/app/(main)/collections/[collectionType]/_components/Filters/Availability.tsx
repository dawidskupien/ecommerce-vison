import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { AccordionItemIdentifier } from "./filters.types";
import { Switch } from "@/components/ui/switch";
import { useProductsParams } from "../../../_hooks/useProductsParams";

type AvailabilityProps = {} & AccordionItemIdentifier;

export default function AvailabilityFilter({
  trackValue,
  label,
}: AvailabilityProps) {
  const [params, setParams] = useProductsParams();

  function handleToggleAvailableProducts() {
    const isInStock =
      params?.availability === "in-stock" ? undefined : "in-stock";
    setParams({ ...params, availability: isInStock, page: 1 });
  }

  return (
    <AccordionItem value={trackValue}>
      <AccordionTrigger>{label}</AccordionTrigger>
      <AccordionContent>
        <div className="flex gap-2">
          <Switch
            id="in-stock"
            className="mr-[0.438rem]"
            checked={params.availability === "in-stock"}
            onCheckedChange={handleToggleAvailableProducts}
          />
          <label htmlFor="in-stock">In stock</label>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
