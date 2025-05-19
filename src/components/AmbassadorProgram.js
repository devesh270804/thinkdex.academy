import React from "react";
import "./AmbassadorProgram.css";
import ambassadorImage from "../assets/ambassador-program.jpg";

const AmbassadorProgram = () => {
  return (
    <div className="ambassador-section">
      <p className="ambassador-tagline">
        Advance your Business and communication skills with
      </p>
      <h2 className="ambassador-title">
        <strong>Think</strong> Dex. Ambassador program
      </h2>

      <img
        src={ambassadorImage}
        alt="ThinkDex Ambassador Program"
        className="ambassador-image"
      />

      <div className="ambassador-content-row">
        <div className="ambassador-left">
          <p>Become an Ambassador</p>
          <button className="ambassador-btn filled">Apply Now!</button>
        </div>
        <div className="ambassador-right">
          <a
            href="/path-to-program-guide.pdf"
            className="ambassador-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Program Guide PDF →
          </a>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorProgram;
