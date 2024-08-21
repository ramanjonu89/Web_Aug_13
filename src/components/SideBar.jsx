import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import dotImage from "../assets/Ellipse 1444.png";

const SideBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressRef = useRef(null);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / scrollHeight) * 100;
    setScrollProgress(progress);

    const horizontalScroll = document.querySelector(".horizontal_scroll");
    const horizontalRect = horizontalScroll.getBoundingClientRect();

    if (scrollY < horizontalRect.height) {
      //In the horizontal scroll area
      const scrollLeft = horizontalScroll.scrollLeft;
      const sectionWidth = window.innerWidth;
      const sectionIndex = Math.round(scrollLeft / sectionWidth);
      const horizontalSections = [
        "home",
        "hero2",
        "hero3",
        "hero4",
        "about",
        "team",
      ];
      setActiveSection(horizontalSections[sectionIndex] || "home");
    } else {
      // We're in the vertical scroll area
      const sections = ["services", "portfolio", "blog", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollY + 50) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const horizontalScroll = document.querySelector(".horizontal_scroll");
    horizontalScroll.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      horizontalScroll.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.height = `${scrollProgress}%`;
    }
  }, [scrollProgress]);

  
  const handleNavigation = useCallback((sectionId) => {
    // Array of horizontal section IDs
    const horizontalSections = [
      "home",
      "hero2",
      "hero3",
      "hero4",
      "about",
      "team",
    ];

    const section = document.getElementById(sectionId);

    // Check if the section exists
    if (!section) {
      console.warn(`Section with ID "${sectionId}" not found.`);
      return;
    }
    if (horizontalSections.includes(sectionId)) {
      // Smooth scroll for horizontal sections
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      const yOffset = -50; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      console.log("Navigating to vertical section:", section);
      console.log("Scroll position (y):", y);
  
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);
  
  
  // const handleNavigation = useCallback((sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     const horizontalSections = [
  //       "home",
  //       "hero2",
  //       "hero3",
  //       "hero4",
  //       "about",
  //       "team",
  //     ];

  //     if (horizontalSections.includes(sectionId)) {
  //       // For horizontal scrolling sections
  //       const scrollContainer = document.querySelector(".horizontal_scroll");
  //       if (scrollContainer) {
  //         const sectionIndex = horizontalSections.indexOf(sectionId);
  //         const offsetLeft = sectionIndex * window.innerWidth;

  //         // Debugging logs
  //         console.log("Navigating to section:", sectionId);
  //         console.log("Section index:", sectionIndex);
  //         console.log("Offset left:", offsetLeft);

  //         scrollContainer.scrollTo({ left: offsetLeft, behavior: "smooth" });
  //         window.scrollTo({ top: 0, behavior: "smooth" });
  //       }
  //     } else {
  //       // For vertical scrolling sections
  //       const yOffset = -50; // Adjust this value to account for any fixed headers
  //       const y =
  //         section.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //       // Debugging logs
  //       console.log("Navigating to vertical section:", sectionId);
  //       console.log("Scroll position (y):", y);

  //       window.scrollTo({ top: y, behavior: "smooth" });
  //     }
  //   }
  // }, []);

  return (
    <nav className="sidebar" aria-label="Sidebar Navigation">
      <div className="progress-loader">
        <div className="progress" ref={progressRef}></div>
      </div>
      <ul className="nav-links" role="list">
        {[
          { id: "home", label: "Home", letter: "H" },
          { id: "about", label: "About", letter: "A" },
          { id: "team", label: "Team", letter: "T" },
          { id: "services", label: "Services", letter: "S" },
          { id: "portfolio", label: "Portfolio", letter: "P" },
          { id: "blog", label: "Blog", letter: "B" },
          { id: "contact", label: "Contact", letter: "C" },
        ].map((section, index) => (
          <React.Fragment key={section.id}>
            <li className={activeSection === section.id ? "active" : ""}>
              <Link
                smooth="true"
                to={`#${section.id}`}
                aria-label={`Navigate to ${section.label}`}
                role="link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(section.id);
                }}
              >
                <p className="heading" title={section.label}>
                  {section.letter}
                  <span className="tooltip">{section.label}</span>
                </p>
              </Link>
            </li>
            {index < 6 && (
              <li>
                <img src={dotImage} alt="dot" className="nav-dot" />
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
