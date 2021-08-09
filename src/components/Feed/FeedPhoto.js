import React, { useEffect } from "react";
import FeedPhotosItems from "./FeedPhotosItems";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../api";

import styles from "./FeedPhoto.module.css";

const FeedPhoto = ({ user, setModalPhoto, page, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItems
            photo={photo}
            key={photo.id}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};
export default FeedPhoto;
