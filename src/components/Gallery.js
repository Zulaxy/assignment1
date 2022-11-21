import React from "react";

import { galleryItems } from "../data";
import GalleryItem from "./GalleryItem";
import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.pl}>
      <div className={styles.pl_list}>
        {galleryItems.map((item) => {
          return <GalleryItem id={item.id} imgLink={item.imgLink} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
