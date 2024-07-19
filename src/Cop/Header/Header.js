import React from "react";
import logo from "../../assets/img/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const title = [
    { path: "/", display: "Home" },
    { path: "/services", display: "Services" },
    { path: "/courses", display: "Courses" },
    { path: "/about", display: "About Us" },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="nav_container">
          <div className="logo">
            <div className="logo-img">
              <img src={logo} alt="Edu Tech logo" />
            </div>
            <h2>Edu Tech</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {title.map((data, index) => (
                <li className="nav_item" key={index}>
                  <Link to={data.path}>{data.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
