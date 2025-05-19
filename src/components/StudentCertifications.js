import React from 'react';
import './StudentCertifications.css';
import sampleVideo from '../assets/8512854-uhd_3840_2160_30fps.mp4';

const StudentCertifications = () => {
  return (
    <section className="certification-section">
      <div className="text-content">
        <h2>Student certifications</h2>
        <p>
          Dexter Learn is a transformative educational platform designed to bridge the gap between academic learning and real-world application. Our mission is to cultivate the next generation of leaders, innovators, and professionals by providing students with the resources, skills, and opportunities they need to thrive in today’s competitive job market with the help of AI.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>

      <div className="video-content">
        <video controls>
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default StudentCertifications;

