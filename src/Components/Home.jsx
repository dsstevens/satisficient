import React from 'react';
import Contact from './Contact.jsx';
import Header from './Header.jsx';
import Offerings from './Offerings.jsx';
import Statement from './Statement.jsx';
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
        </div>
      </div>
    </div>
  );
};

export default Home;
