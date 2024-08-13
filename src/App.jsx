import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import PortfolioPage from "./pages/PortfolioPage";
import TeamPage from "./pages/TeamPage";
import SideBar from "./components/SideBar";
import HeroSectionTwo from "./pages/HeroSectionTwo";
import HeroSectionThree from "./pages/HeroSectionThree";
import HeroSectionFour from "./pages/HeroSectionFour";
import { debounce } from "lodash";
import "./App.css";

const App = () => {
  const contentRef = useRef(null);
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [isVerticalEnabled, setIsVerticalEnabled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isBlogVisible, setIsBlogVisible] = useState(false);

  useEffect(() => {
    const onScroll = debounce(() => {
      if (!contentRef.current) return;
  
      const currentScrollPosition = contentRef.current.scrollLeft;
      const teamSection = document.querySelector("#team");
  
      if (teamSection) {
        const teamSectionOffset = teamSection.offsetLeft;
  
        // Enable vertical scrolling when any part of the Team section is visible
        if (currentScrollPosition >= teamSectionOffset - window.innerWidth / 5) {
          setIsHorizontal(false);
          setIsVerticalEnabled(true);
          console.log("Horizontal scroll ended. Vertical scroll started.");
        } else {
          setIsHorizontal(true);
          setIsVerticalEnabled(false);
        }
  
        setScrollPosition(currentScrollPosition);
      }
    }, 100);
  
    const onWheel = debounce((event) => {
      const teamSection = document.querySelector("#team");
      const currentScrollPosition = contentRef.current.scrollLeft;
  
      if (isHorizontal) {
        // Handle horizontal scroll
        event.preventDefault();
        contentRef.current.scrollBy({
          top: 0,
          left: -event.deltaY,
          behavior: "smooth",
        });
  
        // Disable vertical scrolling if reverse scrolling horizontally before reaching the Team section
        if (currentScrollPosition <= teamSection.offsetLeft - window.innerWidth / 2) {
          setIsVerticalEnabled(false);
          setIsHorizontal(true);
          console.log("Reverse horizontal scroll detected. Vertical scroll disabled.");
        }
      } else {
        // Handle vertical scroll
        event.preventDefault();
        const scrollTop = contentRef.current.scrollTop;
  
        if (scrollTop <= teamSection.offsetTop) {
          // If at the top of the Team section and scrolling up, switch back to horizontal scroll
          setIsHorizontal(true);
        } else {
          // Continue with vertical scrolling
          contentRef.current.scrollBy({
            top: event.deltaY,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }, 100);
  
    const currentContentRef = contentRef.current;
    if (currentContentRef) {
      currentContentRef.addEventListener("scroll", onScroll);
      currentContentRef.addEventListener("wheel", onWheel);
    }
  
    return () => {
      if (currentContentRef) {
        currentContentRef.removeEventListener("scroll", onScroll);
        currentContentRef.removeEventListener("wheel", onWheel);
      }
    };
  }, [isHorizontal, isVerticalEnabled]);
  
  

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = contentRef.current.scrollLeft;
      const windowWidth = window.innerWidth;
      const fullWidth = contentRef.current.scrollWidth;
      
      // Apply scaling factor to slow down horizontal progress
      const scalingFactor = 0.2; // Adjust this factor to slow down or speed up the progress
      const scrolledHorizontal = ((scrollPosition / (fullWidth - windowWidth)) * 100) / scalingFactor;
  
      let verticalProgress = 50; // Start vertical progress at 50%
      if (!isHorizontal && contentRef.current) {
        const fullHeight = contentRef.current.scrollHeight;
        const scrollTop = contentRef.current.scrollTop;
        const maxVerticalProgress = 100 - 50; // Maximum progress increment after 50%
        verticalProgress = 50 + (scrollTop / (fullHeight - window.innerHeight)) * maxVerticalProgress;
      }
  
      // Calculate progress for horizontal scrolling ending at Team page
      if (isHorizontal) {
        const teamSection = document.querySelector("#team");
        if (teamSection && scrollPosition >= teamSection.offsetLeft) {
          // Ensure the progress bar reaches 50% when horizontal scroll ends at Team page
          const progress = Math.min(scrolledHorizontal, 50);
          document.querySelector(".progress").style.height = `${progress}%`;
        } else {
          document.querySelector(".progress").style.height = `${Math.min(scrolledHorizontal, 100)}%`;
        }
      } else {
        // For vertical scrolling, use verticalProgress
        document.querySelector(".progress").style.height = `${Math.min(verticalProgress, 100)}%`;
      }
    };
  
    contentRef.current.addEventListener("scroll", onScroll);
  
    return () => {
      contentRef.current.removeEventListener("scroll", onScroll);
    };
  }, [isHorizontal]);
  
  

  
  
  
  
  

  return (
    <BrowserRouter>
      <div className="layout">
        <SideBar />
        <div
        className={`content ${isHorizontal ? "horizontal" : "vertical"} ${
          isVerticalEnabled ? "vertical-enabled" : ""
        } ${isServicesVisible || isContactVisible || isBlogVisible || isPortfolioVisible? "services-visible" : ""}`}
        ref={contentRef}
      >
          <div id="home" className="content-item">
            <HomePage />
          </div>
          <div id="hero2" className="content-item">
            <HeroSectionTwo />
          </div>
          <div id="hero3" className="content-item">
            <HeroSectionThree />
          </div>
          <div id="hero4" className="content-item">
            <HeroSectionFour />
          </div>
          <div id="about" className="content-item">
            <AboutPage />
          </div>
          <div className="make_me_vertical">
            <div id="team" className="content-item">
              <TeamPage />
            </div>
            <div className="after_team">

            <div id="services" className="content-item">
              <ServicesPage />
            </div>
            <div id="portfolio" className="content-item">
              <PortfolioPage />
            </div>
            <div id="blog" className="content-item">
              <BlogPage />
            </div>
            <div id="contact" className="content-item">
              <ContactPage />
            </div>
            </div>
          </div>
        </div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
