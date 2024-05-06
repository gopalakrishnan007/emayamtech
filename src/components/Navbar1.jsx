import { useState } from "react";
import "../styles/navbar1.css";

function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <a href="/index.html">
        <img src="/src/images/Logo.png" alt="Logo" />
      </a>
      <ul className="nav-list">
        <li>
          <a href="/index.html">Home</a>
        </li>
        <li>
          <a href="/src/About">About</a>
        </li>
        <li>
          <a href="/src/Services">Services</a>
        </li>
        <li>
          <a href="/src/Resources">Resources</a>
        </li>
      </ul>
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/index.html">Home</a>
        </li>
        <li>
          <a href="/src/About">About</a>
        </li>
        <li>
          <a href="/src/Services">Services</a>
        </li>
        <li>
          <a href="/src/Resources">Resources</a>
        </li>
      </ul>
      <a className="ctn-btn" href="/index.html">
        Contact Us
      </a>
    </nav>
  );
}

export default Navbar1;
