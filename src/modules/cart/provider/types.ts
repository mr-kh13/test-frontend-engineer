import type { Product } from "@/modules/product/types";

export interface CartProduct {
  id: Product["id"];
  quantity: number;
}

export interface CartState {
  items: Record<CartProduct["id"], CartProduct["quantity"]>;
}

export enum CartActionType {
  SetCartItems = "SET_CART_ITEMS",
  AddToCart = "ADD_TO_CART",
  RemoveFromCart = "REMOVE_FROM_CART",
  EmptyCart = "EMPTY_CART",
}

export interface SetCartItemsAction {
  type: CartActionType.SetCartItems;
  payload: {
    items: CartState["items"];
  };
}

export interface AddToCartAction {
  type: CartActionType.AddToCart;
  payload: {
    productId: CartProduct["id"];
  };
}

export interface RemoveFromCartAction {
  type: CartActionType.RemoveFromCart;
  payload: {
    productId: CartProduct["id"];
  };
}

export interface EmptyCartAction {
  type: CartActionType.EmptyCart;
}

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | EmptyCartAction
  | SetCartItemsAction;
