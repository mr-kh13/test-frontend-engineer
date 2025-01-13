import type { UseQueryOptions } from "@tanstack/react-query";
import type { QueryParams } from "../apiClient";
import { Product } from "@/modules/product/types";

export type FetchProductsResult = Array<Product>;

export type Options = Omit<
  UseQueryOptions<FetchProductsResult, unknown, FetchProductsResult>,
  "queryKey" | "queryFn"
>;

export interface FetchProductsParams extends QueryParams {
  limit: number;
}
