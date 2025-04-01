import { Product } from "@/graphql/_generated";
import { useEffect, useMemo, useState } from "react";
import { useProductParams } from "../../../../_hooks/useProductParams";

export function useVariantSelect(variants: Product["variants"] | undefined) {

    const getUniqueValues = (key: "color" | "material") => {
      return variants
        ?.map((variant) => (key === "color" ? {
          name: variant?.[key]?.name,
          value: variant?.[key]?.value,
        }: {name: variant?.[key]?.name}))
        .filter(
          (key, i, self) => self.findIndex((i) => i.name === key.name) === i
        );
    }
        
    const colors = useMemo(() => getUniqueValues("color"), [variants]);
    const materials = useMemo(() => getUniqueValues("material"), [variants]);

    const [variantId, setVariantId] = useState<string>(variants?.[0]?.variantId || "");

    const [selectedVariant, setSelectedVariant] = useState({
      color: colors?.[0]?.name || "",
      material: materials?.[0]?.name || "",
    });


  const [queryParams, setQueryParams] = useProductParams();

  const handleClick = (value: string, type: "color" | "material") => {
    if (selectedVariant[type] === value) return;
  
    const updatedVariant = { ...selectedVariant, [type]: value };
    const variantId = variants?.find(
      (variant) =>
        variant?.color?.name === updatedVariant.color &&
        variant?.material?.name === updatedVariant.material
    )?.variantId;
  
    setSelectedVariant(updatedVariant);
    setQueryParams({ variant: variantId });
    setVariantId(variantId);
  };

  return [colors, materials, selectedVariant, handleClick, variantId] as const;
}