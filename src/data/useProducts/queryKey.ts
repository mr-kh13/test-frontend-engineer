import { createUseQueryKey } from "../utils";
import type { FetchProductsParams } from "./types";

export const getUseProductsQueryKey = (params?: FetchProductsParams) =>
  createUseQueryKey("/products", params);
