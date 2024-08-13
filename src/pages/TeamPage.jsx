import React from "react";
import "./TeamPageCSS.css";

const TeamPage = () => {
  return (
    <div className="Teampage-container" id="team">
      <div className="Teampage-header">
        <h1>OUR</h1>
        <h1 className="stroke">TEAM</h1>
      </div>
      <p>
        You will find some of the brightest minds on the web in our team. Your
        success defines the core of our processes. Every collaboration pins it
        down and are mission oriented and driven.
      </p>
      <div className="Team-members-wrapper">
        <div className="Team-members-container">
          <div className="team-members-image">
            <img src="https://dummyimage.com/90x90" alt="team-member--image" />
          </div>
          <div className="team-members-deatils-container">
            <h1>HARI</h1>
            <p>CEO</p>
          </div>
        </div>

        <div className="Team-members-container">
          <div className="team-members-image">
            <img src="https://dummyimage.com/90x90" alt="team-member--image" />
          </div>
          <div className="team-members-deatils-container">
            <h1>ROHITH</h1>
            <p>CTO</p>
          </div>
        </div>

        <div className="Team-members-container">
          <div className="team-members-image">
            <img src="https://dummyimage.com/90x90" alt="team-member--image" />
          </div>
          <div className="team-members-deatils-container">
            <h1>GIRISH</h1>
            <p>DEVELOPER</p>
          </div>
        </div>

        <div className="Team-members-container">
          <div className="team-members-image">
            <img src="https://dummyimage.com/90x90" alt="team-member--image" />
          </div>
          <div className="team-members-deatils-container">
            <h1>ALI</h1>
            <p>DIGITAL MARTKETING</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
