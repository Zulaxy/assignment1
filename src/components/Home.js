import React from "react";

import styles from "./Home.module.css";
import banner from "../assets/banner.jpg";

import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className={styles.main__home}>
      <img className={styles.home__img} src={banner} alt="" />
      <p className={styles.par}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
        rhoncus erat, aliquam pretium nibh. Etiam eleifend vitae velit quis
        bibendum.
      </p>

      <div className={styles.gallery__div}>
        <Gallery />
      </div>
      {/* <div>the 4 boxes</div> */}
    </div>
  );
};

export default Home;
