import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item


function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Wish List
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item pl-2">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/products"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Products
            </Link>
          </li>
          <li className="nav-item pl-2">
            <Link
              to="/yourlist"
              className={window.location.pathname === "/yourlist" ? "nav-link active" : "nav-link"}
            >
              Your List
            </Link>
          </li>
          <li className="nav-item pl-2">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Log In
            </Link>
          </li>
          <li className="nav-item pl-2">
            <Link
              to="/enroll"
              className={window.location.pathname === "/enroll" ? "nav-link active" : "nav-link"}
            >
              Enroll
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}









export default Navbar;


