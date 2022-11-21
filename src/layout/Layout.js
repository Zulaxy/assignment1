import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

import styles from "./Layout.module.css"

const Layout = (props) => {
  return (
    <div>
      <NavBar />
      <main className={styles.main__body}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
