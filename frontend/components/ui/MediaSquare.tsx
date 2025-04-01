"use client"
import { cn } from "@/utils/helpers";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { createContext, ReactElement, useContext, useEffect, useState } from "react";


interface MediaSquareType  {
    title: {
        name: string;
        href?: string
    }
    paragraph?: string;
    link?: string;
    image?: StaticImageData;
    video?: any;
}

const MediaSquareContext = createContext< MediaSquareType | undefined>(undefined);

function useMediaSquare() {
    const context = useContext(MediaSquareContext);
    if (!context) {
        throw new Error(
        "MediaSquare must be used within a MediaSquareContext provider"
        );
    }
  return context;
}

export function MediaSquare({
  children,
  mediaSquare,
  className
}: {
  children: React.ReactNode;
  mediaSquare: MediaSquareType;
  className?: string;
}) {
  return (
    <MediaSquareContext.Provider value={mediaSquare}>
      <div className={cn("h-[300px] rounded-[16px] p-[25px] flex flex-col relative" , className)}>
        {children}
      </div>
    </MediaSquareContext.Provider>
  );
}



export function MediaSquareTitle({className}: React.ComponentProps<"div">) {
const {title} = useMediaSquare();
  return (
    <Link className={cn("text-xl font-inter font-semibold leading-[28px] mb-[20px] ", className) } href={title.href || ""}>
      {title.name}
    </Link>
  );
}


export function MediaSquareParagraph({className}: React.ComponentProps<"p">) {
    const {paragraph} = useMediaSquare();
  return (
    <p className={cn("text-xs font-medium font-roboto tracking-[1.2px] mb-[20px]", className)}>
      {paragraph?.toUpperCase()}
    </p>
  );
}

export function MediaSquareLink({className}: React.ComponentProps<"a">) {
    const {link} = useMediaSquare();
  return (
    <Link className={cn("text-blue-500 text-base font-medium", className)} href={link || ""}>
      {link}
    </Link>
  );
}


interface MediaSquareBackgroundProps extends React.ComponentProps<"div"> {
    type: "static" | "video" | "image";
}

export function MediaSquareBackground({className, type}: MediaSquareBackgroundProps) {
    const {image, video} = useMediaSquare();
    if (type === "image" && image) {
        return  <Image className={cn("absolute top-0 left-0 w-full h-full object-cover -z-10 rounded-[16px]", className)} src={image} alt="" height={1920} width={1080} />
    } else if (type === "video" && video) {
        return (
          <video height={1920} width={1080} className={cn("absolute top-0 left-0 w-full h-full object-cover -z-10 rounded-[16px]", className)} autoPlay loop muted>
            <source src={video} />
         </video>
      )
    } else if (type === "static") {
        return <div className={cn("absolute top-0 left-0 w-full h-full -z-10 rounded-[16px]", className)}></div>
    } else {
        return null;
    }
}

  
