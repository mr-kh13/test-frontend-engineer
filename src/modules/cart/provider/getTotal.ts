import { Product } from "@/modules/product/types";
import { CartState } from "./types";

// TODO: Write a test for getTotal
export const getTotal = (
  products: Product[] | undefined | null,
  cartItems: CartState["items"]
) => {
  if (!products) return 0;
  return products
    .filter((item) => Object.keys(cartItems).includes(item.id.toString()))
    .reduce((acc, item) => {
      return acc + item.price * cartItems[item.id];
    }, 0);
};
