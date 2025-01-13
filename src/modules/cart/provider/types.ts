import type { Product } from "@/modules/product/types";

export interface CartState {
  products: Product[];
}

export enum CartActionType {
  AddToCart = "ADD_TO_CART",
  RemoveFromCart = "REMOVE_FROM_CART",
  EmptyCart = "EMPTY_CART",
}

export interface AddToCartAction {
  type: CartActionType.AddToCart;
  payload: {
    product: Product;
  };
}

export interface RemoveFromCartAction {
  type: CartActionType.RemoveFromCart;
  payload: {
    productId: Product["id"];
  };
}

export interface EmptyCartAction {
  type: CartActionType.EmptyCart;
}

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | EmptyCartAction;
