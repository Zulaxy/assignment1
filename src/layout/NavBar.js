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
            exact
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
            exact
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
            exact
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
            exact
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
