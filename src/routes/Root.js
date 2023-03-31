import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <header>
      <h1>Pokedex</h1>
      <nav className="navbar">
        <Link to="/" className="navbar-link">
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
