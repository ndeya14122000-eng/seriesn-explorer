import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import seriesData from "../data/series.json";
import { FavorisContext } from "../context/FavorisContext";
import StarRating from "../components/StarRating";

function Detail() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);
  const { favoris, ajouterFavori, retirerFavori } = useContext(FavorisContext);

  useEffect(() => {
    // Recherche de la série par ID
    const foundSerie = seriesData.find((s) => s.id === parseInt(id));
    setSerie(foundSerie || null);
  }, [id]);

  if (!serie) {
    return (
      <div>
        <h2>Série introuvable</h2>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    );
  }

  const estFavori = favoris.some((s) => s.id === serie.id);

  return (
    <div>
      <h2>{serie.titre}</h2>
      <img src={serie.image} alt={serie.titre} />
      <p><strong>Synopsis :</strong> {serie.synopsis}</p>
      <p><strong>Genre :</strong> {serie.genre.join(", ")}</p>
      <p><strong>Chaîne :</strong> {serie.chaine}</p>
      <p><strong>Année :</strong> {serie.annee}</p>
      <p><strong>Saisons :</strong> {serie.saisons}</p>
      <p><strong>Acteurs :</strong> {serie.acteurs.join(", ")}</p>
      <StarRating note={serie.note} />

      {estFavori ? (
        <button onClick={() => retirerFavori(serie.id)}>
          Retirer des favoris
        </button>
      ) : (
        <button onClick={() => ajouterFavori(serie)}>
          Ajouter aux favoris
        </button>
      )}

      <br />
      <Link to="/">← Retour à l'accueil</Link>
    </div>
  );
}

export default Detail;
