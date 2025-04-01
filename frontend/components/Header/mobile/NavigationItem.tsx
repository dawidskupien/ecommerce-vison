import { cn } from "@/utils/helpers";
import Link from "next/link";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ComponentHeaderSublinks, Maybe } from "@/graphql/_generated";
import NavigationList from "./NavigationList";
import { Button } from "@/components/ui/button";
import { useNavigationStore } from "@/providers/navigation-store-provider";

interface NavigationItemProps extends React.ComponentProps<"li"> {
  name: string;
  url: string;
  sublinks?: Maybe<ComponentHeaderSublinks>[];
}

const NavigationItem = ({
  name,
  url,
  sublinks,
  className,
}: NavigationItemProps) => {
  const hasSublinks = !!sublinks?.length;

  return hasSublinks ? (
    <NavigationItemWithSubLinks
      name={name}
      sublinks={sublinks}
      className={className}
    />
  ) : (
    <NavigationItemWithoutSublinks name={name} url={url} />
  );
};

export default NavigationItem;

function NavigationItemWithSubLinks({
  name,
  sublinks,
  className,
}: {
  name: string;
  sublinks: Maybe<ComponentHeaderSublinks>[];
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const subMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMenu = subMenuRef.current;
    return () => {
      if (currentMenu) {
        gsap.killTweensOf(currentMenu);
      }
    };
  }, []);

  useEffect(() => {
    if (subMenuRef.current) {
      gsap.to(subMenuRef.current, { x: isOpen ? "0" : "100%", duration: 0.3 });
    }
  }, [isOpen]);

  return (
    <li className={cn(className)}>
      <Button
        variant="unstyled"
        className="flex justify-between items-center w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {name}
        <MdArrowForwardIos height={12} width={12} />
      </Button>

      {isOpen && (
        <SubMenu
          subMenuRef={subMenuRef}
          sublinks={sublinks}
          name={name}
          onBack={() => setIsOpen(false)}
        />
      )}
    </li>
  );
}

function SubMenu({
  subMenuRef,
  sublinks,
  name,
  onBack,
}: {
  subMenuRef: React.RefObject<HTMLDivElement>;
  sublinks: Maybe<ComponentHeaderSublinks>[];
  name: string;
  onBack: () => void;
}) {
  return (
    <div
      ref={subMenuRef}
      className="absolute top-0 left-0 translate-x-full bg-background z-50 px-[15px] h-full w-full"
    >
      <Button
        variant="unstyled"
        className="flex items-center text-xs h-[50px] w-full"
        onClick={onBack}
      >
        <MdArrowBackIos className="mr-[10px]" size={12} />
        {name}
      </Button>
      <NavigationList links={sublinks} />
    </div>
  );
}

function NavigationItemWithoutSublinks({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  const { toggleNav } = useNavigationStore((state) => state);
  return (
    <li className="flex items-center min-h-[3.375rem] text-xl font-medium border-b border-borderColor">
      <Link onClick={() => void toggleNav()} className="w-full" href={url}>
        {name}
      </Link>
    </li>
  );
}
