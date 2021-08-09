import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

import styles from "./User.HeaderNav.module.css";

import { ReactComponent as MinhasFotos } from "../../assets/feed.svg";
import { ReactComponent as Stats } from "../../assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../assets/adicionar.svg";
import { ReactComponent as Leave } from "../../assets/sair.svg";

import useMedia from "../../hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          arial-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" activeClassName={styles.active}>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/stats" activeClassName={styles.active}>
          <Stats />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/post" activeClassName={styles.active}>
          <AddPhoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button className={styles.button} onClick={userLogout}>
          <Leave />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};
export default UserHeaderNav;
