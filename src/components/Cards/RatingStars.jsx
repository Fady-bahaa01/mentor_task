export default function RatingStars() {
  return (
    <div className="rating w-[90px] h-[16px] mb-2">
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star bg-[#EBC305]"
        aria-label="1 star"
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star bg-[#EBC305]"
        aria-label="2 star"
        defaultChecked
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star bg-[#EBC305]"
        aria-label="3 star"
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star bg-[#EBC305]"
        aria-label="4 star"
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star bg-[#EBC305]"
        aria-label="5 star"
      />
    </div>
  );
}
