import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';

export default function useSlider() {
    const [progress, setProgress] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const isTouching = useRef(false);
    const swiperRef = useRef(null);
    const delay = 10000;
  
    useEffect(() => {
      animateSlideIn();

      return () => {
        gsap.killTweensOf(".slide-subheader");
        gsap.killTweensOf([".slide-description", ".slide-headline"]);
        gsap.killTweensOf(".slide-button");
  
      };
    }, [activeSlide]);


    const animateSlideIn = () => {
        gsap.to(`.content-${activeSlide}`, { opacity: 1, duration: 0.6, ease: "power2.out" });
        gsap.set('.content', { opacity: 0 });
        gsap.fromTo(".slide-subheader", { opacity: 0 }, { opacity: 1 });
        gsap.fromTo(
          [".slide-description", ".slide-headline"],
          { opacity: 0, rotate: 5, y: 100 },
          {
            opacity: 1,
            rotate: 0,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          }
        );
        gsap.fromTo(
          ".slide-button",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", delay: 0.4 }
        );
        gsap.to(
        `.slide-background-${activeSlide}`,
          { scale: 1, duration: 1, ease: "power4.out"},
        );
        gsap.set(`.slide-background`, { scale: 1.1 });
      };

  
    return { progress, setProgress, activeSlide, setActiveSlide, isTouching, swiperRef, delay }
}
