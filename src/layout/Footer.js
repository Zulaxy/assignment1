import React from "react";

import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Galin Malchev 2022</p>
      <button
      className={styles.footer__button}
        onClick={() => {
          console.log("The current page is:", window.location.pathname);
        }}
      >
        Click me to Print the current page in the console
      </button>
    </div>
  );
};

export default Footer;
