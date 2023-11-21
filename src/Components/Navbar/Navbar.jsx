import React from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

  return (
    <nav className="nav bd-container">
      <div className="nav__logo">
        <a href="#" className="nav__link">
          <img src={logo} alt="MFX" />
        </a>
      </div>

      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              <FontAwesomeIcon icon={faHouse} className="nav__icon" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              <FontAwesomeIcon icon={faHouse} className="nav__icon" />
              <span>Purchase</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              <FontAwesomeIcon icon={faHouse} className="nav__icon" />
              <span>Products</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              <FontAwesomeIcon icon={faHouse} className="nav__icon" />
              <span>Label</span>
            </a>
          </li>
        </ul>

        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              <FontAwesomeIcon icon={faHouse} className="nav__icon" />
              <span>Settings</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              <FontAwesomeIcon icon={faHouse} className="nav__icon" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
