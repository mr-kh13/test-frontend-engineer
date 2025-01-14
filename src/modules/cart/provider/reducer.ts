import { CartAction, CartState, CartActionType } from "./types";

export const initialState: CartState = {
  items: {},
};

export function cartReducer(
  state: CartState = initialState,
  action: CartAction
): CartState {
  switch (action.type) {
    case CartActionType.AddToCart: {
      const newItems = { ...state.items };
      const { productId } = action.payload;

      if (productId in newItems) {
        newItems[productId] += 1;
      } else {
        newItems[productId] = 1;
      }

      return {
        ...state,
        items: newItems,
      };
    }
    case CartActionType.RemoveFromCart: {
      const newItems = { ...state.items };
      const { productId } = action.payload;

      if (productId in newItems && newItems[productId] > 1) {
        newItems[productId] -= 1;
      } else {
        delete newItems[productId];
      }

      return {
        ...state,
        items: newItems,
      };
    }
    case CartActionType.EmptyCart: {
      return { ...state, items: [] };
    }
    case CartActionType.SetCartItems: {
      return { ...state, items: action.payload.items };
    }
    default:
      return state;
  }
}
