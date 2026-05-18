import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FavorisContext } from "../context/FavorisContext";

function Navbar() {
  const { favoris } = useContext(FavorisContext);

  return (
    <nav className="navbar">
      <h1>series SN explorer</h1>
      <ul>
        <li>
          <NavLink to="/" end>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/favoris">
            Favoris <span className="badge">{favoris.length}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
