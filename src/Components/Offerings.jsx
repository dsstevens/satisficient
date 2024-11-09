import React from "react";
import "../styles/Offerings.scss";

const Offerings = () => {
  return (
    <div className="offerings">
      <div className="offerings-list">
      <p className="offerings-title">Offerings</p>
      <h1>Web Design</h1>
      <h1>Full Stack Development</h1>
      <h1>UI/UX</h1>
      <h1>Brand Identity</h1>
      <h1>Motion Design</h1>
      <h1>Webflow Consultation</h1>
    </div>
    <div className="offerings-image">
      <img src="/offerings.png" alt="Satificient Offerings List in Image Form"></img>
    </div>
    </div>
  );
};

export default Offerings;
