import React from "react";
import "./CareerReadinessAgents.css";
import { ReactComponent as TestimonialSVG } from "../assets/testimonials.svg";

const CareerReadinessAgents = () => {
  return (
    <div className="career-agents-section">
      <h2>
        <span>Think</span>
        <span style={{ color: "#bcbcbc", fontWeight: 600 }}>Dex.</span> - Career
        Readiness Ai Agents
      </h2>
      <div className="testimonial">
        <TestimonialSVG className="testimonial-image" />
      </div>
      <button className="explore-btn">Explore More Ai Agents</button>
    </div>
  );
};

export default CareerReadinessAgents;
