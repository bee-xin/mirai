const API_KEY = '78fff6459b408986639bcc8f349688df';
const BASE_URL = 'https://api.themoviedb.org/3'; // ✅ Correct API base URL

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json(); // ✅ await missing before
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    ); // ✅ Corrected template string syntax
    const data = await response.json();
    return data.results;
};
