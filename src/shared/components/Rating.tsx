import { MAX_RATING } from "@/core/constants/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

const SHARED_CLASSNAME = "text-yellow-500 size-4";

interface Props {
  rate: number;
  max?: number;
  count: number;
}

export function Rating({ rate, max = MAX_RATING, count }: Props) {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;
  const emptyStars = max - Math.ceil(rate);
  return (
    <div className="flex items-center space-x-1">
      {/* Full Stars */}
      {Array.from({ length: fullStars }, (_, i) => (
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          className={SHARED_CLASSNAME}
        />
      ))}
      {/* Half Star */}
      {hasHalfStar && (
        <FontAwesomeIcon icon={faStarHalfAlt} className={SHARED_CLASSNAME} />
      )}
      {/* Empty Stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faRegularStar}
          className={`${SHARED_CLASSNAME} text-gray-300`}
        />
      ))}
      {/* Rating Value and Count */}
      <span className="text-gray-600 text-sm font-medium">
        {count !== undefined && ` (${count})`}
      </span>
    </div>
  );
}
