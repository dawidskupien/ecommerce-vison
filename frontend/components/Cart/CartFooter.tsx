import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox"

interface CartFooterProps {
  onClose: () => void;
  total: number;
}

export default function CartFooter ({ onClose, total }: CartFooterProps) {
  return (
  <div className="py-[1.563rem] px-[1.875rem]  border-t">
    <Total total={total} />
    <Terms onClose={onClose} />
    <div className="btn-group flex items-center gap-2.5 mt-5">
      <Link href="/cart">
        <Button
          onClick={onClose}
          className="w-fit px-[1.875rem] h-[3.125rem] rounded-full bg-typographyDark text-white"
          variant="default"
        >
          View cart
        </Button>
      </Link>
      <Link className="w-full" href="/checkout">
        <Button
          onClick={onClose}
          className="w-full rounded-full bg-[#3f72e5] text-white"
          variant="default"
        >
          Checkout
        </Button>
      </Link>
    </div>
  </div>
)}

function Total({ total }: { total: number }) {
  return (
    <div className="flex">
      <div className="flex-1">
        <p className="text-base font-medium">Total</p>
        <p className="text-sm opacity-60">Tax included. Shipping calculated at checkout.</p>
      </div>
      <p className="self-center text-xl font-medium">${total.toFixed(2)}</p>
    </div>
  );
}


function Terms ({ onClose }: { onClose: () => void }) {
 return (
  <div className="flex gap-2 items-center mt-4">
    <Checkbox className="h-5 w-5" />
    <label className="text-sm">I agree with the <Link onClick={onClose} href="/terms" className="text-blue-600 underline">terms and conditions</Link></label>
  </div>
 )
}

