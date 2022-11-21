import React from "react";

import styles from './About.module.css'

const About = () => {
  return <div className={styles.about}>
      <h1>This is our About Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
        rhoncus erat, aliquam pretium nibh. Etiam eleifend vitae velit quis
        bibendum. Morbi et sapien ac risus finibus feugiat. Suspendisse
        ullamcorper enim sed ipsum porttitor tincidunt. Donec porttitor odio
        volutpat iaculis gravida.
      </p>
    </div>;
};

export default About;
