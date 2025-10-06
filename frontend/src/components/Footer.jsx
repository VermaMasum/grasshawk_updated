import React from 'react';
import { translations } from '../utils/translations';
import './Footer.css';

const Footer = ({ language = 'en' }) => {
  const t = translations[language] || translations.en;
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{t.footer.aboutUs}</h3>
          <p>
            {t.footer.aboutDescription}
          </p>
          <a href="/about" className="global-button">{t.footer.readMore} >> </a>
        </div>
        
        <div className="footer-section">
          <h3>{t.footer.quickLinks}</h3>
          <ul>
            <li><a href="/">{t.footer.home}</a></li>
            <li><a href="/products">{t.footer.products}</a></li>
            <li><a href="/about">{t.footer.about}</a></li>
            <li><a href="/contact">{t.nav.contact}</a></li>
          </ul>
          <a href="/products" className="global-button">{t.hero.viewProducts}</a>
        </div>
        
        <div className="footer-section">
          <h3>{t.footer.contactInfo}</h3>
          <address>
            <p>{t.footer.email}: info@moletrap.com</p>
            <p>{t.footer.phone}: (123) 456-7890</p>
            <p>{t.footer.address}: 123 Pest Control Ave, Garden City</p>
          </address>
          <a href="/contact" className="global-button">{t.nav.contact}</a>
        </div>
      </div> {/* ✅ properly closing footer-container */}

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mole Trap Solutions. {t.footer.rights}.</p>
      </div>
    </footer>
  );
};

export default Footer;
