import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.main__navigation}>
      <ul className={styles.nav__links}>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" exact>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
