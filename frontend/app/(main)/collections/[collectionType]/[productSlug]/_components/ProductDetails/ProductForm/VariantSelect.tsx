import { Button } from "@/components/ui/button";
import { useProductParams } from "../../../_hooks/useProductParams";

interface ProductSelectProps {
    label: string;
    selectedValue: string | undefined;
    items: Array<{ name: string; value?: string }>;
    handleClick: (value: string, type: "color" | "material") => void
  }

  export default function VariantSelect({label, selectedValue, handleClick, items}: ProductSelectProps) {
    const isMaterial = label === "Material";

    return (
        <div className="mb-5 text-sm">
          <div className="flex justify-between items-center">
            <label className="mb-2 font-medium">
              {label}: <span className="font-normal">{selectedValue}</span>
            </label>
            {isMaterial && (
              <Button variant="unstyled" type="button">
                Material Guide
              </Button>
            )}
        </div>
        <div className="flex">
          {items?.map(({name, value}, i) => {
            const inputId = `${isMaterial ? "materials" : "colors"}-${name}`;
            return ( 
            <div key={i} className="flex">
                <input
                  value={name}
                  name={isMaterial ? "material" : "color"}
                  className="hidden"
                  type="radio"
                  id={inputId}
                  checked={selectedValue === name}
                  readOnly
                />
              <label
                style={
                  isMaterial
                    ? {
                        border: name === selectedValue ? "1px solid black" : "",
                      }
                    : {
                        background: value,
                        border: name === selectedValue ? "3px solid white" : "",
                        outline: name === selectedValue ? "1px solid black" : "",
                      }
                    }
                    className={
                      isMaterial
                        ? `py-[10px] border px-[16px] rounded-[0.375rem] cursor-pointer hover:border-black`
                        : `transition-all duration-200 size-8 mr-2.5 cursor-pointer hover:border-[3px] rounded-full hover:outline outline-1 outline-gray-500`
                    }
                    htmlFor={inputId}
                    onClick={() => handleClick(name, isMaterial ? "material" : "color")}
                  >
                      {isMaterial ? name : ""}
                </label>
              </div>
          )})}
        </div>
      </div>
    )
}
