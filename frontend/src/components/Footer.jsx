import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We provide high-quality mole traps and pest control solutions to help protect your property and garden.
          </p>
          <a href="/about" className="global-button">Read More >> </a>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <a href="/products" className="global-button">Explore</a>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <address>
            <p>Email: info@moletrap.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Pest Control Ave, Garden City</p>
          </address>
          <a href="/contact" className="global-button">Contact Us</a>
        </div>
      </div> {/* ✅ properly closing footer-container */}

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mole Trap Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
