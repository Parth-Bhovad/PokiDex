import { useState } from "react";

const useFavorites = () => {
  // Initialize from localStorage or empty array
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const addFavorite = (pokemonId) => {
    setFavorites((prev) => {
      if (!prev.includes(pokemonId)) {
        const updated = [...prev, pokemonId];
        localStorage.setItem("favorites", JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  };

  const removeFavorite = (pokemonId) => {
    setFavorites((prev) => {
      const updated = prev.filter((id) => id !== pokemonId);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (pokemonId) => favorites.includes(pokemonId);

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

export default useFavorites;