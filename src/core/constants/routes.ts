import type { Product } from "@/modules/product/types";

export const ROUTES = {
  homepage: "/",
  product: {
    details: (productId: Product["id"]) => `/products/${productId}`,
  },
};
