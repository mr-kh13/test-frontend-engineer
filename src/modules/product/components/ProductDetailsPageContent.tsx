"use client";
import { useProduct } from "@/data/useProduct";
import { Product } from "../types";
import Image from "next/image";
import { Currency } from "@/shared/components/Currency";
import { Rating } from "@/shared/components/Rating";
import Link from "next/link";
import { ROUTES } from "@/core/constants/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { AddToCartButton } from "./ProductCard/AddToCartButton";
import { useCart } from "@/modules/cart/provider/CartProvider";

interface Props {
  productId: Product["id"];
}

export default function ProductDetailsPageContent({ productId }: Props) {
  const { data: product, isLoading, isError } = useProduct({ productId });
  const { addToCart, getQuantity, removeFromCart } = useCart();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container max-w-3xl mx-auto flex flex-col">
      <Link
        href={ROUTES.homepage}
        className="text-blue-500 text-base font-normal mb-6"
      >
        <FontAwesomeIcon icon={faChevronLeft} /> Back
      </Link>
      <div className="flex flex-wrap md:flex-nowrap gap-3">
        <div className="w-full md:flex-1">
          <h3 className="text-lg font-bold mb-2 text-gray-900">
            {product?.title}
          </h3>
          <p className="text-base font-normal text-gray-700">
            {product?.description}
          </p>
        </div>
        <div className="w-full md:basis-2/4 md:border md:p-4 md:rounded-xl">
          <div className="relative aspect-video mb-2">
            <Image
              src={product?.image}
              alt={product?.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full flex align-middle justify-between flex-wrap gap-2 mt-auto">
            <p className="text-lg font-semibold text-gray-900">
              <Currency />
              {product.price}
            </p>
            <Rating rate={product.rating?.rate} count={product.rating?.count} />
          </div>
          <AddToCartButton
            quantity={getQuantity(productId)}
            onAddClick={() => addToCart(productId)}
            onRemoveClick={() => removeFromCart(productId)}
          />
        </div>
      </div>
    </div>
  );
}
