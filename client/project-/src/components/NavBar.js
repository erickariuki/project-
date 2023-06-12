import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // TODO: Implement search functionality
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <h3>WESTSIDE MOTORS</h3>
        </NavLink>

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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" activeClassName="active">
                {/* Cars */}
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="feedback.html">
                {/* Feedback Form */}
              </a>
            </li>
            <li className="nav-item">
              <NavLink to="/table" className="nav-link" activeClassName="active">
                Table
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Add Cars 
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Brand 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Brand 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Brand 3
                  </a>
                </li>
                {/* Add more brand items here */}
              </ul>
            </li>
            <li className="nav-item">
              <span className="navbar-text mx-auto"></span>
            </li>
          </ul>

          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
