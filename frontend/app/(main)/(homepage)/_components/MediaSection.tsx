import { MediaSquare, MediaSquareBackground, MediaSquareLink, MediaSquareParagraph, MediaSquareTitle} from "@/components/ui/MediaSquare";
import { MediaSquares, sectionText } from "../temp/mediaSection-temp";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

export default function MediaSection () {

    return (
        <div className="px-[15px] md:px-[50px] lg:px-0 ">
          <Title />
          <div className="max-w-[800px] mx-auto  mb-[35px]">
          <p className="text-lg md:text-xl text-center font-bold font-roboto">{sectionText.description}</p>
          </div>
  
          <div className="grid grid-cols-[repeat(4,90%)] md:grid-cols-4 md:grid-rows-2  gap-[15px] -mr-[15px] md:mr-0 overflow-auto">
                <MediaSquare mediaSquare={MediaSquares[0]} className="text-center md:row-span-2 md:col-span-2 md:h-full"  >
                  <MediaSquareParagraph />
                  <MediaSquareTitle className="text-2xl leading-[36px] " />
                  <MediaSquareLink />
                  <MediaSquareBackground type="image" />
                </MediaSquare>
  
                <MediaSquare  mediaSquare={MediaSquares[1]} className="md:col-span-2" >
                  <div className="flex flex-col max-w-[50%] ">
                  <MediaSquareParagraph />
                  <MediaSquareTitle />
                  <MediaSquareLink />
                  <MediaSquareBackground type="image" />
                  </div>
                </MediaSquare>
  
                <MediaSquare mediaSquare={MediaSquares[2]} className="justify-center text-center " >
                  <MediaSquareTitle className="text-white"  />
                  <MediaSquareBackground type="static" className="bg-[linear-gradient(180deg,rgba(247,177,168,1),rgba(63,114,229,1)99%)]" />
                </MediaSquare>
  
                <MediaSquare mediaSquare={MediaSquares[3]} className="justify-center text-center" >
                  <div className="flex flex-col [word-wrap:break-word] ">
                  <MediaSquareTitle className="text-white"  />
                  <MediaSquareLink className="text-white" />
                  <MediaSquareBackground type="video"  />
                  </div>
                </MediaSquare>

          </div>
        </div>
    )
  }



  function Title({ className }: React.ComponentProps<"div">) {
    const pathRef = useRef<SVGPathElement>(null); 
  
    useEffect(() => {
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength(); 
  
        gsap.fromTo(
          pathRef.current,
          {
            strokeDasharray: pathLength, 
            strokeDashoffset: pathLength,
          },
          {
            strokeDashoffset: 0, 
            duration: 0.5, 
            delay: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: pathRef.current,
              start: "top 80%", 
              toggleActions: "play none none none", 
            },
          }
        );
      }



    }, []);
  
    return (
      <div className="relative w-fit mx-auto">
        <h3 className="text-[32px] md:text-[36px] lg:text-[50px] font-semibold text-center mb-[20px]">
          {sectionText.title}
        </h3>
        <svg
          className="absolute right-0 -bottom-2 w-[45%]"
          width="201"
          height="14"
          viewBox="0 0 201 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            d="M3 10.5732C55.565 6.61382 168.107 -0.117058 197.753 4.63415"
            stroke="#fd6b62"
            strokeWidth="6"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
    );
  }