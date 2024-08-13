import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.hash);
  }, [location]);
  7;

  return (
    <div>
      {/* <nav className="navbar">
        <ul className="nav-links">
          <li className={activeLink === "#home" ? "active" : ""}>
            <Link smooth to="#home">
              Home
            </Link>
          </li>
          <li className={activeLink === "#services" ? "active" : ""}>
            <Link smooth to="#services">
              Services
            </Link>
          </li>
          <li className={activeLink === "#about" ? "active" : ""}>
            <Link smooth to="#about">
              About Us
            </Link>
          </li>
          <li className={activeLink === "#team" ? "active" : ""}>
            <Link smooth to="#team">
              Team
            </Link>
          </li>
          <li className={activeLink === "#portfolio" ? "active" : ""}>
            <Link smooth to="#portfolio">
              Portfolio
            </Link>
          </li>
          <li className={activeLink === "#blog" ? "active" : ""}>
            <Link smooth to="#blog">
              Blog
            </Link>
          </li>
          <li className={activeLink === "#contact" ? "active" : ""}>
            <Link smooth to="#contact">
              Contact Us
            </Link>
          </li>

          <li
            className={
              activeLink === "#contact" ? "active contact-link" : "contact-link"
            }
          >
            <Link smooth to="#contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default NavBar;

{
  /* <ul className="nav-links">
  <li className={location.pathname === "/" ? "active" : ""}>
    <Link to="/">Home</Link>
  </li>
  <li className={location.pathname === "/services" ? "active" : ""}>
    <Link to="/services">Services</Link>
  </li>
  <li className={location.pathname === "/about" ? "active" : ""}>
    <Link to="/about">About Us</Link>
  </li>
  <li className={location.pathname === "/team" ? "active" : ""}>
    <Link to="/team">Team</Link>
  </li>
  <li className={location.pathname === "/portfolio" ? "active" : ""}>
    <Link to="/portfolio">Portfolio</Link>
  </li>
  <li className={location.pathname === "/blog" ? "active" : ""}>
    <Link to="/blog">Blog</Link>
  </li>
  <li
    className={
      location.pathname === "/contact"
        ? "active contact-link"
        : "contact-link"
    }
  >
    <Link to="/contact">Contact Us</Link>
  </li>
</ul> */
}
