import React from "react";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3">
      <div className="container">

        {/* Mobile Burger */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo */}
        {/* Logo size reduced only on mobile to prevent layout breaking */}
        <a className="navbar-brand ms-2" href="/">
          <img
            src={logo}
            alt="logo"
            className="navbar-logo"
          // style={{ height: "80px", maxHeight: "50px" }}
          />
        </a>

        {/* RIGHT SIDE MOBILE BUTTONS */}
        <div className="d-flex align-items-center ms-auto d-lg-none">
          <button className="btn btn-light me-2 border border-black">
            🌐EN
          </button>

          <button className="btn btn-primary px-4 " style={{ backgroundColor: '#3F86A6', borderColor: '#3F86A6' }}>
            Login
          </button>
        </div>


        <div className="collapse navbar-collapse" id="navbarContent">

          {/* LEFT MENU */}
          <ul className="navbar-nav ms-4">

            <li className="nav-item">
              <a className="nav-link fs-5" href="/">Loans</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fs-5" href="/">Insurance</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fs-5" href="/">Compare</a>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fs-5"
                href="/"
                data-bs-toggle="dropdown"
              >
                Resources
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Resource 1</a></li>
                <li><a className="dropdown-item" href="/">Resource 2</a></li>
                <li><a className="dropdown-item" href="/">Resource 3</a></li>
              </ul>
            </li>

          </ul>

          {/* RIGHT SIDE DESKTOP */}
          <ul className="navbar-nav ms-auto align-items-center d-none d-lg-flex">

            <li className="nav-item me-3">
              <button className="btn btn-light border border-black">
                🌐EN
              </button>
            </li>

            <li className="nav-item">
              <button className="btn btn-primary px-4" style={{ backgroundColor: '#3F86A6', borderColor: '#3F86A6' }}>
                Login
              </button>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;