import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        Logo
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;
