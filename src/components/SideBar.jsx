// // original code
// import React, { useEffect, useState, useCallback, useRef } from "react";
// import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
// import dotImage from "../assets/Ellipse 1444.png";
// import WDLogoSidebar from "../assets/webdaddy-final-logo.png";

// const SideBar = () => {
//   const [activeSection, setActiveSection] = useState("home");
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const progressRef = useRef(null);

//   const handleScroll = useCallback(() => {
//     const scrollY = window.scrollY;
//     const scrollHeight =
//       document.documentElement.scrollHeight - window.innerHeight;
//     const progress = (scrollY / scrollHeight) * 100;
//     setScrollProgress(progress);

//     const horizontalScroll = document.querySelector(".horizontal_scroll");
//     const horizontalRect = horizontalScroll.getBoundingClientRect();

//     if (scrollY < horizontalRect.height) {
//       //In the horizontal scroll area
//       const scrollLeft = horizontalScroll.scrollLeft;
//       const sectionWidth = window.innerWidth;
//       const sectionIndex = Math.round(scrollLeft / sectionWidth);
//       const horizontalSections = [
//         "home",
//         "hero2",
//         "hero3",
//         "hero4",
//         "about",
//         "team",
//       ];
//       setActiveSection(
//         horizontalSections[sectionIndex] || "home" || "about" || "team"
//       );
//     } else {
//       // We're in the vertical scroll area
//       const sections = ["services", "portfolio", "blog", "contact"];
//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = document.getElementById(sections[i]);
//         if (section && section.offsetTop <= scrollY + 50) {
//           setActiveSection(sections[i]);
//           break;
//         }
//       }
//     }
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     const horizontalScroll = document.querySelector(".horizontal_scroll");
//     horizontalScroll.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       horizontalScroll.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);

//   useEffect(() => {
//     if (progressRef.current) {
//       progressRef.current.style.height = `${scrollProgress}%`;
//     }
//   }, [scrollProgress]);

//   const handleNavigation = useCallback((sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       const horizontalSections = [
//         "home",
//         "hero2",
//         "hero3",
//         "hero4",
//         "about",
//         "team",
//       ];

//       if (horizontalSections.includes(sectionId)) {
//         // For horizontal scrolling sections
//         const scrollContainer = document.querySelector(".horizontal_scroll");
//         if (scrollContainer) {
//           const sectionIndex = horizontalSections.indexOf(sectionId);
//           const offsetLeft = sectionIndex * window.innerWidth;

//           // Debugging logs
// console.log("Navigating to section:", sectionId);
// console.log("Section index:", sectionIndex);
// console.log("Offset left:", offsetLeft);

//           scrollContainer.scrollTo({ left: offsetLeft, behavior: "smooth" });
//           window.scrollTo({ top: 0, behavior: "smooth" });
//         }
//       } else {
//         // For vertical scrolling sections
//         const yOffset = -50; // Adjust this value to account for any fixed headers
//         const y =
//           section.getBoundingClientRect().top + window.pageYOffset + yOffset;

//         // Debugging logs
//         console.log("Navigating to vertical section:", sectionId);
//         console.log("Scroll position (y):", y);

//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//     }
//   }, []);

//   return (
//     <nav className="sidebar" aria-label="Sidebar Navigation">
//       <div className="logo-container-sidebar">
//         <img
//           src={WDLogoSidebar}
//           alt="Web Daddy Logo"
//           className="sidebar-logo"
//         />
//       </div>

//       <div className="progress-loader">
//         <div className="progress" ref={progressRef}></div>
//       </div>
//       <ul className="nav-links" role="list">
//         {[
//           { id: "home", label: "Home", letter: "H" },
//           { id: "about", label: "About", letter: "A" },
//           { id: "team", label: "Team", letter: "T" },
//           { id: "services", label: "Services", letter: "S" },
//           { id: "portfolio", label: "Portfolio", letter: "P" },
//           { id: "blog", label: "Blog", letter: "B" },
//           { id: "contact", label: "Contact", letter: "C" },
//         ].map((section, index) => (
//           <React.Fragment key={section.id}>
//             <li className={activeSection === section.id ? "active" : ""}>
//               <Link
//                 smooth="true"
//                 to={`#${section.id}`}
//                 aria-label={`Navigate to ${section.label}`}
//                 role="link"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNavigation(section.id);
//                 }}
//               >
//                 <p className="heading" title={section.label}>
//                   {section.letter}
//                   <span className="tooltip">{section.label}</span>
//                 </p>
//               </Link>
//             </li>
//             {index < 6 && (
//               <li>
//                 <img src={dotImage} alt="dot" className="nav-dot" />
//               </li>
//             )}
//           </React.Fragment>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default SideBar;

