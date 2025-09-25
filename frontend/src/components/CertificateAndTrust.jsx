import React from "react";
import "./CertificateAndTrust.css";
import logoVibgyor from "../assets/logo_vibgyor.png";
import canadaGovLogo from "../assets/canada_gov_logo.jpg";

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
            <img src={canadaGovLogo} alt="Canada Government Logo" className="canada-logo" />
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
            <img src={canadaGovLogo} alt="Canada Government Logo" className="canada-gov-logo" />
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
