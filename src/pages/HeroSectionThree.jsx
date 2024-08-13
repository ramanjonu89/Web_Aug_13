import React, { useEffect, useRef } from "react";
import "./HeroSectionThreeCSS.css";
import formulasCarimg from "../assets/formulasCarimg.svg";

const HeroSectionThree = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    }, options);

    const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="homepage-container" ref={sectionRef}>
      <div className="Hero-section-three">
        <div className="Hero-section-three-text-one">
          <h1 className="animate-on-scroll">IN DIGITAL MARKETING</h1>
          <h1 className="stroke animate-on-scroll">WE “ TRUST ”</h1>
        </div>

        <div className="Hero-section-three-text-two">
          <p className="animate-on-scroll">
            We Will Put You in the Driver’s Seat Like a Formula One Racer.
          </p>
          <p className="animate-on-scroll">
            A Digital Marketing Team Assisting You To Win With Precision.
          </p>
          <img
            src={formulasCarimg}
            alt="car-image"
            className="animate-on-scroll"
          />
        </div>

        <div className="Hero-section-three-text-three">
          <h1 className="animate-on-scroll">OFF TO THE</h1>
          <h1 className="stroke animate-on-scroll">RACES!</h1>
          <p className="animate-on-scroll">
            It’s Not Enough to Win Races. Like Race Cars,
          </p>
          <p className="animate-on-scroll">
            You Have To Keep Your Website Primed For Action.
          </p>
          <p className="animate-on-scroll">
            Ready To Take On Any Challenges That Come Your Way!
          </p>
        </div>

        {/* Background animation lines */}
        <div className="linesthree">
          <div className="line2"></div>
          <div className="line2"></div>
          <div className="line2"></div>
          <div className="line2"></div>
          <div className="line2"></div>
          <div className="line2"></div>
          <div className="line2"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionThree;

{
  /* <div className="lines2three">
    <div className="line2"></div>
    <div className="line2"></div>
    <div className="line2"></div>
  </div> */
}

// .lines2three {
//   position: absolute;
//   top: 1;
//   margin-bottom: 90px;
//   left: 50;
//   right: 0;
//   margin-right: 450px;
//   height: 300vh; /* Full height of the hero-section-two */
//   width: 90vw;
//   pointer-events: none; /* Ensure these elements don't interfere with scroll */
//   transform: rotate(30deg);
// }
