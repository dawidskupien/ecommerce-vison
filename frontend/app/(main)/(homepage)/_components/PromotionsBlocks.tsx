import React from "react";
import Image from "next/image";
import Link from "next/link";
import { promotions } from "../temp/promotions-temp";
import { MdArrowForwardIos } from "react-icons/md";

export default function PromotionsBlocks() {
  return (
    <div className="grid grid-cols-[repeat(3,minmax(92.5%,1fr))] md:grid-cols-3 gap-[10px] md:gap-[30px] py-[10px] md:py-[30px] px-[15px] md:px-[50px] lg:px-0 [scrollbar-width:none] overflow-x-auto snap-x snap-mandatory ">
      {promotions.map((promotion, index) => (
        <PromotionBlock key={index} promotion={promotion} />
      ))}
    </div>
  );
}

function PromotionBlock({ promotion }: { promotion: any }) {
  return (
    <div
      className="bg-white flex justify-between p-[10px]  shadow-lg rounded-2xl snap-center overflow-hidden"
      key={promotion.id}
    >
      <div className="py-[12px] px-[15px]  flex flex-col justify-between">
        <h3 className="text-[18px] mb-[10px] font-semibold leading-[26px]">
          {promotion.title}
        </h3>
        <Link
          className="flex items-center text-base font-medium text-[#3f72e5] leading-[15px] "
          href={promotion.link}
        >
          Shop now
          <MdArrowForwardIos className="h-[12px]" />
        </Link>
      </div>
      <Image
        className="rounded-[15px] h-[120px] w-[120px] "
        src={promotion.image}
        alt={promotion.title}
        height={120}
        width={120}
      />
    </div>
  );
}
