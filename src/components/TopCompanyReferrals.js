import React from "react";
import "./TopCompanyReferrals.css";

import meta from "../assets/meta.png";
import google from "../assets/google.png";
import amex from "../assets/amex.png";
import microsoft from "../assets/microsoft.png";
import apple from "../assets/apple.png";
import amazon from "../assets/amazon.png";
import accenture from "../assets/accenture.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import samsung from "../assets/samsung-seeklogo.png";
import tcs from "../assets/TCS.NS.png";
import spotify from "../assets/spotify-seeklogo.png";

const companies = [
  { name: "Meta", logo: meta },
  { name: "Google", logo: google },
  { name: "American Express", logo: amex },
  { name: "Microsoft", logo: microsoft },
  { name: "Apple", logo: apple },
  { name: "Amazon", logo: amazon },
  { name: "Accenture", logo: accenture },
  { name: "Facebook", logo: facebook },
  { name: "Instagram", logo: instagram },
  { name: "LinkedIn", logo: linkedin },
  { name: "Samsung", logo: samsung },
  { name: "TCS", logo: tcs },
  { name: "Spotify", logo: spotify },
];

const TopCompanyReferrals = () => {
  const repeatedCompanies = [...companies, ...companies]; // 👈 duplication for smooth scroll

  return (
    <div className="company-section">
      <h2>
        Exceptional interns will be recommended for job and internship referrals
        at top companies, including:
      </h2>
      <div className="scroll-wrapper">
        <div className="logo-track">
          {repeatedCompanies.map((company, index) => (
            <img
              key={index}
              src={company.logo}
              alt={company.name}
              className="company-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCompanyReferrals;
