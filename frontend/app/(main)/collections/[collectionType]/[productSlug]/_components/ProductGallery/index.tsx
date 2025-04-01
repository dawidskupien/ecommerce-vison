import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './productGallery.css';
import { Pagination, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import type { Swiper as SwiperInstance } from "swiper";
import { useProductGallery } from "../../_hooks/useProductGallery";

interface ProductGalleryProps {
  images: any[];
  variantImages: { id: number; image: any }[];
}

export default function ProductGallery({ images, variantImages }: ProductGalleryProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [allImages, thumbsSwiper, setThumbsSwiper] = useProductGallery(variantImages, images, swiperRef);

  return (
    <div className="flex flex-col md:flex-row mb-[40px] lg:mb-0">

      {/* Thumbnails */}
      <div className="hidden md:flex w-[80px]">
        <Swiper
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
          slidesPerView={3}
          direction="vertical"
          freeMode
          watchSlidesProgress
          spaceBetween={10}
          modules={[Thumbs]}
        >
          {allImages.map((image, index) => (
            <SwiperSlide className="!h-fit cursor-pointer"  key={`thumb-${index}`}>
              {image.image.data !== null && (
              <Image
                className="rounded-[16px] w-full h-[100px] "
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image?.image?.data?.attributes?.url}`}
                alt={image?.image?.data?.attributes?.alternativeText || "product image" as string}
                width={120}
                height={120}
              />
              )}

            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Slider */}
      <div className="w-screen md:w-[calc(100%-80px)] -ml-[15px] md:ml-0 md:px-[25px] ">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="md:rounded-[16px] cursor-grab md:max-w-[640px] mx-auto"

          spaceBetween={5}
          slidesPerView={1.1}
          centeredSlides
          loop
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Pagination, Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          breakpoints={{
            768: {
              slidesPerView: 1,
              centeredSlides: false,
              spaceBetween: 0,
            },
          }}
        >
          {allImages.map((image, index) => (
            <SwiperSlide key={index}>
              {image.image.data !== null && (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image?.image?.data?.attributes?.url}`}
                alt={image?.image?.data?.attributes?.alternativeText || "product image" as string}
                width={1250}
                height={1250}
              />
            )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
