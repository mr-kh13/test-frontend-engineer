import { useCart } from "@/modules/cart/provider/CartProvider";
import { Button } from "@/shared/components/Button";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCartProduct } from "./useCartProduct";
import { CartItem } from "./CartItem";
import { Currency } from "@/shared/components/Currency";
import { Price } from "@/shared/components/Price";

interface Props {
  onClose: () => void;
}

/*
 * Note: A shared SideBar component could have been created.
 * However, due to time constraints, it was left as is.
 */

export function CartSideBar({ onClose }: Props) {
  const { items, addToCart, removeFromCart, getTotal } = useCart();
  const { getProduct } = useCartProduct();
  return (
    <>
      {/* Remove body scroll */}
      <style jsx global>{`
        body {
          overflow: hidden;
        }
      `}</style>
      <aside className="flex flex-col w-full h-screen bg-white fixed top-0 left-0 z-50 md:left-auto md:right-0 md:max-w-sm sm:shadow-xl">
        <div className="w-full border-b flex items-center justify-between py-2 px-4">
          <span className="text-lg font-medium text-gray-900">Cart</span>
          <Button
            iconButton
            size="lg"
            variant="primary"
            onClick={() => onClose()}
          >
            <FontAwesomeIcon icon={faClose} />
          </Button>
        </div>
        <div className="w-full p-4 overflow-auto flex-1">
          {Object.entries(items).length < 1 ? (
            <span>Your cart is empty</span>
          ) : (
            Object.entries(items).map(([productId, quantity]) => {
              const product = getProduct(Number(productId));
              if (!product) {
                return null;
              }
              return (
                <CartItem
                  key={productId}
                  quantity={quantity}
                  title={product?.title}
                  price={product?.price}
                  imageSrc={product?.image}
                  onAddClick={() => addToCart(Number(productId))}
                  onRemoveClick={() => removeFromCart(Number(productId))}
                />
              );
            })
          )}
        </div>
        <div className="p-4 border-t">
          <p className="text-lg font-bold mb-2 text-right text-gray-700">
            <span>Total:</span> <Currency />
            <Price>{getTotal()}</Price>
          </p>
          <Button fullWidth variant="primary">
            Go To Checkout
          </Button>
        </div>
      </aside>
    </>
  );
}
