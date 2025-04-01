import React from "react";
import {
  ComponentHeaderSublinks,
  Maybe,
  SubNavigation as NavigationTopBarType,
} from "@/graphql/_generated";
import NavigationSocials from "./_components/NavigationSocials";
import Link from "next/link";

interface NavigationTopBarProps {
  data: NavigationTopBarType | undefined;
}

const NavigationTopBar = ({ data }: NavigationTopBarProps) => {
  return (
    <nav className="navigation-topbar w-full h-navigationTopBar border-b  hidden md:block border-borderColor  bg-background text-xs px-[0.938rem] md:px-[50px] ">
      <div className="flex items-center h-full justify-between leading-[1.05rem]  max-w-[80rem] mx-auto">
        <NavigationList links={data?.links} />
        <div className="flex items-center">
          <NavigationSocials
            className="flex"
            iconClassName="w-[14px] h-[14px] m-[6px]"
            socials={data?.socials}
          />
        </div>
      </div>
    </nav>
  );
};

function NavigationList({
  links,
}: {
  links: Maybe<Maybe<ComponentHeaderSublinks>[]>;
}) {
  return (
    <ul className="flex">
      {links?.map((link) => (
        <NavigationItem
          key={link?.id}
          href={link?.url || "#"}
          name={link?.name || ""}
        />
      ))}
    </ul>
  );
}

interface NavigationItemProps extends React.ComponentProps<"li"> {
  href: string;
  name: string;
}

function NavigationItem({ href, name }: NavigationItemProps) {
  return (
    <li className="first:pl-0 px-[0.625rem] text-typographyDark">
      <Link href={href}>{name}</Link>
    </li>
  );
}

export default NavigationTopBar;
