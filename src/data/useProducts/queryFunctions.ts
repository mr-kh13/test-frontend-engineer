import { get } from "../apiClient";
import { FetchProductsParams, FetchProductsResult } from "./types";

export const fetchProducts = async (params?: FetchProductsParams) => {
  return get<FetchProductsResult>("/products", params);
};
