function StarRating({ note }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= note ? "gold" : "lightgray" }}>
        ★
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
}

export default StarRating;
