import { useEffect, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { useProductParams } from "./useProductParams";

export function useProductGallery(variantImages: any[], images: any[], swiperRef: any) {
    const allImages = [...variantImages.map((variant) => variant), { id: null, image: { data: images?.length > 0 ? images[0] : null } }];
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);
    const [queryParams, setParams] = useProductParams();
  
    useEffect(() => {
      const variantIndex = allImages.findIndex((image) => image.id === parseFloat(queryParams.variant));
    
      if (variantIndex !== -1 && swiperRef.current) {
        const swiper = swiperRef.current;
    
        swiper.loopDestroy();
        swiper.slideTo(variantIndex); 
        swiper.loopCreate(); 
      }
    }, [queryParams.variant]);

  return [allImages, thumbsSwiper, setThumbsSwiper ] as const;
}