import React from "react";
import "./About.css";
import aboutImage from "../assets/about_us_bg.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-hero">
        <h2>🌿 About VIBGYOR Maple</h2>
        <div className="hero-subtitle">
          <p>Innovative backyard safety and garden care solutions for Canadian homes</p>
        </div>
      </div>
      
      <div className="about-content">
        <div className="featured-product">
          <div className="featured-badge">Our Story</div>
          <div className="product-rating">★★★★★</div>
          
          {/* About Image */}
          <div className="about-image-container">
            <img src={aboutImage} alt="VIBGYOR Maple - Canadian Backyard Solutions" className="about-main-image" />
          </div>
          
          <h3>Our Mission</h3>
          <p>
            At VIBGYOR Maple, we are dedicated to creating innovative backyard safety and garden care solutions tailored for Canadian homes. Our mission is to help families enjoy their outdoor spaces with confidence — by combining safety, sustainability, and reliability in everything we build.
          </p>
          <p>
            We design products that address real backyard challenges, from pest protection to garden preservation, without relying on harmful chemicals. Built with Canadian weather conditions in mind, VIBGYOR Maple solutions are durable, family-friendly, and environmentally responsible.
          </p>
          <div className="our-promise-featured">
            <h4>Our Promise</h4>
            <p>To protect and enhance Canadian backyards — naturally and sustainably.</p>
          </div>
        </div>
        <aside className="product-sidebar">
          <div className="sidebar-product">
            <h4>EcoSeed Pro</h4>
            <p>Premium grass seed blend optimized for Canadian climates.</p>
            <p className="coming-soon">Coming Soon</p>
          </div>
          <div className="sidebar-product">
            <h4>WinterShield</h4>
            <p>Winter protection system for year-round lawn health.</p>
            <p className="coming-soon">Coming Soon</p>
          </div>
          <div className="sidebar-product">
            <h4>NatureFeed</h4>
            <p>Natural fertilizer blend to nourish your lawn.</p>
            <p className="coming-soon">Coming Soon</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
