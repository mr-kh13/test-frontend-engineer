import { useQuery } from "@tanstack/react-query";
import { Options, FetchProductsParams } from "./types";
import { fetchProducts } from "./queryFunctions";
import { getUseProductsQueryKey } from "./queryKey";

export function useProducts(
  params?: FetchProductsParams,
  options: Options = {}
) {
  return useQuery({
    ...options,
    queryKey: getUseProductsQueryKey(params),
    queryFn: () => fetchProducts(params),
  });
}
