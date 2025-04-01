import { UploadFileEntityResponse, useGetCategoriesQuery, useGetCategoryQuery } from "@/graphql/_generated";
import { Maybe } from "graphql/jsutils/Maybe";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/graphql/client";
import UseGetHeaderData from "../_hooks/UseGetHeaderData";

interface HeaderProps {
    pageType: string;
    collectionType: string | string[];
}

export default function Header({pageType, collectionType}: HeaderProps) {
    const { data } = useGetCategoryQuery(client,{ slug: collectionType as string },{ enabled: pageType === "categoryPage" });
    const category = data?.categories?.data[0]?.attributes;

    const [title, description] = UseGetHeaderData(pageType, category );

    return (
        <div className="template-header pt-[15px] pb-[1.875rem]">
            <h1 className="font-semibold text-typographyDark leading-[36px] md:leading-[44px] lg:leading-[50px] text-2xl md:text-[36px] lg:text-[42px]  mb-[10px]  md:mb-[0.625rem]">
                {title}
            </h1>
            <p className="md:text-lg text-[15px] text-typographyDark leading-[24px]">{description}</p>
            {pageType === "allPage" && <CategoryList  />}
        </div>
    );
  }
  
  function CategoryList() {
    const { data } = useGetCategoriesQuery(client, {});
    return (
      <div className="flex mt-[20px] gap-2 overflow-auto pb-3.5 w-[calc(100%+15px)] ">
        {data?.categories?.data?.map((category) => (
          <Category
            key={category.id}
            image={category?.attributes?.image as Maybe<UploadFileEntityResponse>}
            name={category?.attributes?.name}
            slug={category?.attributes?.slug}
          />
        ))}
      </div>
    );
  }
  
  interface CategoryProps extends React.ComponentProps<"li"> {
    image: Maybe<UploadFileEntityResponse>;
    name: string | undefined;
    slug: string | undefined;
  }
  
  const Category = ({ image, name, slug }: CategoryProps) => {
    return (
        <Link className=" bg-white h-[42px] rounded-[50px] text-[15px] font-medium leading-[24px] p-[4px] shadow-md flex items-center min-w-fit " href={`/collections/${slug}`}>
          <Image
              className="size-[42px] aspect-square mr-[5px] rounded-[500px]"
              width={50}
              height={50}
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image?.data?.attributes?.url}`}
              alt={image?.data?.attributes?.alternativeText as string}
            />
            <span className="px-[10px] py-[8px] text-typographyDark">{name}</span>
        </Link>
    );
  };