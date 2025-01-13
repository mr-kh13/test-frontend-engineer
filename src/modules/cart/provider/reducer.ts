import { CartAction, CartState, CartActionType } from "./types";

export const initialState: CartState = {
  products: [],
};

export function cartReducer(
  state: CartState = initialState,
  action: CartAction
): CartState {
  switch (action.type) {
    case CartActionType.AddToCart: {
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };
    }
    case CartActionType.RemoveFromCart: {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.productId
        ),
      };
    }
    case CartActionType.EmptyCart: {
      return { ...state, products: [] };
    }
    default:
      return state;
  }
}
