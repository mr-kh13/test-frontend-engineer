import type { Product } from "@/modules/product/types";
import {
  type AddToCartAction,
  type RemoveFromCartAction,
  type EmptyCartAction,
  CartActionType,
  CartState,
  SetCartItemsAction,
} from "./types";

export const setCartItems = (items: CartState["items"]): SetCartItemsAction => {
  return {
    type: CartActionType.SetCartItems,
    payload: { items },
  };
};

export const addToCart = (productId: Product["id"]): AddToCartAction => {
  return {
    type: CartActionType.AddToCart,
    payload: { productId },
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
