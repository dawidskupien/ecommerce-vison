"use client"
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import Profile from "@/assets/icons/profile.svg";
import Cart from "@/assets/icons/cart.svg";
import Search from "@/assets/icons/search.svg";
import {
  ComponentHeaderLinks,
  Maybe,
  Navigation as NavigationType,
  UploadFile,
} from "@/graphql/_generated";
import { Button } from "../ui/button";
import NavigationItem from "./_components/NavigationItem";
import CartComponent from "@/components/Cart/index";
import { useNavigationStore } from "@/providers/navigation-store-provider";
import { useCartStore } from "@/providers/cart-store-provider";
import { useEffect } from "react";

interface NavigationProps {
  data: NavigationType | undefined;
}

export default function Navigation({ data }: NavigationProps) {
  const { isOpen } = useCartStore((state) => state);
  return (
    <nav className=" bg-background px-[15px] md:px-[50px] ">
      <div className="grid items-center grid-cols-[1fr_134px_1fr]  lg:grid-cols-[134px_1fr] grid-rows-1 lg:grid-rows-2  lg:py-[10px] mx-auto h-navigationMobile lg:h-navigation max-w-[80rem] ">
        <ToggleButton />
        <Logo logo={data?.logo?.data?.attributes} />
        <NavigationIcons />
        <ul className="navigation-list hidden lg:flex leading-6 ">
          {data?.links?.map((link, index) => (
            <NavigationItem
              key={link?.id}
              href={link?.url ?? "#"}
              name={link?.name ?? ""}
              sublinks={link?.sublinks}
              badgeHidden={index !== 0}
            />
          ))}
        </ul>
      </div>
      {isOpen && <CartComponent />}
    </nav>
  );
}

function ToggleButton() {
  const { isOpen, toggleNav } = useNavigationStore(
    (state) => state,
  )
  useEffect(() => {
    gsap.to(".line1", {
      rotate: isOpen ? 45 : 0,
      y: isOpen ? -1.25 : 0,
      duration: 0.2,
    });
    gsap.to(".line2", { opacity: isOpen ? 0 : 1, duration: 0.2 });
    gsap.to(".line3", {
      rotate: isOpen ? -45 : 0,
      y: isOpen ? 1.25 : 0,
      duration: 0.2,
    });
  }, [isOpen]);


  return (
    <Button
      variant="unstyled"
      className="flex flex-col lg:hidden gap-[3.5px] -ml-[15px]  items-center justify-center h-[3rem] w-[3rem] cursor-pointer"
      onClick={() => void toggleNav()}
    >
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`line${i + 1} h-[0.094rem] w-[1.125rem] bg-black origin-left`}
        ></div>
      ))}
    </Button>
  );
}


function Logo({ logo }: { logo: Maybe<UploadFile> }) {
  return (
    <Link href="/" className="flex">
      <Image
        className="object-cover max-w-[134px] max-h-[26px] my-auto"
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${logo?.url}`}
        alt={logo?.alternativeText ?? ""}
        width={logo?.width ?? 134}
        height={logo?.height ?? 26}
      />
    </Link>
  );
}


function NavigationIcons() {
  const { toggleCart, quantity } = useCartStore((state) => state);
  return (
    <div className="flex items-center justify-end gap-3.5 lg:gap-5">
      <Button variant="unstyled">
        <Image src={Search} alt="" />
      </Button>
      <Link className="hidden md:block" href={"/profile"}>
        <Image src={Profile} alt="" />
      </Link>
      <Button className="relative translate-y-[1px]" variant="unstyled" onClick={() => void toggleCart()}>
        <div className="bg-[#3f72e5] flex items-center justify-center h-[19px] w-[19px] rounded-full absolute -top-2 -right-3 font-bold font-roboto text-white text-[10px] leading-[10px]">{quantity}</div>
        <Image  src={Cart} alt="" />
      </Button>
    </div>
  );
}
