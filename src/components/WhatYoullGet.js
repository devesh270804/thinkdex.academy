import React from "react";
import "./WhatYoullGet.css";

const benefits = [
  "Letter of Recommendation",
  "Merch, Swag & Goodies",
  "Certificate of Recognition",
  "Performance-Based Stipend & Rewards",
  "Free Access to Dexter Learning Premium Tools",
  "Mentorship & Networking with Tech Experts",
];

const WhatYoullGet = () => {
  return (
    <div className="benefits-section">
      <h2 className="benefits-title">What You’ll Get?</h2>
      <p className="benefits-description">
        As a Campus Ambassador, you’ll be a bridge between your peers and
        DexterLearn’s ecosystem. You’ll play a key role in spreading awareness
        about what it entails, our tools, and learning opportunities — while
        building your personal brand in the process.
      </p>

      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div key={index} className="benefit-card">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYoullGet;
