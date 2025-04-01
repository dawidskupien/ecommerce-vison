import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '@/app/styles/swiper-navigation.css';

import {
  Product,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductVendor,
} from '@/components/ui/product';
import {
  GetProductsByCategoryQuery,
  Product as ProductType,
} from '@/graphql/_generated';
import { productMapper } from '@/mappers/productMapper';
import { cn } from '@/utils/helpers';

interface ProductsSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  desc: string;
  products: GetProductsByCategoryQuery;
  quantity: number;
}

export default function Index({
  title,
  desc,
  products,
  quantity,
  className,
}: ProductsSliderProps) {
  const productsD = products?.productsByCategory?.data

  return (
    <div className={cn('', className)}>
      <h2 className="text-2xl lg:text-3xl font-semibold mb-[5px]">{title}</h2>
      <p className="text-base lg:text-lg font-roboto mb-[30px]">{desc}</p>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          768: { slidesPerView: 4, navigation: true },
          1024: { slidesPerView: 5 },
        }}
        navigation
      >
        {productsD?.map((product, index) => (
          <SwiperSlide key={index} >
            <div className="flex flex-col max-w-full ">
              <Product product={productMapper({ product: product as ProductType })}>
                <ProductImage className="w-full object-cover rounded-2xl mr-[20px] mb-3" />
                <ProductVendor />
                <ProductName />
                <ProductPrice />
              </Product>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
