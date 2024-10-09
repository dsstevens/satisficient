import React from "react";
import "../styles/Header.scss";

const Sidebar = () => (
  <div className="sidebar">
    <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>S :)</p>
  </div>
);

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
          <li>
            <a onClick={() => handleScroll("statement")}>Work</a>
          </li>
          <li>
            <a onClick={() => handleScroll("offerings")}>About</a>
          </li>
          <li>
            <a onClick={() => handleScroll("contact")}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Sidebar, Header };
