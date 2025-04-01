import React from "react";

interface BackdropProps {
  onClose: () => void;
}

const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(({ onClose }, ref) => {
  return (
    <div
      ref={ref}
      onClick={onClose}
      className="fixed backdrop-blur-[7px] bg-[#9FA3A7]/40 inset-0"
    ></div>
  );
});

export default Backdrop;
