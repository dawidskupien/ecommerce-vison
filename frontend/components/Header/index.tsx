"use client";
import MobileMenu from "./mobile";
import { cn } from "@/utils/helpers";
import { getHeader } from "./_fetchers/getHeader";
import AnnouncementBar from "./AnnouncementBar";
import Navigation from "./Navigation";
import NavigationTopBar from "./NavigationTopBar";
import { usePathname } from "next/navigation"; 
import { useNavigationStore } from "@/providers/navigation-store-provider";
import MobileBar from "./mobile/MobileBar";

const Header = () => {
  const {isOpen} = useNavigationStore((state) => state)
  const pathname = usePathname()

  const { data, isLoading, isError } = getHeader();

  if (isLoading) return <div>Loading</div>;
  if (isError) {
    console.error("Error fetching header data:", isError);
    return <h1 className="text-red-500">Failed to load header. Please try again later.</h1>;
  }
  if (!data) return null;

  return (
    <header className={cn("sticky -top-[3rem] md:-top-[5.620rem] z-[999]",
     {"shadow-solid-line": pathname !== "/"})}
     >
      <AnnouncementBar announcements={data?.announcements} />
      <NavigationTopBar data={data?.navigationTopBarData} />
      <Navigation data={data?.navigationData} />
      <MobileBar data={data?.navigationData?.links} />
      {isOpen && <MobileMenu data={data?.mobileMenuData} />}
    </header>
  );
};

export default Header;
