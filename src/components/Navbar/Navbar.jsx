import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container ">
          {" "}
          <div className="">
            <Link
              to="/"
              className="text-center header-text fs-4 text-decoration-none "
            >
              Wiki Project
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav fs-5 text-decoration-none">
              <NavLink to="/" className="nav-link text-decoration-none">
                Characters
              </NavLink>
              <NavLink to="/episodes" className="nav-link text-decoration-none">
                Episodes
              </NavLink>
              <NavLink to="/location" className="nav-link text-decoration-none">
                Location
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
