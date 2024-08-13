import React, { useEffect, useRef, useState } from "react";
import "./HeroSectionFourCSS.css";
import imageWBlack from "../assets/W_image_black.png";
import imageDBlack from "../assets/D_image_black.png";

const HeroSectionFour = () => {
  const sectionRef = useRef(null);
  const wdTextRef = useRef(null);
  const [wdVisible, setWdVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const wdText = wdTextRef.current;

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    const animateOnScrollElements =
      section.querySelectorAll(".animate-on-scroll");
    animateOnScrollElements.forEach((element) => {
      observer.observe(element);
    });

    const buttons = section.querySelectorAll(".ripple-buttons button");

    buttons.forEach((button, index) => {
      button.addEventListener("animationend", () => {
        if (index === 2) {
          setWdVisible(true);
        }
        if (index === 4) {
          setWdVisible(false);
        }
      });
    });

    const wdInterval = setInterval(() => {
      setWdVisible((prevVisible) => !prevVisible);
    }, 5000);

    return () => {
      if (observer) {
        observer.disconnect();
      }
      clearInterval(wdInterval);
    };
  }, []);

  return (
    <div className="homepage-container">
      <div className="Hero-section-four" ref={sectionRef}>
        <div className="Hero-section-four-container">
          <div className="Hero-section-four-text-one animate-on-scroll">
            <h1>WHO</h1>
            <p>
              We dream, think, design, engineer, learn and build like artists.
              And we are hellbent on creating the best online digital
              experiences in the world for our clients.
            </p>
          </div>
          <div className="Hero-section-four-text-two animate-on-scroll">
            <h1 className="stroke">WE</h1>
            <p>
              We believe branding, design, development, content and visuals
              should be aligned and combined with the latest technological
              advancements for business creation.
            </p>
          </div>
          <div className="Hero-section-four-text-three animate-on-scroll">
            <p>
              We combine Website creation with a passion for Digital marketing.
              They go hand in hand like teenagers in love. It’s an inseparable
              relationship.
            </p>
            <h1>ARE</h1>
          </div>
        </div>
        <div className="ripple-buttons">
          <button></button>
          <button></button>
          <button></button>
          <p className="text">
            <img src={imageWBlack} alt="herosection4w" />
            <span className="highlight-d">
              <img src={imageDBlack} alt="herosection4D" />
            </span>
          </p>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionFour;
