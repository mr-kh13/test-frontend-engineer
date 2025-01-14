import { Button } from "@/shared/components/Button";
import { Currency } from "@/shared/components/Currency";
import { Price } from "@/shared/components/Price";
import { faAdd } from "@fortawesome/free-solid-svg-icons/faAdd";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  price: number;
  quantity: number;
  imageSrc: string;
  onAddClick: () => void;
  onRemoveClick: () => void;
}
export function CartItem({
  imageSrc,
  onAddClick,
  onRemoveClick,
  price,
  quantity,
  title,
}: Props) {
  return (
    <div
      className="w-full p-4 border rounded-xl flex overflow-hidden cursor-pointer"
      role="button"
    >
      <div className="relative w-32 h-32">
        <Image src={imageSrc} alt={title} fill className="object-contain" />
      </div>
      <div className="flex-1">
        <p className="text-base font-medium text-gray-700 mb-1 text-right">
          {title}
        </p>
        <p className="text-lg font-semibold text-gray-900 mb-3 text-right">
          <Currency />
          <Price>{price * quantity}</Price>
        </p>
        <div className="flex items-center justify-end gap-4">
          <Button
            variant="secondary"
            className="flex items-center justify-center w-10 h-10"
            onClick={() => onRemoveClick()}
          >
            <FontAwesomeIcon icon={quantity === 1 ? faTrash : faMinus} />
          </Button>
          <span className="text-lg font-semibold text-gray-900">
            {quantity}
          </span>
          <Button
            variant="secondary"
            className="flex items-center justify-center w-10 h-10"
            onClick={() => onAddClick()}
          >
            <FontAwesomeIcon icon={faAdd} />
          </Button>
        </div>
      </div>
    </div>
  );
}
