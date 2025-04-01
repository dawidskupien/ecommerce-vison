import { splitText } from "@/utils/splitText";
import { SliderProps } from "../../../temp/slides-temp";
import { cn } from "@/utils/helpers";
import { Button } from "@/components/ui/button";
import { MdArrowForwardIos } from "react-icons/md";

export default function SlideContent({ slide }: { slide: SliderProps }) {
  const isVideo = slide.variant === "video";
  const isBlack = slide.variant === "black";

  return (
    <div className="relative h-full ">
      <Background slide={slide} isVideo={isVideo} />
      <div className={cn(`content content-${slide.id} flex flex-col justify-center p-[15px] md:p-[35px] lg:p-[50px] max-w-[450px] lg:max-w-[650px] opacity-0 text-white h-full`, {
      "text-typographyDark": isBlack,
      "items-center text-center mx-auto": isVideo,
    })}>
        <Subheader subheader={slide.subheader} />
        <Headline headline={slide.headline} />
        <Description description={slide.description} />
        <div className="flex overflow-hidden">
          <SlideButton text={slide.buttonText} variant={"default"} isBlack={isBlack} isVideo={isVideo} />
          {!isVideo && 
            <SlideButton text="Learn more" variant={"secondary"} icon={<MdArrowForwardIos className="h-[12px]" />} isBlack={isBlack} isVideo={isVideo} />
          }
        </div>
      </div>
    </div>
  );
}

function Background({ slide, isVideo }: { slide: SliderProps; isVideo: boolean }) {
  return isVideo ? (
    <video
      className={`slide-background-${slide.id} slide-background scale-110 h-full object-cover absolute top-0 left-0 w-full -z-10`}
      style={{transform: "scale(1.1)"}}
      loop
      autoPlay
      muted
      poster={slide.bgUrl}
    >
      <source src={slide.bgVideo} type="video/mp4" />
    </video>
  ) : (
    <div
      className={`slide-background-${slide.id} slide-background-image slide-background bg-cover bg-center h-full absolute top-0 left-0 w-full -z-10`}
      style={{
        "--desktop-bg": `url(${slide.bgUrl})`,
        "--mobile-bg": `url(${slide.mobileBgUrl})`,
        "transform": "scale(1.1)",
      } as React.CSSProperties}
    />
  );
}


function Subheader({ subheader }: { subheader: string }) {
  return (
    <p className="slide-subheader tracking-[1.2px] leading-[19.2px] text-[12px] font-medium text-uppercase mb-5">
      {subheader.toUpperCase()}
    </p>
  );
}

function SlideButton ({text, variant, icon, isBlack, isVideo}: {text: string, variant: string, icon?: React.ReactNode, isBlack?: boolean, isVideo?: boolean}) {
    return (
      <Button
      variant="unstyled"
      className={cn(
        {
         "slide-button text-typographyDark bg-white w-fit px-[30px] py-[7px] rounded-[25px] h-[50px]": variant === "default",
         "slide-button flex items-center text-[15px] px-[30px] py-[7px] rounded-[25px]": variant === "secondary",
          "bg-blue-500 text-white": isVideo,
          "bg-typographyDark text-white": isBlack && variant !== "secondary",
        }
      )}
    >
      {text} {icon}
    </Button>
    );
}

function Headline({ headline }: { headline: string }) {
  const splitHeadings = splitText(headline);

  return (
    <div className="mb-5 text-[34px] lg:text-[54px]  font-bold leading-[42px] [font-family:var(--font-inter),sans-serif] lg:leading-[62px] tracking-tighter">
      {splitHeadings.map((head, index) => (
        <div key={index} className="overflow-hidden">
          <h2 className="slide-headline">{head}</h2>
        </div>
      ))}
    </div>
  );
}

function Description({ description }: { description: string }) {
  const splitDesc = splitText(description);

  return (
    <div className="mb-5 lg:mb-[35px] text-[17px] leading-[27.2px] max-w-[38ch]">
      {splitDesc.map((desc, index) => (
        <div key={index} className="overflow-hidden h-fit">
          <p className="slide-description">{desc}</p>
        </div>
      ))}
    </div>
  );
}
