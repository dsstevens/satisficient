import React from "react";
import "../styles/Offerings.scss";

const Offerings = () => {
  return (
    <div className="offerings">
      <div className="offerings-list">
      <h1>Web Development</h1>
      <h1>Product Design</h1>
      <h1>UI/UX</h1>
      <h1>Brand Identity</h1>
      <h1>Experiential Design</h1>
      <h1>Video Production</h1>
    </div>
    <div className="offerings-image">
      <img src="/offerings.png" alt="Satificient Offerings List in Image Form"></img>
    </div>
    </div>
  );
};

export default Offerings;
