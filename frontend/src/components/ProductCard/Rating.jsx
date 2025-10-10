const Rating = ({ rating }) => {
  rating = rating * 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="rating">
      {Array(fullStars).fill(<span className="star filled">★</span>)}
      {halfStar && <span className="star half-filled">★</span>}
      {Array(emptyStars).fill(<span className="star empty">★</span>)}
      <span className="rating-value">{rating}</span>
    </div>
  );
};

export default Rating;