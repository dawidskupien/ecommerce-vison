"use client"
import { createContext, ReactElement, useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import { cn } from "@/utils/helpers";
import { useCartStore } from "@/providers/cart-store-provider";
import { useDebounce } from "use-debounce";
import QuantityInput from "./QuantityInput";
import { Button } from "./button";
import { FaRegTrashAlt } from "react-icons/fa";


interface ProductType {
    id?: string;
    vendor?: {
        name: string;
        link: string;
    };
    title: {
        name: string;
        link?: string
    }
    price: number;
    currency: string;
    image: {
        url: string;
        alt: string
    }
    variant?: {
      color: string;
      material: string;
    };
    quantity: number;
}

const ProductContext = createContext< ProductType | undefined>(undefined);

function useProduct() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error(
        "Product must be used within a ProductContext provider"
        );
    }
  return context;
}

export function Product({
  children,
  product
}: {
  children: React.ReactNode;
  product: any;
}) {
  return (
    <ProductContext.Provider value={product}>
      <>{children}</>
    </ProductContext.Provider>
  );
}



export function ProductVendor({}: React.ComponentProps<"div">) {
    const product = useProduct();
  return (
    <Link
      className="product-vendor uppercase tracking-[1.1px] text-[.688rem] text-typographyDark"
      href={product.vendor?.link || ""}
    >
        {product?.vendor?.name}
    </Link>
  );
}

export function ProductName({className}: React.ComponentProps<"div">) {
const {title} = useProduct();
  return (
    <Link className={cn("mb-[5px] font-medium  leading-[22.4px] text-[1rem] text-typographyDark", className) } href={title.link || ""}>
      {title.name}
    </Link>
  );
}

export function ProductPrice({className}: React.ComponentProps<"p">) {
    const product = useProduct();
    const price = product.quantity ? product.price * product.quantity : product.price;
  return (
    <p className={cn("product-price text-base text-typographyDark leading-[15px]", className)}>
      {formatCurrency(price, product.currency)}
    </p>
  );
}


export function ProductImage({className}: React.ComponentProps<"div">) {
    const { image } = useProduct();
  // const [isHovered, setIsHovered] = useState(false);
  // const imageSrc =
  //   isHovered && src[1] ? src[1]?.attributes?.url : src[0]?.attributes?.url;
  return (
      <Image
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        src={image.url ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}` : ""}
        alt={image.alt}
        height={294}
        width={235}
        className={cn("object-cover w-full rounded-2xl", className)}
      />
  );
}


export function ProductQuantity({className}: React.ComponentProps<"div">) {
    const { removeFromCart, changeQuantity } = useCartStore((state) => state);
    const product = useProduct();
    const [quantity, setQuantity] = useState(product.quantity || 1);
    const [debouncedQuantity] = useDebounce(quantity, 200);
  
    useEffect(() => {
        changeQuantity(product, debouncedQuantity);
    }, [debouncedQuantity]);
  
    const handleDecrement =  () => {
      setQuantity(Math.max(quantity - 1, 1));
    };

    const handleIncrement = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };
  
    return (
      <div className={cn("flex gap-2", className)}>
        <QuantityInput
          quantity={quantity}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
        <Button
          className="text-red-600"
          variant="unstyled"
          onClick={() => void removeFromCart(product)}
          aria-label="Remove item from cart"
        >
          <FaRegTrashAlt />
        </Button>
      </div>
    );
  }


  export function ProductVariants( {className}: React.ComponentProps<"div">) {
    const product = useProduct();
    return (
      <div className={cn("text-xs opacity-80", className)}>
         {`${product?.variant?.color}, ${product?.variant?.material}`}
      </div>
    );
  }
  
