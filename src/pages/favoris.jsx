import { useContext } from "react";
import { FavorisContext } from "../context/FavorisContext";
import SerieCard from "../components/SerieCard";

function Favoris() {
  const { favoris, retirerFavori } = useContext(FavorisContext);

  if (favoris.length === 0) {
    return (
      <div>
        <h2>Vos favoris</h2>
        <p>Aucune série en favoris pour le moment. Ajoutez-en depuis la page détail !</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Vos favoris</h2>
      <div className="grid">
        {favoris.map((serie) => (
          <div key={serie.id}>
            <SerieCard serie={serie} />
            <button onClick={() => retirerFavori(serie.id)}>
              Retirer des favoris
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoris;
