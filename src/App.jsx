import React, { useEffect, useState, useCallback, useContext } from "react";
import { throttle } from "lodash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import AdditionalPageOne from "./pages/AdditionalPageOne";
import AdditionalPageTwo from "./pages/AdditionalPagetwo";
import AdditionalPagethree from "./pages/AdditionalPagethree";
import Loader from "./components/Loader";
import BlogInternalPage from "./pages/BlogInternalPage";
import "./App.css";
import { BlogProvider, BlogContext } from "./Context/BlogContext";



const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback(() => {
    const stickySections = [...document.querySelectorAll(".sticky_wrap")];
    stickySections.forEach((section) => {
      const offsetTop = section.parentElement.offsetTop;
      const scrollSection = section.querySelector(".horizontal_scroll");
      let percentage =
        ((window.scrollY - offsetTop) / window.innerHeight) * 108;
      const maxPages = 6;
      percentage = Math.max(0, Math.min(percentage, maxPages * 108));
      scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      const throttledHandleScroll = throttle(handleScroll, 16); // 60 fps
      window.addEventListener("scroll", throttledHandleScroll);
      return () => window.removeEventListener("scroll", throttledHandleScroll);
    }
  }, [loading, handleScroll]);



  if (loading) return <Loader />;

  return (
    <BlogProvider>
      <Router>
        <div className="app">
          <SideBar />
          <main >
            <div className="scroll_container">
              <div className="sticky_wrap">
                <div className="horizontal_scroll">
                  <div id="home" className="scroll_contents">
                    <HomePage />
                  </div>
                  <div id="hero2" className="scroll_contents">
                    <HeroSectionTwo />
                  </div>
                  <div id="hero3" className="scroll_contents hero-section-three-width">
                    <HeroSectionThree />
                  </div>
                  <div id="hero4" className="scroll_contents hero-section-four-width">
                    <HeroSectionFour />
                  </div>
                  <div id="about" className="scroll_contents">
                    <AboutPage />
                  </div>
                  <div id="team" className="scroll_contents">
                    <TeamPage />
                  </div>
                </div>
              </div>
            </div>
            <section className="container">
              <AdditionalPagethree />
            </section>
            <section id="services" className="container">
              <ServicesPage />
            </section>
            <section className="container">
              <AdditionalPageTwo />
            </section>
            <section id="portfolio" className="container">
              <PortfolioPage />
            </section>
            <section className="container">
              <AdditionalPageOne />
            </section>
            <section id="blog" className="container">
              <BlogPage />
            </section>
            <section id="bloginternal" className="container">
              <BlogInternalPage />
            </section>

            {/* Added new section for blogs internal page  */}
            <section id="contact" className="container">
              <ContactPage />
            </section>
       
          </main>
        </div>
      </Router>
    </BlogProvider>
  );
};

export default App;
