import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=1104+35th+St+S+St.+Petersburg+FL+33711', '_blank');
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Kenny's Small Engine Repair LLC</h1>
          <h2>Professional Small Engine Repair & Government Services</h2>
          <p>Serving the Tampa-St. Petersburg Area Since 2002</p>
          <div className="hero-buttons">
            <Link to="/small-engine" className="primary-button">Get Repair Service</Link>
            <Link to="/government" className="secondary-button">Government Services</Link>
          </div>
        </div>
      </div>

      <div className="featured-services">
        <h2 className="section-title">Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-placeholder">
              <span className="service-icon">🚜</span>
            </div>
            <h3>Lawn Equipment</h3>
            <ul>
              <li>Lawn Mowers</li>
              <li>Trimmers & Edgers</li>
              <li>Blowers</li>
              <li>Mobile Service Available</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-placeholder">
              <span className="service-icon">⚡</span>
            </div>
            <h3>Power Tools</h3>
            <ul>
              <li>Chainsaws</li>
              <li>Generators</li>
              <li>Pressure Washers</li>
              <li>Expert Repairs</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-placeholder">
              <span className="service-icon">🔧</span>
            </div>
            <h3>Small Engines</h3>
            <ul>
              <li>ATVs & Golf Carts</li>
              <li>Boat Motors</li>
              <li>Scooters</li>
              <li>Professional Service</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="why-choose-us">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">🔧</div>
            <h3>20+ Years Experience</h3>
            <p>Serving our community since 2002 with expert repairs</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🚗</div>
            <h3>Mobile Service</h3>
            <p>We come to you for convenient repairs</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🏛️</div>
            <h3>Government Experience</h3>
            <p>Trusted by federal agencies including MacDill AFB</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📍</div>
            <h3>Wide Service Area</h3>
            <p>Serving the entire Tampa-St. Petersburg area</p>
          </div>
        </div>
      </div>

      <div className="contact-strip">
        <div className="contact-info">
          <h2>Need Service?</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <span className="icon">📞</span>
              <span className="label">Call us:</span>
              <a href="tel:7272804953">(727) 280-4953</a>
            </div>
            <div className="contact-method">
              <span className="icon">📧</span>
              <span className="label">Email:</span>
              <a href="mailto:kennyclark68888@gmail.com">kennyclark68888@gmail.com</a>
            </div>
          </div>
        </div>
        <Link to="/contact" className="contact-button">Contact Us</Link>
      </div>

      <div className="map-section">
        <h2 className="section-title">Our Location</h2>
        <div className="map-container" onClick={handleMapClick}>
          <iframe
            title="Business Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.772747749734!2d-82.67893492427554!3d27.651493976280843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c31e31e6b7d1f9%3A0x5f6e8ec38c4f0808!2s1104%2035th%20St%20S%2C%20St.%20Petersburg%2C%20FL%2033711!5e0!3m2!1sen!2sus!4v1703982543121!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0, cursor: 'pointer' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="map-caption">Click the map for directions to our location</p>
      </div>
    </div>
  );
}

export default Home;
