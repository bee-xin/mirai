import "../css/Favorites.css";
import { useMovieContext } from "../hooks/useMovieContext";
import MovieCard from "../components/MovieCard";
function Favorite() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>My Favorite List of Movies</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorit-no">
      <h2>No favorite movies yet</h2>
      <p>Add your favorites movies to display it here.</p>
    </div>
  );
}

export default Favorite;
