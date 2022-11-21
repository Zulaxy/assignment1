import React from "react";

import styles from "./Home.module.css";

import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className={styles.main}>
      <img
        src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
        rhoncus erat, aliquam pretium nibh. Etiam eleifend vitae velit quis
        bibendum.
      </p>
      <Gallery />
      {/* <div>the 4 boxes</div> */}
      
    </div>
  );
};

export default Home;
