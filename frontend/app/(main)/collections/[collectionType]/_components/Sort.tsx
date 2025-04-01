import { cn } from "@/utils/helpers";
import { useProductsParams } from "../../_hooks/useProductsParams";

const selectOptions = [
  { name: "Date, new to old", value: "date_desc" },
  { name: "Date, old to new", value: "date_asc" },
  { name: "Name, A to Z", value: "name_asc" },
  { name: "Name, Z to A", value: "name_desc" },
  { name: "Price, low to high", value: "price_asc" },
  { name: "Price, high to low", value: "price_desc" },
];

export default function Sort({ className }: React.ComponentProps<"div">) {
  const [params, setParams] = useProductsParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParams({ ...params, sort: e.target.value });
  };

  return (
    <div className={cn("sort flex items-center gap-2", className)}>
      <select
        className="bg-transparent text-sm w-fit"
        value={params.sort || "date_desc"} 
        onChange={handleChange}
      >
        {selectOptions.map((option, index) => (
          <option value={option.value} key={index} className="text-sm">
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
