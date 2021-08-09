import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./PhotoContent.module.css";
import PhotoComments from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";
import { UserContext } from "../../Context/UserContext";
import Image from "../Helper/Image";

const PhotoContent = ({ data , single }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.visualization}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso}Kg</li>
            <li>
              {photo.idade}
              {photo.idade > 1 ? "anos" : "ano"}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};
export default PhotoContent;
