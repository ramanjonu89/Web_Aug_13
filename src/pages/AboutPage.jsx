import React, { useEffect, useRef } from "react";
import "./AboutPageCSS.css";
import ServicesPage from "./ServicesPage";

const AboutPage = () => {
  const aboutRef = useRef(null);
  const usRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const focusRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.tagName.toLowerCase() === "h1") {
            entry.target.classList.add("slide-in-left");
          } else if (entry.target.tagName.toLowerCase() === "p") {
            entry.target.classList.add("slide-in-right");
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const elementsToObserve = [
      aboutRef.current,
      usRef.current.querySelector("h1"),
      usRef.current.querySelector("p"),
      visionRef.current.querySelector("h1"),
      visionRef.current.querySelector("p"),
      missionRef.current.querySelector("h1"),
      missionRef.current.querySelector("p"),
      focusRef.current.querySelector("h1"),
      focusRef.current.querySelector("p"),
    ];

    elementsToObserve.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elementsToObserve.forEach((element) => {
        if (element) observer.unobserve(element);
        if (element) {
          element.classList.remove("slide-in-left");
          element.classList.remove("slide-in-right");
        }
      });
    };
  }, []);

  return (
    <div className="aboutpage-container" id="about">
      <div className="aboutpage-content">
        <div className="about-column">
          <h1 ref={aboutRef} className="about-h1">
            About
          </h1>
        </div>
        <div className="us-column" ref={usRef}>
          <h1 className="us-h1">us</h1>
          <p>
            We dream, think, design, engineer, learn and build like artists. And
            we are hellbent on creating the best digital experiences in the
            world for our clients.
          </p>
        </div>
      </div>

      <div className="vision-mission-container">
        <div className="vision-container" ref={visionRef}>
          <h1>Vision</h1>
          <p>
            Our vision is to ride on emergent technologies and be a leader &amp;
            innovator in creating user experiences.
          </p>
        </div>
        <div className="mission-container" ref={missionRef}>
          <h1>Mission</h1>
          <p>
            Our mission is to solve your user experience. Easily said than done.
            That means we have to reimagine, disrupt status quos, find elegant
            and thoughtful digital solutions on how people interact with brands.
            To uncover values others can’t in an everchanging technology
            landscape.
          </p>
        </div>
      </div>

      <div className="focus-container" ref={focusRef}>
        <h1>Our Focus</h1>
        <p>
          We want to humanize the digital process. Infectious creativity to
          create natural platforms for seamless communication and experience.
          Decoding the code. Code only necessary scripts and code.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
