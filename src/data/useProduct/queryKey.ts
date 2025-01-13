import { createUseQueryKey } from "../utils";
import type { FetchProductParams } from "./types";

export const getUseProductQueryKey = (params: FetchProductParams) =>
  createUseQueryKey("/products/details", params);
