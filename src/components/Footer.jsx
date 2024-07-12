import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="footer-signup">
          <p className="footer-text">
            <span className="register-text">Register course for free</span>
            <button type="button" className="btn btn-outline-light btn-rounded">
              Register
            </button>
          </p>
        </section>
        <div className="footer-copyright">
          <p>©2024 Copyright:  
            <a className="footer-link" href=""> GH5.0 - GARFIELD</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
