import { useState, useEffect } from "react";
import SerieCard from "../components/SerieCard";
import Loader from "../components/Loader";
import seriesData from "../data/series.json";
import SearchBar from "../components/SearchBar"; // <-- ajout

function Home() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredSeries, setFilteredSeries] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSeries(seriesData);
      setFilteredSeries(seriesData); // initialise avec toutes les séries
      setLoading(false);
    }, 500);
  }, []);

  const handleSearch = (query) => {
    const results = series.filter((s) =>
      s.titre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSeries(results);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h2>Catalogue des séries sénégalaises</h2>
      <SearchBar onSearch={handleSearch} /> {/* barre de recherche */}
      <div className="grid">
        {filteredSeries.map((serie) => (
          <SerieCard key={serie.id} serie={serie} />
        ))}
      </div>
      <p>{filteredSeries.length} séries trouvées</p>
    </div>
  );
}

export default Home;
