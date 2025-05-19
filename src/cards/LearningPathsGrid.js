import React from "react";
import LearningPathCard from "./LearningPathsCard";
import "./LearningPathsGrid.css";
import webdevImg from "../assets/webdev.jpg";
import aiImg from "../assets/aieng.jpeg";
import mlImg from "../assets/mleng.jpg";
import dataAnalyticsImg from "../assets/dataanal.jpg";
import businessAnalystImg from "../assets/business.jpg";
import promptImg from "../assets/prompt.jpg";

const learningPaths = [
  { title: "AI Engineer Track", image: aiImg },
  { title: "ML Engineer Mastery", image: mlImg },
  { title: "Full Stack Web Developer Journey", image: webdevImg },
  { title: "Data Analytics 360", image: dataAnalyticsImg },
  { title: "Business Analyst Essentials", image: businessAnalystImg },
  { title: "Prompt Engineering", image: promptImg },
];

const LearningPathsGrid = () => {
  return (
    <>
      <div className="grid-container">
        <div className="grid-layout">
          {learningPaths.map((path, index) => (
            <LearningPathCard
              key={index}
              title={path.title}
              image={path.image}
            />
          ))}
        </div>
      </div>

      <div className="explore-button-wrapper">
        <button className="explore-button">
          Explore All Learning Paths <span className="arrow">⟶</span>
        </button>
      </div>
    </>
  );
};

export default LearningPathsGrid;
