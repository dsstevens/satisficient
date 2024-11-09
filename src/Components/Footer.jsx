import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="footer-container">
      <p className="footer-title">S :)</p>
      <nav className="footer-nav">
        <ul>
          <li>
            <a onClick={() => handleScroll('offerings')}>Offerings</a>
          </li>
          <li>
            <a onClick={() => handleScroll('contact')}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
