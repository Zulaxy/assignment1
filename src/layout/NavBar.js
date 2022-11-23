import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.main__navigation}>
      <ul className={styles.nav__links}>
        <li>
          <NavLink
            to="/home"
            style={({ isActive }) => ({
              background: isActive ? "#acd0ee" : "",
              borderColor: isActive ? "#292929" : "",
              color: isActive ? "#292929" : "",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            style={({ isActive }) => ({
              background: isActive ? "#acd0ee" : "",
              borderColor: isActive ? "#292929" : "",
              color: isActive ? "#292929" : "",
            })}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              background: isActive ? "#acd0ee" : "",
              borderColor: isActive ? "#292929" : "",
              color: isActive ? "#292929" : "",
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              background: isActive ? "#acd0ee" : "",
              borderColor: isActive ? "#292929" : "",
              color: isActive ? "#292929" : "",
            })}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
