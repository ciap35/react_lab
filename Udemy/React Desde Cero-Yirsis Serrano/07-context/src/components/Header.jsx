import React from 'react';
import '../stylesheets/Header.css'; // Asegúrate de crear este archivo y agregar los estilos CSS
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
<nav className="navbar navbar-expand-md bg-dark navbar-dark">
  {/* Brand */}
  <a className="navbar-brand" href="/">
    {""}CIAP{".dev"}
  </a>
  {/* Toggler/collapsibe Button */}
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#collapsibleNavbar"
  >
    <span className="navbar-toggler-icon" />
  </button>
  {/* Navbar links */}
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link className="nav-link" to="/">
          home
        </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/about">
          about
        </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/experience">
          experience
        </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/skills">
          Skills
        </Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  );
};
export default Header;