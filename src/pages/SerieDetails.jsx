import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import seriesData from "../data/series.json";
import { FavorisContext } from "../context/FavorisContext";

function SerieDetails() {
  const { id } = useParams();
  const serie = seriesData.find((s) => s.id === parseInt(id));
  const { favoris, toggleFavoris } = useContext(FavorisContext);

  if (!serie) {
    return <p>Série introuvable.</p>;
  }

  const isFavori = favoris.some((f) => f.id === serie.id);

  return (
    <div className="details">
      <h2>{serie.titre}</h2>
      <img src={serie.image} alt={serie.titre} />

      <p><strong>Acteurs :</strong> {serie.acteurs.join(", ")}</p>
      <p><strong>Note :</strong> {"★★★★★"}</p>

      <button onClick={() => toggleFavoris(serie)}>
        {isFavori ? "Retirer des favoris ❤️" : "Ajouter aux favoris 🤍"}
      </button>

      {/* Favoris affichés sous l’image */}
      <div className="favoris-under-image">
        <h3>Mes Favoris</h3>
        {favoris.length === 0 ? (
          <p>Aucun favori pour l’instant.</p>
        ) : (
          <ul>
            {favoris.map((f) => (
              <li key={f.id}>{f.titre}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SerieDetails;
