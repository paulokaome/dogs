import React from "react";
import Image from "../Helper/Image";

import styles from "./FeedPhotosItems.module.css"

const FeedPhotosItems = ({ photo , setModalPhoto }) => {

  function handleClick() {
      setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title}/>
      <span className={styles.visualization}>{photo.acessos}</span>
    </li>
  );
};
export default FeedPhotosItems;
