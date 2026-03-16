import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import xicon from "../assets/x.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row footer-top">
          {/* Logo */}

          <div className="col-lg-2 col-12 mb-4">
            <img src={logo} alt="logo" className="footer-logo" />
          </div>

          {/* Explore loans */}
          <div className="col-lg-2 col-12 mb-4">
            <h6>Explore loans</h6>
            <ul>
              <li>Search loans</li>
              <li>Compare options</li>
              <li>Customize plans</li>
              <li>Apply today</li>
              <li>Insurance plans</li>
            </ul>
          </div>

          {/* Browse insurance */}
          <div className="col-lg-2 col-12 mb-4">
            <h6>Browse insurance</h6>
            <ul>
              <li>Compare coverage</li>
              <li>Save preferences</li>
              <li>Get quotes</li>
              <li>About us</li>
              <li>Contact support</li>
            </ul>
          </div>

          {/* Learn more */}

          <div className="col-lg-2 col-12 mb-4">
            <h6>Learn more</h6>
            <ul>
              <li>FAQ section</li>
              <li>Help center</li>
              <li>Blog articles</li>
              <li>Resource guides</li>
              <li>News updates</li>
            </ul>
          </div>

          {/* Newsletter */}

          <div className="col-lg-4 col-12 mb-4">
            <h6>Newsletter</h6>
            <p className="newsletter-text">
              Get the latest financial insights and product updates delivered to your inbox each month.
            </p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter email" className="newsletter-email" />
              <button className="newsletter-btn">Subscribe</button>
            </div>
            <p className="newsletter-note">
              By subscribing you agree to our Privacy Policy and consent to receive updates from Generic Finance Hub.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="footer-bottom">
          <div className="footer-left">
            <p>© 2025 Generic Finance Hub. All rights reserved.</p>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Settings</span>
          </div>

          <div className="footer-icons">
            <a href="https://facebook.com/login" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" />
            </a>

            <a href="https://instagram.com/accounts/login" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" />
            </a>

            <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
              <img src={xicon} alt="x" />
            </a>

            <a href="https://linkedin.com/login" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;