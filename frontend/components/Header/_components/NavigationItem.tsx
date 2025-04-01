import { ComponentHeaderSublinks, Maybe } from "@/graphql/_generated";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import  NavigationDropdown  from "./NavigationDropdown";
import { cn } from "@/utils/helpers";

interface NavigationItemProps extends React.ComponentProps<"li"> {
  href: string;
  name: string;
  sublinks?: Maybe<ComponentHeaderSublinks>[];
  badgeHidden?: boolean;
}

export default function NavigationItem({
  href,
  name,
  sublinks,
  badgeHidden,
  className,
}: NavigationItemProps) {
  const hasSublinks = !!sublinks?.length;
  return (
    <li className={cn("group relative text-[.9375rem] hidden lg:flex lg:items-start font-medium lg:px-[.938rem] lg:transition lg:text-typographyDark  lg:first:pl-0 lg:my-[0.625rem] ", className)}>
      <Link
        href={href}
        className="flex relative items-center whitespace-nowrap  lg:hover:text-[#3E72E4] lg:before:absolute lg:before:h-[1px] py-[.438rem] lg:before:w-full lg:before:bg-[#3E72E4] lg:before:-bottom-[-0.438rem] lg:before:transition lg:before:origin-left lg:before:scale-x-0 lg:hover:before:scale-x-100"
      >
        {name}
        {hasSublinks && (
          <MdKeyboardArrowDown className="ml-1 h-3.5 w-3.5 hidden lg:block" />
        )}
      </Link>
      {hasSublinks && <NavigationDropdown items={sublinks} type="extended" />}
      {!badgeHidden && <NavigationItemBadge />}
    </li>
  );
}

function NavigationItemBadge({}: React.ComponentProps<"div">) {
  return (
    <div className="navigation-badge ml-[.625rem] hidden lg:block ">
      <span className="uppercase py-[.125rem] px-2 text-[.625rem] font-bold bg-badgeColor rounded-[5px]">
        new
      </span>
    </div>
  );
}
