import type { Product } from "@/modules/product/types";
import {
  type AddToCartAction,
  type RemoveFromCartAction,
  type EmptyCartAction,
  CartActionType,
} from "./types";

export const addToCart = (product: Product): AddToCartAction => {
  return {
    type: CartActionType.AddToCart,
    payload: { product },
  };
};

export const removeFromCart = (
  productId: Product["id"]
): RemoveFromCartAction => {
  return {
    type: CartActionType.RemoveFromCart,
    payload: { productId },
  };
};

export const emptyCart = (): EmptyCartAction => {
  return {
    type: CartActionType.EmptyCart,
  };
};
