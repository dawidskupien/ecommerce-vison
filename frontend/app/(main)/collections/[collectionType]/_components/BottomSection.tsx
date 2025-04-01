
import React from 'react'
import Link from 'next/link'
import { MdArrowForwardIos } from 'react-icons/md'
import image1 from "@/assets/images/img-10.webp"
import image2 from "@/assets/images/img12.webp"
import { StaticImageData } from 'next/image'
import Image from 'next/image'

export default function SeoText () {
    const text = {
      title: "Use it to add SEO text",
      description: "Due to high demand, occasionally some of our products do go out of stock. We are constantly monitoring our stock levels, and we usually expect to replenish any product line within a couple of weeks. If you have placed a pre-order for an item that is out of stock and it looks like it will take longer than expected to get it to you.",
    }

    const mediaBlocks = [
        {
            title: "Create an easy-to-use experience",
            url: "speakers",
            linkText: "Sound systems",
            image: image1,
        },
        {
            title: "The best in home entertainment",
            url: "doorbells",
            linkText: "Shop now",
            image: image2,
        },
    ]

    return (
      <>
      <div className='grid grid-cols-[repeat(2,minmax(92.5%,1fr))] md:grid-cols-2 overflow-auto gap-[10px] md:gap-[30px]'>
        {mediaBlocks.map((block, index) => (
            <MediaBlock key={index} block={block} />
        ))}
      </div>
      <div className="py-[50px] text-typographyDark text-center max-w-[800px] mx-auto">
        <h3 className="mb-5 font-semibold text-xl lg:text-2xl">{text.title}</h3>
        <p className="text-base mb-[35px]">{text.description}</p>
      </div>
      </>
    )
  }


  interface MediaBlockProps {
    block: {title: string, image: StaticImageData, url: string, linkText: string}
  }

  function MediaBlock ({block}: MediaBlockProps) {
    return (
        <Link href={block.url}>
            <div  className="group relative flex flex-col justify-end h-[300px] bg-black rounded-2xl overflow-hidden">
                <Image src={block.image} height={300} width={300} alt="dupa" className='w-full h-full opacity-70 absolute rounded-2xl object-cover  duration-1000 group-hover:scale-110'/>
                <div className='p-[25px] text-white z-10 '>
                    <h4 className='mb-5 text-2xl md:text-3xl font-semibold leading-[30px] md:leading-[40px] lg:max-w-[60%] '>{block.title}</h4>
                    <div className='flex items-center gap-1'>
                        <span className='text-base font-roboto font-medium'>{block.linkText}</span>
                        <MdArrowForwardIos className='h-3' />
                    </div>
                </div>
            </div>
        </Link>
    )
  }
  
