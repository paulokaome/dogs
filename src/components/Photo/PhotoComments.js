import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);
  const commentsSection = useRef(null);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments}${props.single ? styles.single : ""}`}
      >
        {comments.map((data) => (
          <li key={data.comment_ID}>
            <b>{data.comment_author}:</b>
            <span>{data.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};
export default PhotoComments;
