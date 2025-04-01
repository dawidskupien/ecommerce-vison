import QuantityInput from "@/components/ui/QuantityInput";

export default function ProductQuantity({ quantity, setQuantity }: { quantity: number, setQuantity: (quantity: number) => void }) {
    function handleDecrement() {
      if (quantity > 1) setQuantity(quantity - 1);
    }
  
    function handleIncrement() {
      setQuantity(quantity + 1);
    }
  
    return (
      <div className="mb-[1.25rem]">
        <label className="mb-[0.563rem] text-sm font-medium">Quantity</label>
        <QuantityInput
          quantity={quantity}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </div>
    );
  }
  