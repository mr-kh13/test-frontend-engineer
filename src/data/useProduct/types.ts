import type { UseQueryOptions } from "@tanstack/react-query";
import type { QueryParams } from "../apiClient";
import { Product } from "@/modules/product/types";

export type FetchProductResult = Product;

export type Options = Omit<
  UseQueryOptions<FetchProductResult, unknown, FetchProductResult>,
  "queryKey" | "queryFn"
>;

export interface FetchProductParams extends QueryParams {
  productId: Product["id"];
}
