import React from "react";
import "../styles/Header.scss";

const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav>
        <ul>
          {/* <li>
            <a onClick={() => handleScroll("statement")}>Us</a>
          </li> */}
          <li>
            <a onClick={() => handleScroll("offerings")}>Offerings</a>
          </li>
          <li>
            <a onClick={() => handleScroll("contact")}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header ;
