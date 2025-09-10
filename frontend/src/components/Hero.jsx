import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  
  const taglines = [
    "You grow it, we protect it",
    "Innovative backyard safety solutions",
    "Canadian weather-tested reliability",
    "Family-friendly & eco-conscious"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % taglines.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="floating-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>
        <div className="gradient-overlay"></div>
      </div>
      
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-badge">
          <span>🌿 VIBGYOR Maple</span>
        </div>
        
        <h1 className="hero-title">
          <div className="title-with-logo">
            <div className="vibgyor-logo">
              <svg width="60" height="60" viewBox="0 0 60 60" className="maple-leaf">
                <defs>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#888" floodOpacity="0.3"/>
                  </filter>
                </defs>
                <path d="M30 5 L35 15 L45 12 L40 22 L50 25 L40 30 L45 40 L35 35 L30 45 L25 35 L15 40 L20 30 L10 25 L20 22 L15 12 L25 15 Z" 
                      fill="black" stroke="red" strokeWidth="1" filter="url(#shadow)"/>
              </svg>
            </div>
            <span className="title-line">Welcome to <span className="highlight">VIBGYOR MAPLE</span></span>
          </div>
        </h1>
        
        <p className="hero-subtitle">
          Precision farming starts here. Discover our innovative mole trap solution.
        </p>
        
        <div className="tagline-container">
          <p className={`tagline ${isVisible ? 'visible' : ''}`}>
            <span className="tagline-part">{taglines[currentText]}</span>
          </p>
        </div>
        
        <div className="hero-buttons">
          <button className="hero-btn primary" onClick={() => navigate('/products')}>
            <span>Explore Products</span>
            <div className="btn-arrow">→</div>
          </button>
          <button className="hero-btn secondary" onClick={() => navigate('/about')}>
            Learn More
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Eco-Friendly</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5★</div>
            <div className="stat-label">Rated</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
