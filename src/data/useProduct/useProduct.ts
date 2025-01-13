import { useQuery } from "@tanstack/react-query";
import { Options, FetchProductParams } from "./types";
import { fetchProduct } from "./queryFunctions";
import { getUseProductQueryKey } from "./queryKey";

export function useProduct(params: FetchProductParams, options: Options = {}) {
  return useQuery({
    ...options,
    queryKey: getUseProductQueryKey(params),
    queryFn: () => fetchProduct(params),
  });
}
