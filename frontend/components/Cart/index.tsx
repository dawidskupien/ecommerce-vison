import { useCartStore } from "@/providers/cart-store-provider";
import { useEffect, useRef, useState} from "react";
import  CartHeader  from "./CartHeader";
import  CartFooter from "./CartFooter";
import CartItems from "./CartItems";
import Backdrop from "./Backdrop";
import { animateSidebar } from "@/utils/animateSidebar";

export default function Cart() {
  const { toggleCart, items, quantity, total } = useCartStore((state) => state);
  const cartRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateSidebar(cartRef, backdropRef, "open");
  }, []);

  const handleClose = () => {
    animateSidebar(cartRef, backdropRef, "close", toggleCart);
  };

  return (
    <>
      <div
        ref={cartRef}
        className="fixed grid grid-rows-[auto,1fr,auto]  right-0 top-0 bottom-0 bg-white w-[calc(100vw-15px)] max-w-[33.75rem] z-[9999] rounded-s-2xl"
      >
        <CartHeader quantity={quantity} onClose={handleClose} />
        <CartItems items={items} />
        <CartFooter total={total} onClose={handleClose} />
      </div>
      <Backdrop ref={backdropRef} onClose={handleClose} />
    </>
  );
}
