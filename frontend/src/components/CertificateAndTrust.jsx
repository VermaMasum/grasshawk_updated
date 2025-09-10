import React from "react";
import "./CertificateAndTrust.css";

const CertificateAndTrust = () => {
  return (
    <section className="certifications-trust-section">
      <div className="bubble-animation">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <h1>Certifications & Trust</h1>
      <p className="subtitle">
        Your peace of mind is our priority. We maintain the highest standards of quality, safety, and environmental responsibility.
      </p>
      <div className="certifications-cards">
        <div className="cert-card">
          <div className="icon shield-icon"></div>
          <h3>Health Canada Approved</h3>
          <p>All products meet strict Canadian safety standards</p>
        </div>
        <div className="cert-card">
          <div className="icon leaf-icon"></div>
          <h3>EcoLogo Certified</h3>
          <p>Verified environmental choice for reduced impact</p>
        </div>
        <div className="cert-card">
          <div className="icon ribbon-icon"></div>
          <h3>ISO 14001</h3>
          <p>Environmental management system certification</p>
        </div>
        <div className="cert-card">
          <div className="icon location-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" className="canada-logo">
              <rect width="40" height="40" fill="#ff0000"/>
              <rect x="8" y="8" width="24" height="24" fill="white"/>
              <path d="M20 10 L22 16 L28 16 L23 20 L25 26 L20 22 L15 26 L17 20 L12 16 L18 16 Z" fill="#ff0000"/>
            </svg>
          </div>
          <h3>Canadian Made</h3>
          <p>Proudly manufactured in Canada for Canadians</p>
        </div>
      </div>
      <section className="quality-assurance-section">
        <h2>Quality & Reliability Assurance</h2>
        <p>
          Every Vibgyor Maple product undergoes rigorous testing and quality control processes. We're committed to delivering solutions that not only meet but exceed Canadian environmental and safety standards.
        </p>
      </section>
      <section className="registered-design-section">
        <div className="registered-design-card">
          <div className="registered-design-logo">
            <svg width="80" height="80" viewBox="0 0 80 80" className="canada-gov-logo">
              <rect width="80" height="80" fill="#ff0000" rx="8"/>
              <rect x="16" y="16" width="48" height="48" fill="white" rx="4"/>
              <path d="M40 20 L44 32 L56 32 L46 40 L50 52 L40 44 L30 52 L34 40 L24 32 L36 32 Z" fill="#ff0000"/>
              <text x="40" y="70" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">GOVERNMENT OF CANADA</text>
            </svg>
          </div>
          <p>
            Our mole trap is registered industrial design at Canadian intellectual property office, Canada ensuring originality, innovation and trusted quality. Built for durability and efficiency, it delivers safe, eco friendly and reliable mole control.
          </p>
        </div>
      </section>
    </section>
  );
};

export default CertificateAndTrust;
