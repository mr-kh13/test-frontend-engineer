import { get } from "../apiClient";
import { FetchProductParams, FetchProductResult } from "./types";

export const fetchProduct = async (params: FetchProductParams) => {
  return get<FetchProductResult>(`/products/${params.productId}`);
};
