import React, { useEffect, useState } from "react";
import UserHeaderNav from "./UserHeaderNav";

import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/conta/stats":
        setTitle("Estatísticas");
        break;
      case "/conta/post":
        setTitle("Postar");
        break;
      default:
        setTitle("Minha Conta");
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};
export default UserHeader;
