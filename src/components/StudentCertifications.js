import React, { useRef, useEffect, useState } from "react";
import "./StudentCertifications.css";
import sampleVideo from "../assets/8512854-uhd_3840_2160_30fps.mp4";

const StudentCertifications = () => {
  const videoRef = useRef(null);
  const [hoverEnabled, setHoverEnabled] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    // Play video initially
    if (video) {
      video.play();

      // Pause after 5 seconds and enable hover functionality
      const timeout = setTimeout(() => {
        video.pause();
        setHoverEnabled(true);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, []);

  const handleMouseEnter = () => {
    if (hoverEnabled && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (hoverEnabled && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="certification-section">
      <div className="text-content">
        <h2>Student certifications</h2>
        <p>
          Dexter Learn is a transformative educational platform designed to
          bridge the gap between academic learning and real-world application.
          Our mission is to cultivate the next generation of leaders,
          innovators, and professionals by providing students with the
          resources, skills, and opportunities they need to thrive in today’s
          competitive job market with the help of AI.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>

      <div
        className="video-content"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          src={sampleVideo}
          type="video/mp4"
          muted
          loop
          playsInline
          preload="auto"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default StudentCertifications;
