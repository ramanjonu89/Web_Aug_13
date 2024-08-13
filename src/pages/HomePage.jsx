import React from "react";
import "./HomePageCSS.css";
import wletter from "../assets/w_image.png";
import dletter from "../assets/d_image.png";
import logo_string from "../assets/logo_string.png";

const HomePage = () => {
  return (
    <div className="homepage-container" id="home">
      <div className="hero-section">
        <div className="video-wrap">
          <video autoPlay playsInline loop muted id="video-bg">
            <source
              src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="gradient-overlay"></div>
        <div className="hero-section-text">
          <h2 className="blend_two">WEBDADDY</h2>
          <h1 className="blend">A BUSINESS</h1>
          <h1 className="blend stroke">CREATION</h1>
          <h1 className="blend">AGENCY</h1>
          <h6 className="blend">Yes, We Do Dabble in A Few Things!</h6>
          <div className="logoimage">
            <img src={wletter} alt="logo" className="w-letter" />
            <img src={logo_string} alt="string" className="string-logo" />
            <div>
              <img src={dletter} alt="logo" className="d-letter" />
            </div>
            <img src={logo_string} alt="string" className="string2-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
