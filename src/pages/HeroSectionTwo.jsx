import React, { useEffect, useRef } from "react";
import "./HeroSectionTwoCSS.css";
import homepageimg2 from "../assets/animate.mp4";

const HeroSectionTwo = () => {
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const paragraphRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (heading1Ref.current) {
      observer.observe(heading1Ref.current);
    }

    if (heading2Ref.current) {
      observer.observe(heading2Ref.current);
    }

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (heading1Ref.current) {
        observer.unobserve(heading1Ref.current);
      }
      if (heading2Ref.current) {
        observer.unobserve(heading2Ref.current);
      }
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="homepage-container">
      <div className="slant">
        <div className="hero-section-two">
          <div className="hero-section-two-text">
            <h1 ref={heading1Ref}>LET'S BEND</h1>
            <h1 className="font-stroke" ref={heading2Ref}>
              DESIGN
            </h1>
            <p ref={paragraphRef}>
              Your Digital Footprint Starts With Creating A Rock Solid Website.
              First Impressions Do Last – So Let’s Make It Last! Don’t Let
              Anyone Define You As A business Or An Individual. It’s Time to
              Create Your Own Signature
            </p>
          </div>

          <div className="hero-video-wrap">
            <video
              autoPlay
              playsInline
              loop
              muted
              id="hero-video-bg"
              ref={videoRef}
            >
              <source src={homepageimg2} type="video/mp4" />
            </video>
          </div>

          {/* Background animation lines */}
          {/* <div className="lines">
            <div className="line1"></div>
            <div className="line1"></div>
            <div className="line1"></div>
            <div className="line2"></div> 
            <div className="line2"></div> 
            <div className="line2"></div> 
            <div className="line3"></div> 
            <div className="line3"></div> 
            <div className="line3"></div> 
          </div> */}

          <div className="linesintwo">
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTwo;

// /* Animation for background lines */
// .lines {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   margin: -140px;
//   margin-left: 150px;
//   height: 300vh; /* Full height of the hero-section-two */
//   width: 90vw;
//   pointer-events: none; /* Ensure these elements don't interfere with scroll */
//   transform: rotate(-20deg);
// }

// .line1 {
//   position: absolute;
//   width: 1px;
//   height: 100%;
//   top: 0;
//   left: 50%;
//   background: rgba(255, 255, 255, 0.1);
//   overflow: hidden;

//   &::after {
//     content: "";
//     display: block;
//     position: absolute;
//     height: 15vh; /* Adjust the height of the line */
//     width: 100%;
//     top: -50%; /* Start position above the container */
//     left: 0;
//     background: linear-gradient(
//       to bottom,
//       rgba(255, 255, 255, 0) 0%,
//       #ffffff 75%,
//       #ffffff 100%
//     );
//     animation: drop 2s 0s infinite; /* Adjust animation duration and delay */
//     animation-fill-mode: forwards;
//     animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
//   }

//   &:nth-child(1) {
//     margin-left: -25%; /* Adjust horizontal position */
//     &::after {
//       animation-delay: 1s; /* Delay for animation start */
//     }
//   }

//   &:nth-child(3) {
//     margin-left: 25%; /* Adjust horizontal position */
//     &::after {
//       animation-delay: 1.1s; /* Delay for animation start */
//     }
//   }
// }

// @keyframes drop {
//   0% {
//     top: -50%; /* Start position above the container */
//   }
//   100% {
//     top: 110%; /* End position below the container */
//   }
// }
