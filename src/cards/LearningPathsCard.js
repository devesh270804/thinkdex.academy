import React from "react";
import "./LearningPathsCard.css"; // Create or update this CSS file

const LearningPathCard = ({ title, image }) => {
  return (
    <div className="learning-card">
      <div className="card-text">
        <p className="academy-name">
          <b>Dexter</b> Academy
        </p>
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default LearningPathCard;
