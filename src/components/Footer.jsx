import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="footer-signup">
          <p className="footer-text">
            <span className="register-text">Register for free</span>
            <button type="button" className="btn btn-outline-light btn-rounded">
              Sign up!
            </button>
          </p>
        </section>
        <div className="footer-copyright">
          <p>© 2020 Copyright: 
            <a className="footer-link" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
