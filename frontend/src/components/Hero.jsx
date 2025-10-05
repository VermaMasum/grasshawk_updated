import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import moleHouseBg from "../assets/mole-house-bg.jpg";
import moleHouseBg2 from "../assets/mole-house-bg-2.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of background images for the slider
  const backgroundImages = [moleHouseBg, moleHouseBg2];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === backgroundImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [backgroundImages.length]);

  return (
    <section className="hero" id="home">
      {/* Hero Section with Background Image */}
      <div className="hero-container">
        <div className="hero-background">
          <div 
            className="hero-bg-image"
            style={{
              backgroundImage: `url(${backgroundImages[currentSlide]})`
            }}
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Professional Backyard Solutions
            </h1>
            <p className="hero-subtitle">
              Innovative pest control and garden protection systems designed for Canadian homeowners who demand reliability and effectiveness.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate('/products')}>
                View Products
              </button>
              <button className="btn-secondary" onClick={() => navigate('/about')}>
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Slider Navigation Dots */}
        <div className="slider-dots">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Features Section */}
      <div className="features-section" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
        margin: '0 auto',
        padding: '40px 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0',
          textAlign: 'center'
        }}>
          <h2 className="section-title" style={{
            textAlign: 'center',
            width: '100%',
            margin: '0 auto 3rem auto',
            display: 'block'
          }}>Why Choose VIBGYOR Maple</h2>
          <div className="features-grid" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            width: '100%',
            maxWidth: '100%',
            margin: '0 auto',
            padding: '0 20px',
            gap: '40px',
            textAlign: 'center'
          }}>
            <div className="feature-card" style={{
              borderRadius: '0px',
              width: '250px',
              height: '250px',
              minWidth: '250px',
              maxWidth: '250px',
              minHeight: '250px',
              maxHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '20px',
              overflow: 'hidden'
            }}>
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c.552 0 1-.448 1-1V8c0-.552-.448-1-1-1h-2.5l-1.5-3h-8l-1.5 3H3c-.552 0-1 .448-1 1v3c0 .552.448 1 1 1"/>
                  <path d="M7 19h10"/>
                </svg>
              </div>
              <h3 style={{ margin: '15px 0', fontSize: '18px', fontWeight: 'bold' }}>Quality Assured</h3>
            </div>
            <div className="feature-card" style={{
              borderRadius: '0px',
              width: '250px',
              height: '250px',
              minWidth: '250px',
              maxWidth: '250px',
              minHeight: '250px',
              maxHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '20px',
              overflow: 'hidden'
            }}>
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 style={{ margin: '15px 0', fontSize: '18px', fontWeight: 'bold' }}>Innovation First</h3>
        </div>
            <div className="feature-card" style={{
              borderRadius: '0px',
              width: '250px',
              height: '250px',
              minWidth: '250px',
              maxWidth: '250px',
              minHeight: '250px',
              maxHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '20px',
              overflow: 'hidden'
            }}>
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              </div>
              <h3 style={{ margin: '15px 0', fontSize: '18px', fontWeight: 'bold' }}>Canadian Built</h3>
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

      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Satisfied Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
