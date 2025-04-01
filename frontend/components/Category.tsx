import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Category({category}: {category: any}) {
  return (
    <Link
    className="collection-category transition ease-out duration-300 hover:translate-y-[-10px] rounded-2xl w-full bg-white p-5 shadow-lg"
    href={`/collections/${category.attributes?.slug}`}
    key={category.attributes?.name}
  >
    <div className="flex flex-col justify-center items-center ">
      <Image
        className="h-full max-h-[31.75rem]"
        height={468}
        width={400}
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${category.attributes?.image?.data?.attributes?.url}`}
        alt={
          category.attributes?.image?.data?.attributes
            ?.alternativeText as string
        }
      />
      <h2>{category.attributes?.name}</h2>
    </div>
  </Link>
  )
}
