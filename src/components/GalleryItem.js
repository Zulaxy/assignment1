import React from "react";

import styles from "./GalleryItem.module.css";

const GalleryItem = ({ id, imgLink }) => {
  return (
    <div className={styles.p}>
      <img src={imgLink} alt="id"></img>
    </div>
  );
};

export default GalleryItem;
