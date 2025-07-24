import { createContext, useState, useEffect } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavs = localStorage.getItem('favorites')
    if (storedFavs) setFavorites(JSON.parse(storedFavs))
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev
      return [...prev, movie]
    })
  }

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId))
  }

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId)
  }

  const value = {
    favorites,
    setFavorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  }

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}
