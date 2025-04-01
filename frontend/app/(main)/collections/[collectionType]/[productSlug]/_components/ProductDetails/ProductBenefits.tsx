import Image from "next/image";
import icon01 from "@/assets/icons/icon01.png";
import icon02 from "@/assets/icons/icon02.png";
import icon03 from "@/assets/icons/icon03.webp";


const benefits = [
    {
        icon: icon01,
        text: "Free shipping on all U.S. orders of $40+",
        },
        {
        icon: icon02,
        text: "Free returns and exchanges",
        },
        {
        icon: icon03,
        text: "100% satisfaction guaranteed",
    }
]

export default function ProductBenefits() {
    return (
      <div className="product-benefits mb-[20px]">
        <ul>
        {benefits.map((benefit, index) => (
            <li key={index} className="flex gap-4 items-center [&:not(:last-child)]:mb-[10px]">
            <Image src={benefit.icon} alt="" width={20} height={20} />
            <span className="text-sm font-medium">{benefit.text}</span>
            </li>
        ))}
        </ul>
      </div>
    );
  }