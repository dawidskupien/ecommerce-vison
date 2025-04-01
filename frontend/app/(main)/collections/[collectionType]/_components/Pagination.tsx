"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/utils/helpers";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { ProductsByCategory } from "@/graphql/_generated";
import { useProductsParams } from "../../_hooks/useProductsParams";



interface PaginationProps {
    paginationMeta: ProductsByCategory["meta"];
}

export default function Pagination ({ paginationMeta }: PaginationProps ) {
    const [params, setParams] = useProductsParams();
    const pages = Array.from({length: paginationMeta?.pageCount || 1}, (_, i) => i + 1);
    const isLastPage = params.page === pages.length;
    const isFirstPage = params.page === 1;
    
    
    function handleNextPage() {
      if(!isLastPage) {
      setParams({...params, page: params.page += 1})
      }
    }
    
    function handlePrevPage() {
      if(!isFirstPage) {
        setParams({...params, page: params.page -= 1})

      }
    }
    
    
    return <div className="flex text-typographyDark border border-[#d3d3d3] w-fit mx-auto rounded-[6px] text-[13px]">
      <Button variant="unstyled" disabled={isFirstPage} onClick={handlePrevPage} className="flex items-center justify-center size-[40px] disabled:opacity-50" >
        <MdArrowBackIos className="size-[14px]" />
      </Button>
      {pages.map((_, index) => (
        <Button variant="unstyled" key={index} onClick={() => setParams({...params, page: index + 1})} className={cn("w-[20px] h-[40px] flex items-center justify-center mx-[3px] hover:border-b-[#3f72e5] hover:border-b hover:text-[#3f72e5]", {"border-b-[#3f72e5] border-b text-[#3f72e5]": index + 1 === params.page})} >
          {index + 1}
        </Button>
        ))}
      {/* {pages.length > 2 && 
      (
        <>
        <span className="w-[20px] h-[40px] flex items-center justify-center mx-[3px]">...</span>
        <Link  className={cn("w-[20px] h-[40px] flex items-center justify-center mx-[3px] hover:border-b-[#3f72e5] hover:border-b hover:text-[#3f72e5]")} href="" >
          {pages.length}
        </Link>
        </>
      )
      } */}
      <Button variant="unstyled" disabled={isLastPage} onClick={handleNextPage} className={cn("flex items-center justify-center size-[40px] disabled:opacity-50")}>
        <MdArrowForwardIos className="size-[14px]" />
      </Button>
    </div>
    }