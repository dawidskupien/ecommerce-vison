import { useEffect } from "react";
import gsap from "gsap";

export default function useFloatingTextAnimation(
    refs: React.RefObject<HTMLDivElement[]>,
    duration: number
  ) {
    useEffect(() => {
      const textWidth = refs.current?.[0]?.scrollWidth;
  
      if (textWidth) {
        refs.current?.forEach((ref) => {
          if (ref) {
            gsap.to(ref, {
              x: `-${textWidth}px`,
              duration,
              repeat: -1,
              ease: "linear",
            });
          }
        });
      }
    }, []);
  }