import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import dotImage from "../assets/Ellipse 1444.png";
import WDLogoSidebar from "../assets/webdaddy-final-logo.png";

// imported context to update the internal blogpage visibility
import { BlogContext } from "../BlogContext";
const useIntersectionObserver = (targets, callback) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry.target.id, entry.isIntersecting);
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the target is visible

    targets.forEach((target) => {
      const element = document.getElementById(target);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      targets.forEach((target) => {
        const element = document.getElementById(target);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [targets, callback]);
};

const SideBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressRef = useRef(null);

  const { setIsblogpage } = useContext(BlogContext)  // context is used here 


  const handleIntersection = useCallback((id, isIntersecting) => {
    if (isIntersecting) {
      // console.log(`${id} is in the viewport`);
      setActiveSection(id);
    } else {
      // console.log(`${id} is out of the viewport`);
    }
  }, []);

  useIntersectionObserver(['about', 'team'], handleIntersection);


  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / scrollHeight) * 100;
    console.log(scrollHeight);
    setScrollProgress(progress);
    const horizontalScroll = document.querySelector(".horizontal_scroll");
  
    const horizontalRect = horizontalScroll.getBoundingClientRect();
 
    if (scrollY < horizontalRect.height) {
      // In the horizontal scroll area
      const scrollLeft = horizontalScroll.scrollLeft;
      const sectionWidth = window.innerWidth;

      const sectionIndex = Math.round(scrollLeft / sectionWidth);
      const horizontalSections = [
        "home",
        "hero2",
        "hero3",
        "hero4",
        "about",
        "team"
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
    setActiveSection(sectionId);
    setIsblogpage(false);  //state  value is set  to false tohide internal blog page

    const horizontalSections = ["home", "hero2", "hero3", "hero4", "about","team"];
    const section = document.getElementById(sectionId);
    if (!section) {
      console.warn(`Section with ID "${sectionId}" not found.`);
      return;
    }
    // if (horizontalSections.includes(sectionId) ) {
    //   window.scrollTo({ top: 0, behavior: "smooth" });
    //   const observer = new IntersectionObserver(entries => {
    //     console.log(entries[0].isIntersecting);
    //     if (entries[0].isIntersecting) {
    //       section.scrollIntoView({ behavior: 'smooth' });
    //       observer.disconnect(); 

    //       if(sectionId === 'team'){
    //         window.scrollBy({ top: 4000, behavior: "smooth" });
    //         setTimeout(() => {
    //           window.scrollBy({ top: 100, behavior: 'smooth' });
    //         }, 500);
    //       }
         
    //     }
    //   }, { threshold: 1.0 }); // Adjust threshold if needed
    //   observer.observe(document.body);
    

    // }
    
    if (horizontalSections.includes(sectionId)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      
      const observer = new IntersectionObserver(entries => {
        const entry = entries[0];
        console.log(entry.isIntersecting);
    
        if (entry.isIntersecting) {
          // Smoothly scroll the section into view
          section.scrollIntoView({ behavior: 'smooth' });
          observer.disconnect(); 
    
          // Special handling for the 'team' section
          if (sectionId === 'team') {
            window.scrollBy({ top: 4000, behavior: 'smooth' });
          } else {
            // Add any additional handling for other sections if needed
          }
        }
      }, { threshold: 1.0 }); // Adjust threshold if needed
    
      observer.observe(document.body);
    }
    
    else {
      
    
      const yOffset = -50; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      console.log( y,"except team");
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);






  return (
    <nav className="sidebar" aria-label="Sidebar Navigation">
      <div className="logo-container-sidebar">
        <img
          src={WDLogoSidebar}
          alt="Web Daddy Logo"
          className="sidebar-logo"
          onClick={() => handleNavigation("home")} // Navigate to home on logo click
        />
      </div>

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
