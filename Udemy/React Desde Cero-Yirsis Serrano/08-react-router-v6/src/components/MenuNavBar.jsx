import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const MenuNavBar = () => {
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({type: authTypes.logout});
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid me-auto">
          <NavLink className="navbar-brand" to="/">
            The Simpsons CATALOG
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-0 mb-lg-0">
              <li className="nav-item">
                <NavLink exact className={({ isActive }) =>`nav-link ${isActive ? "active text-info" : ""}`} aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact  className={({ isActive }) =>`nav-link ${isActive ? "active text-info" : ""}`} aria-current="page"   to="/character">
                  Characters
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className={({ isActive }) =>`nav-link ${isActive ? "active text-info" : ""}`} aria-current="page"   to="/men">
                  Men
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink   className={({ isActive }) =>`nav-link ${isActive ? "active text-info" : ""}`} aria-current="page"   to="/women">
                  Women
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink   className={({ isActive }) =>`nav-link ${isActive ? "active text-info" : ""}`} aria-current="page"   to="/search">
                  Search
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-dark" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuNavBar;
