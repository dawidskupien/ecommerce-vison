// import { ComponentHeaderSublinks, Maybe } from "@/graphql/_generated";
import { cn } from "@/utils/helpers";
// import NavigationItem from "./NavigationItem";

import { ComponentHeaderSublinks } from "@/graphql/_generated";
import { Maybe } from "graphql/jsutils/Maybe";
import NavigationItem from "./NavigationItem";

// interface NavigationDropdownProps extends React.ComponentProps<"div"> {
//   items: Maybe<ComponentHeaderSublinks>[];
//   type?: "default" | "extended";
// }

// export function NavigationDropdown({
//   className,
//   items,
//   type = "extended",
// }: NavigationDropdownProps) {
//   if (type === "extended") {
//     return (
//       <div
//         className={cn(
//           "navigation-dropdown group hidden group-hover:block absolute z-[9999] mt-10 left-0 w-full bg-white after:absolute after:top-0 after:left-0 after:right-0 after:h-[calc(100vh-10rem)]  after:bg-black/50 py-4 ",
//           className
//         )}
//       >
//         <div className="absolute top-0 bg-background w-full left-0 right-0 z-[9999]">
//           <ul className="navigationItem-list md:max-w-[min(80rem,100%-100px)] mx-auto">
//             {items?.map((sublink) => (
//               <NavigationItem
//                 key={sublink?.id}
//                 className="text-[.9375rem] 
//                 text-nowrap w-fit my-2.5
//                 lg:transition lg:text-typographyDark "
//                 href={sublink?.url as string}
//                 name={sublink?.name as string}
//                 badgeHidden
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div
//       className={cn(
//         "navigation-dropdown bg-white rounded-2xl absolute -left-4 z-10 top-[var(--header-height)] hidden shadow-lg group-hover:block",
//         className
//       )}
//     >
//       <ul className="py-4 px-[1.625rem]">
//         {items?.map((sublink) => (
//           <NavigationItem
//             key={sublink?.id}
//             className="text-[.9375rem] leading-3
//             text-nowrap my-2.5
//             lg:transition lg:text-typographyDark "
//             href={sublink?.url as string}
//             name={sublink?.name as string}
//             badgeHidden
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }


interface NavigationDropdownProps extends React.ComponentProps<"div"> {
  items: Maybe<ComponentHeaderSublinks>[];
  type?: "default" | "extended";
}

export default function NavigationDropdown({items, type }: NavigationDropdownProps) {
  return (
    <div className=" bg-white rounded-2xl absolute -left-4 top-9 z-10 hidden shadow-lg group-hover:block">
          <ul className="py-4 px-[1.625rem]">
            {items?.map((sublink) => (
              <NavigationItem
                key={sublink?.id}
                className="text-[.9375rem] leading-3 !pl-0
        font-medium text-nowrap my-2.5
                lg:transition lg:text-typographyDark "
                href={sublink?.url as string}
                name={sublink?.name as string}
                badgeHidden
              />
            ))}
          </ul>
        </div>
  );
}
