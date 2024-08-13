import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import dotImage from "../assets/Ellipse 1444.png";

const SideBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("#home");
  const [isVertical, setIsVertical] = useState(false);
  const contentRef = useRef(null);
  const sectionsRef = useRef({
    "#home": React.createRef(),
    "#about": React.createRef(),
    "#team": React.createRef(),
    "#services": React.createRef(),
    "#portfolio": React.createRef(),
    "#blog": React.createRef(),
    "#contact": React.createRef(),
  });

  useEffect(() => {
    setActiveLink(location.hash || "#home");

    const onScroll = () => {
      if (!contentRef.current) return;

      const scrollPosition = contentRef.current.scrollTop;
      const windowHeight = window.innerHeight;

      for (let i = Object.keys(sectionsRef.current).length - 1; i >= 0; i--) {
        const sectionId = Object.keys(sectionsRef.current)[i];
        const sectionRef = sectionsRef.current[sectionId].current;

        if (
          sectionRef &&
          (isVertical
            ? sectionRef.offsetTop <= scrollPosition + windowHeight / 2
            : sectionRef.offsetLeft <= scrollPosition + windowHeight / 2)
        ) {
          setActiveLink(sectionId);
          break;
        }
      }
    };

    const currentContentRef = contentRef.current;

    if (currentContentRef) {
      currentContentRef.addEventListener("scroll", onScroll);
    }

    return () => {
      if (currentContentRef) {
        currentContentRef.removeEventListener("scroll", onScroll);
      }
    };
  }, [location, isVertical]);

  const handleScroll = () => {
    if (contentRef.current) {
      const scrollLeft = contentRef.current.scrollLeft;
      const scrollWidth = contentRef.current.scrollWidth;
      const offsetWidth = contentRef.current.offsetWidth;

      // Switch to vertical scrolling if we have scrolled past the "About" section
      if (scrollLeft + offsetWidth >= scrollWidth) {


        setIsVertical(true);
      } else {
        setIsVertical(false);
      }
    }
  };

  return (
    <div
      ref={contentRef}
      className={isVertical ? "vertical-scroll-container" : "horizontal-scroll-container"}
      onScroll={handleScroll}
    >
      <nav className="sidebar" aria-label="Sidebar Navigation">
        <div className="progress-loader">
          <div className="progress"></div>
        </div>
        <ul className="nav-links" role="list">
          <li className={activeLink === "#home" ? "active" : ""}>
            <Link smooth to="#home" aria-label="Navigate to Home" role="link">
              <p className="heading" title="Home">
                H<span className="tooltip">Home</span>
              </p>
            </Link>
          </li>
          <li>
            <img src={dotImage} alt="dot" className="nav-dot" />
          </li>
          <li className={activeLink === "#about" ? "active" : ""}>
            <Link smooth to="#about" aria-label="Navigate to About" role="link">
              <p className="heading" title="About us">
                A<span className="tooltip">About</span>
              </p>
            </Link>
          </li>
          <li>
            <img src={dotImage} alt="dot" className="nav-dot" />
          </li>
          <li className={activeLink === "#team" ? "active" : ""}>
            <Link smooth to="#team" aria-label="Navigate to Team" role="link">
              <p className="heading" title="Team">
                T<span className="tooltip">Team</span>
              </p>
            </Link>
          </li>
          <li>
            <img src={dotImage} alt="dot" className="nav-dot" />
          </li>
          <li className={activeLink === "#services" ? "active" : ""}>
            <Link smooth to="#services" aria-label="Navigate to Services" role="link">
              <p className="heading" title="Services">
                S<span className="tooltip">Services</span>
              </p>
            </Link>
          </li>
          <li>
            <img src={dotImage} alt="dot" className="nav-dot" />
          </li>
          <li className={activeLink === "#portfolio" ? "active" : ""}>
            <Link smooth to="#portfolio" aria-label="Navigate to Portfolio" role="link">
              <p className="heading" title="Portfolio">
                P<span className="tooltip">Portfolio</span>
              </p>
            </Link>
          </li>
          <li>
            <img src={dotImage} alt="dot" className="nav-dot" />
          </li>
          <li className={activeLink === "#blog" ? "active" : ""}>
            <Link smooth to="#blog" aria-label="Navigate to Blog" role="link">
              <p className="heading" title="Blog">
                B<span className="tooltip">Blog</span>
              </p>
            </Link>
          </li>
          <li>
            <img src={dotImage} alt="dot" className="nav-dot" />
          </li>
          <li className={activeLink === "#contact" ? "active contact-link" : "contact-link"}>
            <Link smooth to="#contact" aria-label="Navigate to Contact" role="link">
              <p className="heading" title="Contact us">
                C<span className="tooltip">Contact</span>
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
