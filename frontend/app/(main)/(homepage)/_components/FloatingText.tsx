"use client";
import { useRef } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineCelebration } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import useFloatingTextAnimation from "../_hooks/useFloatingTextAnimation";



export default function FloatingText() {
  const textRefs = useRef<HTMLDivElement[]>([]); 
  const duration = 50;
  useFloatingTextAnimation(textRefs, duration);

  return (
    <div className="overflow-hidden relative w-full flex text-[48px] font-bold py-[30px] text-[#adb3bb] leading-[77px] text-nowrap">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            ref={(el) => {textRefs.current[index] = el!}}
            className="flex gap-2"
          >
            <TextElement text="Enjoy our future" icon={<MdOutlineCelebration />} />
            <TextElement text="Set up your home for the night" icon={<FaRegMoon />} />
            <TextElement text="Automate everything" icon={<RiRobot2Line />} />
          </div>
        ))}
    </div>
  );
}


function TextElement ({text, icon}: {text: string, icon: JSX.Element}) {
    return (
        <div className="flex items-center ">
            {icon}
            <p className="px-[30px]">{text}</p>
        </div>
    );
}
