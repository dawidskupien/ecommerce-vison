"use client"

import { client } from "@/graphql/client";
import { useQuery, useSuspenseQuery, UseSuspenseQueryResult } from "@tanstack/react-query";
import { useGetHeaderQuery, GetHeaderQuery, ComponentHeaderAnnouncments, Navigation, SubNavigation as NavigationTopBar } from "@/graphql/_generated";


export function getHeader() {
    const { data, isError, isLoading } = useQuery({
        queryKey: useGetHeaderQuery.getKey(),
        queryFn: useGetHeaderQuery.fetcher(client, {}),
    });

    const announcements = data?.announcementBar?.data?.attributes?.announcements as ComponentHeaderAnnouncments[] | undefined;
    const navigationData = data?.navigation?.data?.attributes as Navigation | undefined;
    const navigationTopBarData = data?.subNavigation?.data?.attributes as NavigationTopBar | undefined;

    const mobileMenuData = {
        navigationData,
        navigationTopBarData,
    };
    
    

    return { data: {announcements, navigationData, navigationTopBarData, mobileMenuData}, isLoading, isError } as const;
}