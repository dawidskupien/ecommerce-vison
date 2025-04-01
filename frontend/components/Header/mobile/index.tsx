import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import NavigationList from "./NavigationList";
import Image from "next/image";
import Profile from "@/assets/icons/profile.svg";
import {
  ComponentHeaderLinks,
  Maybe,
  Navigation as NavigationType,
  SubNavigation as NavigationTopBarType,
  ComponentHeaderSublinks,
} from "@/graphql/_generated";

import NavigationItem from "../_components/NavigationItem";
import NavigationSocials from "../_components/NavigationSocials";
import Link from "next/link";

interface MobileMenuProps {
  data: {
    navigationData: NavigationType | undefined;
    navigationTopBarData: NavigationTopBarType | undefined;
  };
}

const MobileMenu = ({ data }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      menuRef.current,
      { y: "10%", opacity: 0 },
      { y: 0, duration: 0.3, opacity: 1 }
    );
  }, []);

  return (
    <div
      ref={menuRef}
      className="mobile-menu flex lg:hidden overflow-hidden  flex-col justify-between border-t border-borderColor  bg-background absolute top-[var(--mobile-header-height)] md:top-[var(--header-height)] h-[calc(100svh-(var(--mobile-header-height)))]   md:h-[calc(100svh-(var(--header-height))]  w-full z-50"
    >
      <div className="px-[15px] md:px-[50px] overflow-auto">
        <NavigationList links={data?.navigationData?.links} />
        <SubNavigationList data={data?.navigationTopBarData?.links} />
        <NavigationSocials
          className="flex"
          iconClassName="w-[16px] h-[16px] m-[12px]"
          socials={data?.navigationTopBarData?.socials}
        />
      </div>
      <MobileMenuFooter />
    </div>
  );
};

export default MobileMenu;

function SubNavigationList({
  data,
}: {
  data: Maybe<Maybe<ComponentHeaderSublinks>[]>;
}) {
  return (
    <ul className="flex ">
      {data?.map((link) => (
        <NavigationItem
          key={link?.id}
          className="first:pl-0 px-[0.625rem] text-sm text-typographyDark"
          href={link?.url as string}
          name={link?.name as string}
        />
      ))}
    </ul>
  );
}

function MobileMenuFooter() {
  return (
    <div>
      <div className="flex justify-center text-sm items-center w-full py-[10px] border-y border-borderColor text-typographyDark">
        <Link className="flex gap-2" href={"/profile"}>
          <Image src={Profile} alt="" />
          Login
        </Link>
      </div>
      <div className="flex justify-center text-sm  items-center w-full py-[10px]  border-y border-borderColor text-typographyDark">
      </div>
    </div>
  );
}
