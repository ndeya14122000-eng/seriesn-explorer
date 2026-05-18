import { createContext, useState } from "react";

export const FavorisContext = createContext();

export function FavorisProvider({ children }) {
  const [favoris, setFavoris] = useState([]);

  const addFavori = (serie) => {
    setFavoris([...favoris, serie]);
  };

  const removeFavori = (id) => {
    setFavoris(favoris.filter((serie) => serie.id !== id));
  };

  return (
    <FavorisContext.Provider value={{ favoris, addFavori, removeFavori }}>
      {children}
    </FavorisContext.Provider>
  );
}
