import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import React from 'react'

export default function CartBreadcrumbs() {
  return (
        <Breadcrumb className="py-[15px]">
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href={`/`} className="capitalize">
                Home
            </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbPage>Cart</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>

    )
}
