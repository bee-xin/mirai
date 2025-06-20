import "../css/MovieCard.css";
const MovieCard = ({ movie }) => {
  const onFavorite = () => {
    alert("Clicked");
  };
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavorite}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 4.06 13.5 5.5C14.09 4.06 15.76 3 17.5 3C20.58 3 23 5.42 23 8.5C23 13.5 15 21 15 21H12Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};
export default MovieCard;
