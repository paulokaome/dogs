import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import FeedModal from "../Feed/FeedModal";
import FeedPhoto from "../Feed/FeedPhoto";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    function infiniteScroll() {
      if (infinite) {
        let wait = false;
        const scroll = window.screenY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener("wheel", infiniteScroll());
    window.addEventListener("scroll", infiniteScroll());
    return () => {
      window.removeEventListener("wheel", infiniteScroll());
      window.removeEventListener("scroll", infiniteScroll());
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhoto
          user={user}
          setModalPhoto={setModalPhoto}
          page={page}
          key={page}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
