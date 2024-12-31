import React, { useState } from 'react';

function GovernmentServices() {
  const [expandedCard, setExpandedCard] = useState(null);

  const performanceData = [
    {
      id: 'macdill',
      title: 'MacDill Air Force Base',
      summary: 'Equipment maintenance and repair services',
      details: [
        'Comprehensive maintenance of ground support equipment',
        'Emergency repair services available 24/7',
        'Regular preventive maintenance schedules',
        'Full documentation and reporting',
        'Certified technician team'
      ]
    },
    {
      id: 'coast-guard',
      title: 'U.S. Coast Guard',
      summary: 'Small engine and equipment repairs',
      details: [
        'Specialized marine equipment maintenance',
        'Quick response mobile service',
        'Compliance with maritime regulations',
        'Equipment testing and certification',
        'On-site emergency repairs'
      ]
    },
    {
      id: 'pentagon',
      title: 'Federal Facilities',
      summary: 'General equipment maintenance',
      details: [
        'Regular equipment inspections',
        'Preventive maintenance programs',
        'Standard repair services',
        'Equipment performance testing',
        'Maintenance documentation'
      ]
    }
  ];

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="government-services">
      <div className="page-header">
        <h1>Government Services</h1>
        <p>Trusted Government Contractor with Proven Performance</p>
      </div>

      <div className="past-performance">
        <h2>Past Performance</h2>
        <div className="performance-grid">
          {performanceData.map((item) => (
            <div
              key={item.id}
              className={`performance-card ${expandedCard === item.id ? 'expanded' : ''}`}
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
                <h3>Details</h3>
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

      <div className="capabilities">
        <h2>Core Capabilities</h2>
        <div className="capabilities-grid">
          <div className="capability-card">
            <h3>Equipment Services</h3>
            <ul>
              <li>Small Engine Repair</li>
              <li>Preventive Maintenance</li>
              <li>Equipment Testing</li>
              <li>Emergency Repairs</li>
            </ul>
          </div>

          <div className="capability-card">
            <h3>Facility Services</h3>
            <ul>
              <li>Plumbing Services</li>
              <li>Painting</li>
              <li>Linen Care</li>
              <li>Janitorial Services</li>
            </ul>
          </div>

          <div className="capability-card">
            <h3>Grounds Maintenance</h3>
            <ul>
              <li>Lawn Care</li>
              <li>Equipment Maintenance</li>
              <li>Property Upkeep</li>
              <li>Landscaping Services</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="differentiators">
        <h2>Why Choose Us</h2>
        <ul>
          <li>Over 20 years of experience since 2002</li>
          <li>Proven track record with federal agencies</li>
          <li>Mobile service capabilities</li>
          <li>Quick response times</li>
          <li>Flexible scheduling</li>
          <li>Comprehensive service offerings</li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>Government Contracting Contact</h2>
        <p>For government contract inquiries:</p>
        <p>Phone: (727) 280-4953</p>
        <p>Email: kennyclark68888@gmail.com</p>
        <p>Location: 1104 35th St S, St. Petersburg, FL 33711</p>
        <div className="service-area">
          <h3>Service Coverage:</h3>
          <p>Tampa-St. Petersburg Metropolitan Area and surrounding regions</p>
        </div>
      </div>
    </div>
  );
}

export default GovernmentServices;
