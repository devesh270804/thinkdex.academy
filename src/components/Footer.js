import React from "react";
import "./Footer.css";
import gmail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>ThinkDex. Academy</h2>
      <p className="bp">Powered By</p>
      <p className="brand-name">Dexter Platforms</p>
      <div className="footer-top">
        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <div className="social-icons">
            <img className="icon" src={gmail} alt="Gmail" />
            <img className="icon" src={linkedin} alt="LinkedIn" />
            <img className="icon" src={instagram} alt="Instagram" />
            <img className="icon" src={facebook} alt="Facebook" />
          </div>
          <p className="address">
            100 24th Street W Suite 1-1205
            <br />
            Billings, MT 59102, United States
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>AI Tools & Solutions</li>
              <li>Labs & Research</li>
              <li>Internship & Mentorship</li>
              <li>Blog & Case Studies</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Collaborate With Us</h4>
            <ul>
              <li>API Licensing & Partnerships</li>
              <li>Custom AI Solutions</li>
              <li>Research Collaborations</li>
              <li>Developer Ecosystem</li>
              <li>Join Our Creator Community</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4>Our Focus Areas</h4>
            <ul>
              <li>Generative Design for Architecture</li>
              <li>AI-Powered Graphic Design & Animation</li>
              <li>Virtual Prototyping & Ideation</li>
              <li>UX/UI AI Assistants</li>
              <li>AI Career Mentorship & Learning</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Dexter Platforms, LLC. All rights reserved.</p>
        <div className="footer-links-bottom">
          <a href="#">Privacy Policy</a> |<a href="#">Terms of Use</a> |
          <a href="#">Legal</a> |<a href="#">Site Map</a>
        </div>
        <p className="country">United States</p>
      </div>
    </footer>
  );
};

export default Footer;
