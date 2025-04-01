import React from 'react'
import Link from 'next/link'

export default function MobileBar({data}: any) {

  return (
    <div className='md:hidden flex list-outside list-disc bg-[#919999] overflow-x-auto h-[40px]'>
      <ul className='flex items-center px-[15px]'>
        {data.map((item: any) => (
          <li key={item.id} className='flex items-center text-white  [&:not(:first-child)]:before:mr-[11px] [&:not(:first-child)]:before:h-[4px] [&:not(:first-child)]:ml-[11px] before:w-[4px] before:opacity-20 before:bg-white before:rounded-full relative text-nowrap text-sm'>
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
        </ul>
    </div>
  )
}
