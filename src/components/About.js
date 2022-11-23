import React, { useState } from "react";

import styles from "./About.module.css";

const About = () => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className={styles.about}>
      <h1>This is our About Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
        rhoncus erat, aliquam pretium nibh. Etiam eleifend vitae velit quis
        bibendum. Morbi et sapien ac risus finibus feugiat. Suspendisse
        ullamcorper enim sed ipsum porttitor tincidunt. Donec porttitor odio
        volutpat iaculis gravida.
      </p>
      <button onClick={clickHandler} className={styles.toggle__btn}>
        Try Me
      </button>
      {toggle && <p>There is more information showing here</p>}
    </div>
  );
};

export default About;
