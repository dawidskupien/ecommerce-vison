import { SubNavigation as NavigationTopBarType } from "@/graphql/_generated";
import { cn } from "@/utils/helpers";
import Link from "next/link";
import Image from "next/image";

interface NavigationSocialsProps extends React.ComponentProps<"ul"> {
  iconClassName?: string;
  socials: NavigationTopBarType["socials"];
}

export default function NavigationTopBarSocials({
  className,
  iconClassName,
  socials,
}: NavigationSocialsProps) {
  return (
    <ul className={cn(className)}>
      {socials?.map((social) => (
        <li key={social?.id}>
          <Link
            className="flex justify-center items-center"
            href={social?.url as string}
          >
            <Image
              className={cn(iconClassName)}
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${social?.icon?.data?.attributes?.url}`}
              alt={social?.icon?.data?.attributes?.alternativeText as string}
              width={social?.icon?.data?.attributes?.width as number}
              height={social?.icon?.data?.attributes?.height as number}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
