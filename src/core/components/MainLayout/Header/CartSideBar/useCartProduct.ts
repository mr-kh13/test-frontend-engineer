import { useProducts } from "@/data/useProducts";
import { Product } from "@/modules/product/types";
import { useCallback } from "react";

export function useCartProduct() {
  const { data: products } = useProducts();

  const getProduct = useCallback(
    (productId: Product["id"]) => {
      if (!products || products?.length < 1) return null;
      return products.find((item) => item.id === productId);
    },
    [products]
  );

  return { getProduct };
}
