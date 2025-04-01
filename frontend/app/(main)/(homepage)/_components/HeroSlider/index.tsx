"use client";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { slides } from "../../temp/slides-temp";
import ProgressCircle from "./_components/ProgressCircle";
import SlideIndicator from "./_components/SlideIndicator";
import useSlider from "./_hooks/useSlider";
import SlideContent from "./_components/SlideContent";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSlider() {
    const { progress, setProgress, setActiveSlide, isTouching, swiperRef, delay  } = useSlider();

    const onSlideChange = (swiper: SwiperClass) => {
      if (!isTouching.current) {

        setActiveSlide(swiper.realIndex);
      }
    };

    return (
      <div className="cursor-pointer px-[15px] md:px-[50px] lg:px-0 ">
        <Swiper
          ref={swiperRef}
          className="h-[34.375rem] flex flex-col rounded-2xl"
          modules={[Autoplay, EffectFade]}
          effect="fade"
          slidesPerView={1}
          loop
          autoplay={{ delay, disableOnInteraction: false }}
          onAutoplayTimeLeft={(_, timeLeft) => setProgress(((delay - timeLeft) / delay) * 100)}
          onSlideChange={onSlideChange}
          onTouchStart={() => isTouching.current = true}
          onTouchEnd={() => isTouching.current = false}
        >
          {slides?.map((slide, i) => (
            <SwiperSlide key={slide?.id} className={`slide-${i}`}>
              <ProgressCircle progress={progress} variant={slide.variant} />
              <SlideContent slide={slide}  />
              <SlideIndicator
                swiperRef={swiperRef}
                current={i + 1}
                total={slides.length}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  