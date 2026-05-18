import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // envoie la recherche au parent (Home.jsx)
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher une série..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
