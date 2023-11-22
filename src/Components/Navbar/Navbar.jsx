import React from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCartShopping,
  faUtensils,
  faTag,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav bd-container">
      <div className="nav__logo">
        <Link to="#" className="nav__link">
          <img src={logo} alt="MFX" />
        </Link>
      </div>

      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/dashboard" className="nav__link">
              <FontAwesomeIcon icon={faHouse} className="nav__icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/purchase" className="nav__link">
              <FontAwesomeIcon icon={faCartShopping} className="nav__icon" />
              <span>Purchase</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/products" className="nav__link">
              <FontAwesomeIcon icon={faUtensils} className="nav__icon" />
              <span>Products</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/label" className="nav__link">
              <FontAwesomeIcon icon={faTag} className="nav__icon" />
              <span>Label</span>
            </Link>
          </li>
        </ul>

        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/settings" className="nav__link">
              <FontAwesomeIcon icon={faGear} className="nav__icon" />
              <span>Settings</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/logout" className="nav__link">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="nav__icon"
              />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
