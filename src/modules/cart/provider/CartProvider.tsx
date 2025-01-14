"use client";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { cartReducer, initialState } from "./reducer";
import type { CartState } from "./types";
import { addToCart, removeFromCart, emptyCart, setCartItems } from "./actions";
import type { Product } from "@/modules/product/types";
import { useProducts } from "@/data/useProducts";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { getTotal as _getTotal } from "./getTotal";

interface CartContextType extends Pick<CartState, "items"> {
  addToCart: (productId: Product["id"]) => void;
  removeFromCart: (productId: Product["id"]) => void;
  getQuantity: (productId: Product["id"]) => number;
  emptyCart: () => void;
  getTotal: () => number;
}

const CartContext = createContext<CartContextType>({
  items: initialState.items,
  addToCart: () => null,
  removeFromCart: () => null,
  getQuantity: () => 0,
  emptyCart: () => null,
  getTotal: () => 0,
});

interface Props {
  children: ReactNode;
}

export default function CartProvider({ children }: Props) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { data: products } = useProducts();
  const [storedValue, setStoredValue] = useLocalStorage<CartState["items"]>({
    key: "my-shop-cart",
    initialValue: state.items,
  });

  useEffect(() => {
    if (!storedValue) return;
    dispatch(setCartItems(storedValue));
  }, []);

  useEffect(() => {
    setStoredValue(state.items);
  }, [state.items]);

  const getQuantity = useCallback<CartContextType["getQuantity"]>(
    (productId) => {
      return state.items?.[productId] ?? 0;
    },
    [state.items]
  );

  const getTotal = useCallback(() => {
    return _getTotal(products, state.items);
  }, [products, state.items]);

  const value = useMemo<CartContextType>(() => {
    return {
      items: state.items,
      addToCart: (productId) => dispatch(addToCart(productId)),
      removeFromCart: (productId) => dispatch(removeFromCart(productId)),
      emptyCart: () => dispatch(emptyCart()),
      getQuantity,
      getTotal,
    };
  }, [getQuantity, getTotal, state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartContext");
  }
  return context;
}
