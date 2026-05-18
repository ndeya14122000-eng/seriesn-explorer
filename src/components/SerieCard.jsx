import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavorisContext } from "../context/FavorisContext";

function SerieCard({ serie }) {
  const { favoris, addFavori, removeFavori } = useContext(FavorisContext);

  // Vérifie si la série est déjà dans les favoris
  const isFavori = favoris.some((f) => f.id === serie.id);

  return (
    <div className="serie-card">
      <img src={serie.image} alt={serie.titre} />
      <h3>{serie.titre}</h3>
      <p>{serie.genre.join(", ")}</p>
      <Link to={`/serie/${serie.id}`}>Voir détails</Link>

      {/* Bouton Favoris */}
      <button onClick={() => (isFavori ? removeFavori(serie.id) : addFavori(serie))}>
        {isFavori ? "❤️ Retirer des favoris" : "🤍 Ajouter aux favoris"}
      </button>
    </div>
  );
}

export default SerieCard;
