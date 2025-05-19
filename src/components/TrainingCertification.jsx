import React from 'react';
import './TrainingCertification.css';

const TrainingCertification = () => {
  return (
    <div className="container">
      <h2 className="heading">
        Get your team started with training and certification
      </h2>
      <div className="content">
        <p className="description">
          Built in collaboration with top professionals from Google, Microsoft, and leading startups.
          These are deep-dive reading paths referencing study material from Harvard, Stanford, Oxford, MIT, and IITs.
        </p>
        <div className="options">
          <div className="option">
            <p className="label">Premium</p>
            <button className="linkButton">Dexter Originals</button>
          </div>
          <div className="option">
            <p className="label">Free</p>
            <button className="linkButton outlined">
              Community–Curated
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCertification;

