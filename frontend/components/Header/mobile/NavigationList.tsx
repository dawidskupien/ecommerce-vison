import {
  ComponentHeaderLinks,
} from "@/graphql/_generated";
import { Maybe } from "graphql/jsutils/Maybe";
import ListItem from "./NavigationItem";

export default function NavigationList({
  links,
}: {
  links: Maybe<Maybe<ComponentHeaderLinks>[]>;
}) {
  return (
    <ul className="flex-col flex text-typographyDark mb-[20px] ">
      {links?.map((link) => (
        <ListItem
          className="flex items-center justify-between min-h-[3.375rem] text-xl font-medium border-b border-borderColor"
          name={link?.name as string}
          url={link?.url as string}
          key={link?.id}
          sublinks={link?.sublinks}
        />
      ))}
    </ul>
  );
}
