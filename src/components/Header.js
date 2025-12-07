import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import menuConfig from "../config/menuConfig";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className={`menu ${menuOpen ? "active" : ""}`}>
          <ul className="list">
            {menuConfig.map((item) => (
              <li key={item.id} onClick={() => setMenuOpen(false)}>
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <a href="#contact" className="hire-me">Hire Me</a>

        <span id="more" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </span>
      </nav>
    </header>
  );
}

export default Header;
