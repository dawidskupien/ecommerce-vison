import { Button } from "@/components/ui/button";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface SlideIndicatorProps {
    current: number;
    total: number;
    swiperRef: any;
}

export default function SlideIndicator({ current, total, swiperRef }: SlideIndicatorProps) {

    const handleNext = () => {swiperRef?.current?.swiper?.slideNext()}
    const handlePrev = () => {swiperRef?.current?.swiper?.slidePrev()}

    return (
      <div className="absolute bottom-0 right-0 pr-[10px] pb-[10px] z-30 ">
        <div className="flex items-center justify-center font-medium bg-white py-[2px] px-[7px] rounded-[500px] min-w-[40px] h-[32px] md:h-[42px] text-sm md:text-[15px]">

         <ArrowButton onClick={handlePrev} icon={<MdArrowBack className="h-[18px] w-[32px]" />} />

          <span>{current} </span>
          <span className="px-[3px]">/</span>
          <span>{total}</span>

        <ArrowButton onClick={ handleNext} icon={<MdArrowForward className="h-[18px] w-[32px]" />} />

        </div>
      </div>
    );
  }

function ArrowButton ({onClick, icon}: {onClick: () => void, icon: React.ReactNode}) {
    return (
        <Button
            onClick={onClick} 
            variant="unstyled"
            className="w-[38px] h-[38px]  items-center justify-center"
        >
            {icon}
        </Button>
    );
}

