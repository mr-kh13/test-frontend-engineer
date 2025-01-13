"use client";
import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { cartReducer, initialState } from "./reducer";
import type { CartState } from "./types";
import { addToCart, removeFromCart, emptyCart } from "./actions";
import type { Product } from "@/modules/product/types";

interface CartContextType extends Pick<CartState, "products"> {
  addToCart: (product: Product) => void;
  removeFromCart: (productId: Product["id"]) => void;
  emptyCart: () => void;
}

const CartContext = createContext<CartContextType>({
  products: [],
  addToCart: () => null,
  removeFromCart: () => null,
  emptyCart: () => null,
});

interface Props {
  children: ReactNode;
}

export default function CartProvider({ children }: Props) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = useMemo<CartContextType>(() => {
    return {
      products: state.products,
      addToCart: (product) => dispatch(addToCart(product)),
      removeFromCart: (productId) => dispatch(removeFromCart(productId)),
      emptyCart: () => dispatch(emptyCart()),
    };
  }, [state.products]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartContext");
  }
  return context;
}
