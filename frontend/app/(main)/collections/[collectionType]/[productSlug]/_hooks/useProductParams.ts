import { useQueryParams, withDefault, StringParam } from "use-query-params";

export function useProductParams() {
  const [queryParams, setQueryParams] = useQueryParams({
    variant: withDefault(StringParam, "1"),
  });

  return [queryParams, setQueryParams] as const;
}