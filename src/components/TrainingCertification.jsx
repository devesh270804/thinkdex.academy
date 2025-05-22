import React from "react";
import "./TrainingCertification.css";
import LearningPathsGrid from "../cards/LearningPathsGrid";

const TrainingCertification = () => {
  return (
    <div className="container">
      <h2 className="heading">
        Get your team started with training and certification
      </h2>
      <div className="content">
        <p className="description">
          Built in collaboration with top professionals from Google, Microsoft,
          and leading startups. These are deep-dive reading paths referencing
          study material from Harvard, Stanford, Oxford, MIT, and IITs.
        </p>
        <div className="options">
          <div className="option">
            <p className="label">Premium</p>
            <a className="linkButton" href="#dexter-originals">Dexter Originals</a>
          </div>
          <div className="option">
            <p className="label">Free</p>
            <a
              className="linkButton outlined"
              href="https://dexterlearning.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Community–Curated
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCertification;
