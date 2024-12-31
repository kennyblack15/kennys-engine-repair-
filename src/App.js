import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SmallEngineServices from './components/SmallEngineServices';
import GovernmentServices from './components/GovernmentServices';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="main-nav">
          <div className="nav-brand">
            <Link to="/">Kenny's Small Engine Repair</Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/small-engine">Small Engine</Link>
            <Link to="/government">Government</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/small-engine" element={<SmallEngineServices />} />
          <Route path="/government" element={<GovernmentServices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>
          <div className="footer-content">
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p>1104 35th St S, St. Petersburg, FL 33711</p>
              <p>Phone: (727) 280-4953</p>
              <p>Hours: Mon-Fri 7:00 AM–4:30 PM</p>
              <p>Saturday 7:00 AM–12:00 PM</p>
              <p>Sunday Closed</p>
            </div>
            <div className="service-area">
              <h3>Service Area</h3>
              <p>Tampa-St. Petersburg Metropolitan Area</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
