import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const MenuNavBar = () => {
  const history = useHistory();
  const {dispatch} = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({type: authTypes.logout});
    history.push("/login");
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
                <NavLink exact activeClassName="active text-info" className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active text-info" className="nav-link" to="/character">
                  Characters
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active text-info" className="nav-link" to="/men">
                  Men
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active text-info" className="nav-link" to="/women">
                  Women
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active text-info" className="nav-link" to="/search">
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
