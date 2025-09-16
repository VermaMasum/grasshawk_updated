import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import aboutImage from "../assets/about_us_bg.png";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>About VIBGYOR Maple</h1>
        </div>
      </div>
      
      {/* Mission & Vision Section */}
      <div className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
          </div>
          <h3>Our Mission</h3>
              </div>
              <p>
                At VIBGYOR Maple, we are dedicated to creating innovative backyard safety and garden care solutions tailored for Canadian homes. Our mission is to help families enjoy their outdoor spaces with confidence by combining safety, sustainability, and reliability in everything we build.
              </p>
            </div>
            <div className="mission-card">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3>Our Vision</h3>
              </div>
          <p>
            We design products that address real backyard challenges, from pest protection to garden preservation, without relying on harmful chemicals. Built with Canadian weather conditions in mind, VIBGYOR Maple solutions are durable, family-friendly, and environmentally responsible.
          </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded with a commitment to excellence and innovation, VIBGYOR Maple has been at the forefront of backyard protection technology for over a decade. Our journey began with a simple observation: Canadian homeowners needed reliable, weather-resistant solutions for their outdoor spaces.
              </p>
              <p>
                Today, we combine advanced engineering with sustainable practices to deliver products that not only protect your investment but also contribute to a healthier environment. Our research and development team continuously works to improve our offerings, ensuring they meet the evolving needs of modern homeowners.
              </p>
              <div className="story-stats">
                <div className="story-stat">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years in Business</div>
                </div>
                <div className="story-stat">
                  <div className="stat-number">10,000+</div>
                  <div className="stat-label">Products Sold</div>
                </div>
                <div className="story-stat">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Customer Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img src={aboutImage} alt="VIBGYOR Maple Company" />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c.552 0 1-.448 1-1V8c0-.552-.448-1-1-1h-2.5l-1.5-3h-8l-1.5 3H3c-.552 0-1 .448-1 1v3c0 .552.448 1 1 1"/>
                </svg>
              </div>
              <h4>Quality</h4>
              <p>Every product undergoes rigorous testing to ensure it meets our high standards for durability and effectiveness.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h4>Innovation</h4>
              <p>We continuously invest in research and development to bring cutting-edge solutions to the market.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4>Trust</h4>
              <p>Built on transparency and reliability, we maintain long-term relationships with our customers and partners.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h4>Sustainability</h4>
              <p>We are committed to environmentally responsible practices and sustainable product development.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3>Ready to Protect Your Backyard?</h3>
            <p>Discover our range of professional-grade solutions designed for Canadian homeowners.</p>
            <button className="cta-button" onClick={() => navigate('/products')}>
              View Our Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
