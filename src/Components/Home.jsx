import React from 'react';
import Header from './Header.jsx';
import Statement from './Statement.jsx';
import Offerings from './Offerings.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import '../styles/App.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="all-content">
        <Header />
        <div className="main-content">
          <section id="statement" className="statement-section">
            <Statement />
          </section>
          <section id="offerings" className="offerings-section">
            <Offerings />
          </section>
          <section id="contact" className="contact-section">
            <Contact />
          </section>
          <section id="footer" className="footer-section">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
