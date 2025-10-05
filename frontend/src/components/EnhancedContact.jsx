import React, { useState } from 'react';
import './EnhancedContact.css';

const EnhancedContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  console.log('EnhancedContact component rendering'); // Debug log

  return (
    <section className="contact-section section-enhanced" id="contact" style={{
      padding: '80px 0',
      background: '#ffffff',
      position: 'relative',
      zIndex: 1,
      minHeight: '100vh',
      display: 'block'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div className="contact-content scroll-reveal" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 className="heading-secondary text-center">Get In Touch</h2>
          <p className="text-center text-large" style={{ marginBottom: '3rem' }}>
            We'd love to hear from you. Whether you have a question about our products, 
            pricing, or anything else, our team is ready to answer all your questions.
          </p>

          <div className="contact-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            margin: '2rem 0'
          }}>
            {/* Contact Information */}
            <div className="contact-info">
              <h3 className="heading-tertiary">Contact Information</h3>
              
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Our Location</h4>
                  <p>Grass Hawk Technologies<br />
                  1234 Innovation Drive<br />
                  Agricultural Park, CA 90210</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Phone Numbers</h4>
                  <p>Sales: <a href="tel:+1-800-GRASS-01">+1 (800) GRASS-01</a><br />
                  Support: <a href="tel:+1-800-GRASS-02">+1 (800) GRASS-02</a><br />
                  Emergency: <a href="tel:+1-555-123-4567">+1 (555) 123-4567</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <div>
                  <h4>Email Addresses</h4>
                  <p>General: <a href="mailto:info@grasshawk.com">info@grasshawk.com</a><br />
                  Sales: <a href="mailto:sales@grasshawk.com">sales@grasshawk.com</a><br />
                  Support: <a href="mailto:support@grasshawk.com">support@grasshawk.com</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM PST<br />
                  Saturday: 9:00 AM - 4:00 PM PST<br />
                  Sunday: Closed</p>
                </div>
              </div>

              <div className="social-links">
                <h4>Connect With Us</h4>
                <div className="social-icons">
                  <a href="https://facebook.com/grasshawk" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span>Facebook</span>
                  </a>
                  <a href="https://twitter.com/grasshawk" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span>Twitter</span>
                  </a>
                  <a href="https://linkedin.com/company/grasshawk" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://instagram.com/grasshawk" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form" style={{
              background: '#ffffff',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 className="heading-tertiary">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    rows="5"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitMessage && (
                  <div className="submit-message">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Additional Contact Sections */}
          <div className="additional-info scroll-reveal">
            <h3 className="heading-tertiary text-center">Additional Ways to Reach Us</h3>
            
            <div className="info-grid">
              <div className="info-card card">
                <h4>Wholesale Inquiries</h4>
                <p>For bulk orders and wholesale pricing:</p>
                <a href="mailto:wholesale@grasshawk.com">wholesale@grasshawk.com</a>
                <a href="tel:+1-800-GRASS-03">+1 (800) GRASS-03</a>
              </div>

              <div className="info-card card">
                <h4>Technical Support</h4>
                <p>For product support and troubleshooting:</p>
                <a href="mailto:tech@grasshawk.com">tech@grasshawk.com</a>
                <a href="tel:+1-800-GRASS-04">+1 (800) GRASS-04</a>
              </div>

              <div className="info-card card">
                <h4>Partnership Opportunities</h4>
                <p>For business partnerships and collaborations:</p>
                <a href="mailto:partnerships@grasshawk.com">partnerships@grasshawk.com</a>
              </div>

              <div className="info-card card">
                <h4>Media & Press</h4>
                <p>For media inquiries and press releases:</p>
                <a href="mailto:media@grasshawk.com">media@grasshawk.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default EnhancedContact;
