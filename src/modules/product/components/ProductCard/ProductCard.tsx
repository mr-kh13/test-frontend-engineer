import { Currency } from "@/shared/components/Currency";
import { Rating } from "@/shared/components/Rating";
import Image from "next/image";
import { Rating as RatingType } from "../../types";
import { AddToCartButton } from "./AddToCartButton";
import { Price } from "@/shared/components/Price";

interface Props {
  title: string;
  price: number;
  quantity: number;
  imageSrc: string;
  rating: RatingType;
  onClick: () => void;
  onAddClick: () => void;
  onRemoveClick: () => void;
}

export function ProductCard({
  title,
  price,
  imageSrc,
  rating,
  quantity,
  onClick,
  onAddClick,
  onRemoveClick,
}: Props) {
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
          <Price>{price}</Price>
        </p>
        <Rating rate={rating?.rate} count={rating?.count} />
      </div>
      <div className="mt-2">
        <AddToCartButton
          quantity={quantity}
          onAddClick={onAddClick}
          onRemoveClick={onRemoveClick}
        />
      </div>
    </div>
  );
}
