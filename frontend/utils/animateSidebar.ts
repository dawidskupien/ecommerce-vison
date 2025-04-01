import gsap from "gsap";

export const animateSidebar = (
  sidebarRef: React.RefObject<HTMLDivElement>,
  backdropRef: React.RefObject<HTMLDivElement>,
  state: "open" | "close",
  onComplete?: () => void
) => {
  if (!sidebarRef.current || !backdropRef.current) return;
  const duration = 0.3;

  if (state === "open") {
        gsap.fromTo(sidebarRef.current, {x: "100%", opacity: 0}, { x: 0, opacity: 1, duration});
        gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration });
  } else if (state === "close") {
        gsap.fromTo(sidebarRef.current, { x: 0, opacity: 1 }, { x: "100%", opacity: 0, duration});
        gsap.fromTo(backdropRef.current, { opacity: 1 }, { opacity: 0, duration,  onComplete: () => {
            onComplete && onComplete();
            }
        });
    }
};