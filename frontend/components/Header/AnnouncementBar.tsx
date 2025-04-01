import { useState, useRef } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ComponentHeaderAnnouncments } from "@/graphql/_generated";
import { Button } from "../ui/button";

interface AnnouncementBarProps {
  announcements: ComponentHeaderAnnouncments[] | undefined;
}

const AnnouncementBar = ({ announcements }: AnnouncementBarProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div
      style={{ backgroundColor: announcements?.[activeIndex]?.backgroundColor }}
      className={`transition-all duration-500 h-announcementBar `}
    >
      <div className="flex mx-auto h-full max-w-[31.25rem]">
        <ArrowButton direction="left" swiperRef={swiperRef} />
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1}
          loop
          modules={[Autoplay]}
          autoplay={{ delay: 6000 }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {announcements?.map((announcement, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center h-full text-typography  text-sm font-roboto leading-[0.813rem] ">
                {announcement.announcement}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <ArrowButton direction="right" swiperRef={swiperRef} />
      </div>
    </div>
  );
};

interface ArrowButtonProps {
  direction: "left" | "right";
  swiperRef: React.RefObject<SwiperRef>;
}

const ArrowButton = ({ direction, swiperRef }: ArrowButtonProps) => {
  const handleClick = () =>
    direction === "left"
      ? swiperRef?.current?.swiper?.slidePrev()
      : swiperRef?.current?.swiper?.slideNext();

  const Icon = direction === "left" ? MdArrowBackIos : MdArrowForwardIos;

  return (
    <Button
      variant="unstyled"
      onClick={handleClick}
      className="flex items-center justify-center h-full aspect-square"
    >
      <Icon
        className="text-white w-[0.75rem]  h-[0.75rem]"
        width={6}
        height={10}
      />
    </Button>
  );
};

export default AnnouncementBar;
