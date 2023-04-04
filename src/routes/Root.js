import { Link, Outlet } from "react-router-dom";
import { resetDisplay } from "../PokedexDisplay";

export default function Root() {
  return (
    <header>
      <p>Pokedex</p>
      <nav className="navbar">
        <Link to="/" className="navbar-link" onClick={resetDisplay}>
          Home
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </header>
  );
}
