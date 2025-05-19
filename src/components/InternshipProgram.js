import React, { useState } from "react";
import "./InternshipProgram.css";
import step1 from "../assets/step1.jpg";
import step2 from "../assets/step2.jpg";
import step3 from "../assets/step3.jpg";
import step4 from "../assets/step4.jpg";
import step5 from "../assets/step5.jpg";
import step6 from "../assets/step6.jpg";
import step7 from "../assets/step7.jpg";

const steps = [
  { label: "Step 1: Apply", image: step1 },
  { label: "Step 2: Take Role-Based Test", image: step2 },
  { label: "Step 3: Clear & Rank", image: step3 },
  { label: "Step 4: Early Bird Pays Fee", image: step4 },
  { label: "Step 5: Get Internship + Dexter Learning Access", image: step5 },
  { label: "Step 6: Work on Projects", image: step6 },
  { label: "Step 7: Get Goodies + Paid Opportunities", image: step7 },
];

const InternshipProgram = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="internship-container">
      <div className="top-row">
        <div className="top-left">
          <div className="text-section">
            <h1>
              <span className="highlight">Dexter</span>{" "}
              <span className="light">Internship Program</span>
            </h1>
            <p>
              Dexter Learning is a transformative educational platform designed
              to bridge the gap between academic learning and real-world
              application. Our mission is to cultivate the next generation of
              leaders, innovators, and professionals by providing students with
              the resources, skills, and opportunities they need to thrive in
              today’s competitive job market.
            </p>
            <h2>Advance your career with free training</h2>
            <p>
              Discover Dexter Certifications and free learning paths from
              DexterLearn for in-demand job roles.
            </p>
          </div>
        </div>
        <div className="top-right">
          <a href="#" className="apply-button">
            Watch Video Before Applying for the Program
          </a>
        </div>
      </div>

      <div className="steps-container">
        <ul className="steps-list">
          {steps.map((step, index) => (
            <li
              key={index}
              className={index === selectedIndex ? "active" : ""}
              onClick={() => setSelectedIndex(index)}
            >
              {step.label}
            </li>
          ))}
        </ul>

        <div className="image-content">
          <div className="image-display">
            <img
              src={steps[selectedIndex].image}
              alt={`Step ${selectedIndex + 1}`}
            />
          </div>
        </div>
      </div>

      <p className="stipend-note">
        The <strong>Top 3–5</strong> performers receive premium stipends up to{" "}
        <strong>₹20,000/month</strong>, directly from{" "}
        <strong>Dexter Platforms</strong> or our hiring/startup partners.
      </p>
    </div>
  );
};

export default InternshipProgram;
