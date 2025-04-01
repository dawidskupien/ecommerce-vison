"use client"
import React, { useRef, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import FooterHeader from "./FooterHeader";
import Newsletter from "./Newsletter";
import logo from "@/assets/images/footer-logo.webp";
import FooterLinks from "./FooterLinks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footer = {
  logo: logo,
  desc: "Elevate your home with smart technology.",
  links: [
    {
      title: "Company",
      links: [
        { name: "Wholesale", url: "/wholesale" },
        { name: "Become a retailer", url: "/become-a-retailer" },
        { name: "Careers", url: "/careers" },
        { name: "Press", url: "/press" },
        { name: "Affiliates", url: "/affiliates" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "About", url: "/about" },
        { name: "Blog", url: "/blog" },
        { name: "FAQ", url: "/faq" },
        { name: "Support", url: "/support" },
        { name: "Contact", url: "/contact" },
      ],
    },
  ],
};

export default function Index() {
  const year = new Date().getFullYear();
  const borderRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); 

  // useLayoutEffect(() => {
  //   const cleanupScrollTriggers = () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };

  //   const setupAnimation = () => {
  //     if (borderRef.current && footerRef.current) {
  //       gsap.fromTo(
  //         borderRef.current,
  //         { borderLeftWidth: "0rem", borderRightWidth: "0rem" },
  //         {
  //           borderLeftWidth: "10rem",
  //           borderRightWidth: "10rem",
  //           duration: 5,
  //           scrollTrigger: {
  //             trigger: footerRef.current,
  //             start: "top 90%",
  //             end: "top 0%",
  //             scrub: true,
  //           },
  //         }
  //       );
  //     }
  //     ScrollTrigger.refresh(); 
  //   };
  //   console.log("cipka", pathname)
  //   setupAnimation();

  //   const handlePathnameChange = () => {
  //     cleanupScrollTriggers(); 
  //     setupAnimation(); 
  //   };

  //   handlePathnameChange();

  //   return () => {
  //     cleanupScrollTriggers();
  //   };
    
  // }, [pathname]); 

  return (
    <>
      {/* Animated Border Element */}
      <div
        ref={borderRef}
        className="w-screen h-screen border-typographyDark bottom-0 left-0 fixed -z-10 hidden  xl:block"
      ></div>

      {/* Footer Section */}
      <div
        ref={footerRef}
        className="bg-typographyDark text-[#dadce0] px-[15px] md:px-[50px] py-[45px] md:py-[65px]"
      >
        <div className="max-w-[80rem] mx-auto">
          <div className="lg:grid grid-cols-3">
            <FooterHeader logo={footer.logo} desc={footer.desc} />
            <FooterLinks links={footer.links} />
            <Newsletter />
          </div>
          <div className="border-t border-[#868d94] pt-5 text-base opacity-80">
            &copy; {year} Vision - Main, All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
