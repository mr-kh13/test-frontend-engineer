"use client";
import { useCart } from "@/modules/cart/provider/CartProvider";
import { Button } from "@/shared/components/Button";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { createPortal } from "react-dom";

const CartSideBar = dynamic(() =>
  import("./CartSideBar").then((res) => res.CartSideBar)
);

export function CartButton() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();
  return (
    <div className="ml-auto">
      <Button
        variant="secondary"
        className="text-gray-900 relative"
        iconButton
        size="lg"
        onClick={() => setIsCartOpen(true)}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        {items && Object.entries(items)?.length > 0 && (
          <span className="bg-red-500 text-white rounded-full text-xs max-w-12 min-w-4 min-h-4 px-0.5 py-0.5 absolute top-0 right-0">
            {Object.entries(items)?.length}
          </span>
        )}
      </Button>
      {isCartOpen &&
        createPortal(
          <CartSideBar onClose={() => setIsCartOpen(false)} />,
          document.body
        )}
    </div>
  );
}
