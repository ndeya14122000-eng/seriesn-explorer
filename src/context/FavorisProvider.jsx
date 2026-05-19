import { useState } from "react";
import { FavorisContext } from "./FavorisContext.jsx";

export function FavorisProvider({ children }) {
  const [favoris, setFavoris] = useState([]);

  const addFavori = (serie) => {
    setFavoris((prevFavoris) => {
      if (prevFavoris.some((f) => f.id === serie.id)) {
        return prevFavoris;
      }
      return [...prevFavoris, serie];
    });
  };

  const removeFavori = (id) => {
    setFavoris((prevFavoris) => prevFavoris.filter((serie) => serie.id !== id));
  };

  const toggleFavoris = (serie) => {
    setFavoris((prevFavoris) =>
      prevFavoris.some((f) => f.id === serie.id)
        ? prevFavoris.filter((f) => f.id !== serie.id)
        : [...prevFavoris, serie]
    );
  };

  const retirerFavori = removeFavori;
  const ajouterFavori = addFavori;

  return (
    <FavorisContext.Provider
      value={{ favoris, addFavori, ajouterFavori, removeFavori, retirerFavori, toggleFavoris }}
    >
      {children}
    </FavorisContext.Provider>
  );
}
