import React from "react";
import { Button } from "../ui/button";

export default function CartHeader ({ quantity, onClose }: CartHeaderProps) {
    return (
        <div className="flex justify-between items-center py-6 px-[1.875rem] border border-b">
            <div className="relative">
            <span className="text-lg font-semibold font-inter">Cart</span>
            <sup className="absolute top-1 -right-3">{quantity}</sup>
            </div>
            <Button onClick={onClose} variant="unstyled" className="relative flex items-center justify-center w-4 h-4">
                <div className="h-[2px] w-5 bg-black rotate-45 absolute" />
                <div className="h-[2px] w-5 bg-black -rotate-45 absolute" />
            </Button>
        </div>
)};

interface CartHeaderProps {
  quantity: number;
  onClose: () => void;
}
