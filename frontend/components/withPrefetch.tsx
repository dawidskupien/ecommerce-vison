// lib/withPrefetch.tsx
// import React, { FC } from "react";
// import { HydrationBoundary, DehydratedState, dehydrate, QueryClient } from "@tanstack/react-query";
// import { getQueryClient } from "@/providers/query-client-helper";

// // Type for the prefetch function, which accepts a QueryClient instance and returns a Promise
// type PrefetchFn = (queryClient: QueryClient) => Promise<void>;

// // HOC type: takes a component and a prefetch function, returns an async React component
// export function withPrefetch<P>(
//   PageComponent: FC<P>,
//   prefetchFn?: PrefetchFn
// ) {
//   const WrappedComponent: FC<P> = async (props: P) => {
//     const queryClient = getQueryClient();

//     // Prefetch data if a prefetch function is provided
//     if (prefetchFn) {
//       await prefetchFn(queryClient);
//     }

//     // Dehydrate the query client state for client-side hydration
//     const dehydratedState: DehydratedState = dehydrate(queryClient);

//     return (
//       <HydrationBoundary state={dehydratedState}>
//         <PageComponent {...props} />
//       </HydrationBoundary>
//     );
//   };

//   return WrappedComponent;
// }
