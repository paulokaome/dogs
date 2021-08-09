import React from "react";
import styles from "./Button.module.css";

const Buttonjs = ({ children , ...props }) => {
  return <button {...props} className={styles.button}>{children}</button>;
};
export default Buttonjs;
