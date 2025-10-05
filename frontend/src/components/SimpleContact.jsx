import React, { useState } from 'react';

const SimpleContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  console.log('SimpleContact component rendering'); // Debug log

  return (
    <div style={{
      padding: '80px 20px',
      background: '#ffffff',
      minHeight: '100vh',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#1a202c',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        Contact Us
      </h1>
      
      <p style={{
        fontSize: '1.1rem',
        color: '#4a5568',
        textAlign: 'center',
        marginBottom: '3rem',
        maxWidth: '600px',
        margin: '0 auto 3rem auto'
      }}>
        We'd love to hear from you. Whether you have a question about our products, 
        pricing, or anything else, our team is ready to answer all your questions.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Contact Information */}
        <div style={{
          background: '#f8fafc',
          padding: '2rem',
          borderRadius: '16px'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1a202c',
            marginBottom: '1rem'
          }}>
            Contact Information
          </h3>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem', color: '#1a202c' }}>Our Location</h4>
            <p style={{ color: '#4a5568', margin: '0' }}>
              Grass Hawk Technologies<br />
              1234 Innovation Drive<br />
              Agricultural Park, CA 90210
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem', color: '#1a202c' }}>Phone Numbers</h4>
            <p style={{ color: '#4a5568', margin: '0' }}>
              Sales: <a href="tel:+1-800-GRASS-01" style={{ color: '#2563eb' }}>+1 (800) GRASS-01</a><br />
              Support: <a href="tel:+1-800-GRASS-02" style={{ color: '#2563eb' }}>+1 (800) GRASS-02</a>
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: '0.5rem', color: '#1a202c' }}>Email Addresses</h4>
            <p style={{ color: '#4a5568', margin: '0' }}>
              General: <a href="mailto:info@grasshawk.com" style={{ color: '#2563eb' }}>info@grasshawk.com</a><br />
              Sales: <a href="mailto:sales@grasshawk.com" style={{ color: '#2563eb' }}>sales@grasshawk.com</a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{
          background: '#ffffff',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1a202c',
            marginBottom: '1rem'
          }}>
            Send Us a Message
          </h3>
          
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#1a202c'
              }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#1a202c'
              }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#1a202c'
              }}>
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help you?"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#1a202c'
              }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us more about your inquiry..."
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  resize: 'vertical',
                  minHeight: '120px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px 24px',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SimpleContact;

