/* eslint-disable react/prop-types */
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

function StarRating({ rating }) {
  const roundedRating = Math.round(rating * 2) / 2; // Round to the nearest 0.5
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar  key={`full-${index}`} size={18} className="text-yellow-400 fill-yellow-400" />
      ))}

      {hasHalfStar && (
        <FaRegStarHalfStroke  key="half-star" size={18} className="text-yellow-400 fill-yellow-400" />
      )}

      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} size={18} className="text-gray-300" />
      ))}
    </div>
  );
}

export default StarRating;
