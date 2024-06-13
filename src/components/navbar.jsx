import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="container mt-5 mb-5">
      <nav className="navbar navbar-expand-lg" style={{flexWrap:"wrap"}}>
        <div className="container-fluid">
          <Link className="navbar-brand text-light text-center text-wrap" to="/">
            <div className="ms-2 me-5">
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: "250", fontSize: "28.1934px" }}>
                THE CO & BAKE
              </h2>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: "250", fontSize: "14.19px" }}>
                CHOOSE KOZHIKODE
              </h2>
            </div>
          </Link>
          <button className="navbar-toggler" type="button" onClick={handleToggle}>
            {/* <span className="navbar-toggler-icon bg-white"></span> */}
            <span><i class="bi bi-justify text-white"></i></span>
          </button>
          <div className={`collapse navbar-collapse ${showNav ? 'show' : ''}`} id="navbarNav">
            <div className="navbar-nav" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: "400", fontSize: "16px" }}>
              <Link className="nav-link mx-4 text-light" aria-current="page" to="/">
                HOME
              </Link>
              <Link className="nav-link mx-4 text-light" to="/search">
                SEARCH
              </Link>
              <Link className="nav-link mx-4 text-light" to="#">
                PASTRY
              </Link>
              <Link className="nav-link mx-4 text-light" to="/menu">
                MENUS
              </Link>
              <Link className="nav-link mx-4 text-light" to="#">
                ABOUT
              </Link>
              <Link className="nav-link mx-4 text-light" to="#">
                CONTACT
              </Link>
              <Link className="nav-link ms-4 text-light" to="#">
                PRIVACY POLICY
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;