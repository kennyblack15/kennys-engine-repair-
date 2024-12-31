import React, { useState } from 'react';

function SmallEngineServices() {
  const [expandedCard, setExpandedCard] = useState(null);

  const servicesData = [
    {
      id: 'lawn-equipment',
      title: 'Lawn Equipment',
      summary: 'Expert repair for all lawn care equipment',
      details: [
        'Lawn mower repair and maintenance',
        'Trimmer and edger servicing',
        'Leaf blower repair',
        'Carburetor cleaning and rebuilding',
        'Engine tune-ups and oil changes'
      ]
    },
    {
      id: 'power-tools',
      title: 'Power Tools',
      summary: 'Professional power tool repair services',
      details: [
        'Chainsaw maintenance and repair',
        'Generator servicing',
        'Power washer repair',
        'Air compressor maintenance',
        'Tool performance testing'
      ]
    },
    {
      id: 'recreational',
      title: 'Recreational Equipment',
      summary: 'Repair services for recreational vehicles',
      details: [
        'Golf cart repair and maintenance',
        'ATV engine servicing',
        'Go-kart repair',
        'Small boat engine maintenance',
        'Diagnostic testing'
      ]
    }
  ];

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="small-engine-services">
      <div className="page-header">
        <h1>Small Engine Services</h1>
        <p>Professional repair and maintenance for all types of small engines</p>
      </div>

      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className={`service-card ${expandedCard === item.id ? 'expanded' : ''}`}
              onClick={() => handleCardClick(item.id)}
            >
              <div className="card-front">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <span className="expand-icon">
                  {expandedCard === item.id ? '−' : '+'}
                </span>
              </div>
              <div className="card-back">
                <h3>Services Include</h3>
                <ul>
                  {item.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Experience</h3>
            <p>Over 20 years of experience in small engine repair</p>
          </div>
          <div className="feature">
            <h3>Quality</h3>
            <p>Professional service with attention to detail</p>
          </div>
          <div className="feature">
            <h3>Convenience</h3>
            <p>Quick turnaround times and fair pricing</p>
          </div>
          <div className="feature">
            <h3>Expertise</h3>
            <p>Skilled in all major brands and engine types</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Get Your Equipment Fixed</h2>
        <p>Contact us for fast, reliable service</p>
        <div className="contact-info">
          <p>Phone: (727) 280-4953</p>
          <p>Email: kennyclark68888@gmail.com</p>
          <p>Location: 1104 35th St S, St. Petersburg, FL 33711</p>
          <p>Hours: Monday-Friday 7:00 AM–4:30 PM | Saturday 7:00 AM–12:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default SmallEngineServices;
