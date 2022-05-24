import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      data-test="navbar-component"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Movies Demo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
      
            <Link to='/login' className="nav-link">
            Login
            </Link>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Movies
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <Link
                    to="popular"
                    className="dropdown-item"
                    data-test="actors-link-component"
                  >
                    Popular
                  </Link>
                </li>
                <li>
                  <Link
                    to="favorites"
                    className="dropdown-item"
                    data-test="favorites-component"
                  >
                    Favorites
                  </Link>
                </li>
                <li>
                  <Link
                    to="now-playing"
                    className="dropdown-item"
                    data-test="now-playing-component"
                  >
                    Now Playing
                  </Link>
                </li>
                <li>
                  <Link
                    to="upcoming"
                    className="dropdown-item"
                    data-test="favorites-component"
                  >
                    Upcoming
                  </Link>
                </li>
                <li>
                  <Link
                    to="top-rated"
                    className="dropdown-item"
                    data-test="favorites-component"
                  >
                    Top rated
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                People
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <Link
                    to="actors"
                    className="dropdown-item"
                    data-test="favorites-component"
                  >
                    Actors
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
