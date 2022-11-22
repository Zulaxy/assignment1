import React from "react";

import { galleryItems } from "../data";
import GalleryItem from "./GalleryItem";
import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.pl}>
      <div className={styles.pl__list}>
        {galleryItems.map((item) => {
          return <GalleryItem id={item.id} imgLink={item.imgLink} key={item.id}/>;
        })}
      </div>
    </div>
  );
};

export default Gallery;
