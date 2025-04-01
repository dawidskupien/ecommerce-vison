import { cn } from "@/utils/helpers";


interface ProductsQuantityProps extends React.ComponentProps<"div"> {
  quantity: number;
}

export default function ProductsQuantity({className, quantity}: ProductsQuantityProps) {
    return (
      <div className={cn("text-sm text-end", className)} >
        <span>{quantity} products</span>
      </div>
    );
  }