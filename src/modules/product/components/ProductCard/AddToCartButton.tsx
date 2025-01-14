import { Button } from "@/shared/components/Button";
import type { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faAdd } from "@fortawesome/free-solid-svg-icons/faAdd";

interface Props {
  quantity: number;
  onAddClick: () => void;
  onRemoveClick: () => void;
}

export function AddToCartButton({
  quantity,
  onAddClick,
  onRemoveClick,
}: Props) {
  const handleAddToCartClick: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.stopPropagation();
    onAddClick();
  };

  const handleRemoveFromCartClick: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.stopPropagation();
    onRemoveClick();
  };

  if (quantity < 1) {
    return (
      <Button fullWidth variant="primary" onClick={handleAddToCartClick}>
        Add To Cart
      </Button>
    );
  }
  return (
    <div className="flex items-center justify-end gap-4 border border-blue-500 rounded-lg p-1">
      <Button
        variant="secondary"
        className="flex items-center justify-center w-1/2 border-none"
        onClick={handleRemoveFromCartClick}
      >
        <FontAwesomeIcon icon={quantity === 1 ? faTrash : faMinus} />
      </Button>
      <span className="text-lg font-semibold text-gray-900">{quantity}</span>
      <Button
        variant="secondary"
        className="flex items-center justify-center w-1/2 border-none"
        onClick={handleAddToCartClick}
      >
        <FontAwesomeIcon icon={faAdd} />
      </Button>
    </div>
  );
}
