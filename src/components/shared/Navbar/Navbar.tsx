import React, { FC } from "react";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <div className={styles.Container}>
      <a href="#" className={styles.LogoutBtn}>
        Logout
      </a>
      <div className={styles.Clearfix}></div>
    </div>
  );
};

export default Navbar;
