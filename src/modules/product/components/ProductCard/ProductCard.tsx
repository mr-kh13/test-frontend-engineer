import { Button } from "@/shared/components/Button";
import { Currency } from "@/shared/components/Currency";
import { Rating } from "@/shared/components/Rating";
import Image from "next/image";
import type { MouseEventHandler } from "react";
import { Rating as RatingType } from "../../types";

interface Props {
  title: string;
  price: number;
  imageSrc: string;
  rating: RatingType;
  onClick: () => void;
  onAddToCartClick: () => void;
}

export function ProductCard({
  title,
  price,
  imageSrc,
  rating,
  onClick,
  onAddToCartClick,
}: Props) {
  const handleAddToCartClick: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.stopPropagation();
    onAddToCartClick();
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <div
      className="w-full p-4 border rounded-xl flex flex-col overflow-hidden cursor-pointer"
      role="button"
      onClick={handleClick}
    >
      <div className="relative aspect-video mb-2">
        <Image src={imageSrc} alt={title} fill className="object-contain" />
      </div>
      <p className="text-base font-medium text-gray-700 mb-1">{title}</p>
      <div className="w-full flex align-middle justify-between flex-wrap gap-2 mt-auto">
        <p className="text-lg font-semibold text-gray-900">
          <Currency />
          {price}
        </p>
        <Rating rate={rating?.rate} count={rating?.count} />
      </div>
      <Button
        variant="primary"
        fullWidth
        className="mt-2"
        onClick={handleAddToCartClick}
      >
        Add To Cart
      </Button>
    </div>
  );
}
