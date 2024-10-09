import React from "react";
import Contact from "./Contact.jsx";
import { Header, Sidebar } from "./Header.jsx";
import Offerings from "./Offerings.jsx";
import Statement from "./Statement.jsx";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
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
