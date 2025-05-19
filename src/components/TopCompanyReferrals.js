import React from "react";
import "./TopCompanyReferrals.css";

import meta from "../assets/meta.png";
import google from "../assets/google.png";
import amex from "../assets/amex.png";
import microsoft from "../assets/microsoft.png";
import apple from "../assets/apple.png";
import amazon from "../assets/amazon.png";
import accenture from "../assets/accenture.png";

const companies = [
  { name: "Meta", logo: meta },
  { name: "Google", logo: google },
  { name: "American Express", logo: amex },
  { name: "Microsoft", logo: microsoft },
  { name: "Apple", logo: apple },
  { name: "Amazon", logo: amazon },
  { name: "Accenture", logo: accenture },
];

const TopCompanyReferrals = () => {
  return (
    <div className="company-section">
      <h2>
        Exceptional interns will be recommended for job and internship referrals
        at top companies, including:
      </h2>
      <div className="logo-grid">
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={company.name}
            className="company-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default TopCompanyReferrals;
