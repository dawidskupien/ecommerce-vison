import { Button } from "./button";

interface QuantityInputProps {
  handleDecrement: () => void;
  handleIncrement: () => void;
  quantity: number;
}

export default function QuantityInput({
  handleDecrement,
  handleIncrement,
  quantity,
}: QuantityInputProps) {
  return (
    <div className="border-2 rounded-[6px] w-fit flex items-center">
      <Button
        type="button"
        onClick={handleDecrement}
        variant="unstyled"
        className="w-[32px] h-[32px]"
      >
        -
      </Button>
      <input
        name="quantity"
        value={quantity}
        className="w-[32px] bg-transparent text-center h-[32px]"
        readOnly
      />
      <Button
        type="button"
        onClick={handleIncrement}
        variant="unstyled"
        className="w-[32px] h-[32px]"
      >
        +
      </Button>
    </div>
  );
}
