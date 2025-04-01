import { Enum_Componentproductcurrency_Currency } from "@/graphql/_generated";
import Link from "next/link";

interface ProductHeadingProps {
    title: string;
    price: { value: number; currency: Enum_Componentproductcurrency_Currency } | undefined;
    tags: ({name?: string | undefined} | undefined)[] | undefined
}

export default function ProductHeading ({title, price, tags}: ProductHeadingProps) {
    return (
        <div className="product-heading">
            <div className="product-tags flex flex-wrap mb-[0.813rem] text-lg gap-[0.313rem]">
                {tags?.map((tag, i) => (
                    <span key={i} className="text-xs  py-[0.375rem] px-[0.625rem] rounded-[0.375rem] border">
                    {tag?.name}
                    </span>
                ))}
            </div>
            <h1 className="font-roboto text-3xl font-medium leading-[2.625rem] -tracking-[0.043rem]">
                {title}
            </h1>
            <span className="text-xl flex flex-col">
                {price?.currency === "USD" && "$"}
                {price?.value?.toFixed(2)}
                <span className="text-xs mt-[3px]">
                    Tax included.{" "}
                    <Link
                    className="underline hover:text-blue-500 mt-[0.188rem]"
                    href="/policies/shipping-policy"
                    >
                    Shipping
                    </Link>{" "}
                    calculated at checkout.
                </span>
            </span>
        </div>
    );
}