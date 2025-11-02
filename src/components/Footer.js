import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer-container">
        {/* Footer Content Sections */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-section-title">SHOP.CO</h3>
            <p className="footer-description">
              We offer premium quality products with fast shipping and excellent customer service.
            </p>
            <div className="social-links" aria-label="Social Media Links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2.17" y="2.17" width="19.66" height="19.66" rx="4.12" ry="4.12"/>
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10z" fill="white"/>
                  <circle cx="18.5" cy="6.5" r="1.5" fill="white"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-10-10.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h4 className="footer-section-subtitle">COMPANY</h4>
            <nav className="footer-links" aria-label="Company Links">
              <a href="/about">About Us</a>
              <a href="/careers">Careers</a>
              <a href="/press">Press</a>
              <a href="/blog">Blog</a>
            </nav>
          </div>

          {/* Support Links */}
          <div className="footer-section">
            <h4 className="footer-section-subtitle">SUPPORT</h4>
            <nav className="footer-links" aria-label="Support Links">
              <a href="/contact">Contact Us</a>
              <a href="/faq">FAQ</a>
              <a href="/shipping">Shipping & Returns</a>
              <a href="/help">Help Center</a>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="footer-section">
            <h4 className="footer-section-subtitle">LEGAL</h4>
            <nav className="footer-links" aria-label="Legal Links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
              <a href="/accessibility">Accessibility</a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4 className="footer-section-subtitle">NEWSLETTER</h4>
            <p className="footer-section-desc">Subscribe to get special offers and updates!</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address for newsletter"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="payment-methods">
          <span className="payment-title">We Accept:</span>
          <div className="payment-icons" aria-label="Payment Methods">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="24" rx="2" fill="#003087"/>
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold">Visa</text>
            </svg>
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="24" rx="2" fill="#EB001B"/>
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold">MC</text>
            </svg>
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="24" rx="2" fill="#003087"/>
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold">Amex</text>
            </svg>
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="24" rx="2" fill="#003087"/>
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="9" fontWeight="bold">PayPal</text>
            </svg>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} SHOP.CO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
