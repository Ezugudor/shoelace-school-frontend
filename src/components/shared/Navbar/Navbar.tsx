import React, { FC } from "react";
import { useNavigate } from "react-router";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    //TODO: Invalidate Token here
    navigate("/login");
  };

  return (
    <div className={styles.Container}>
      <a href="#" className={styles.LogoutBtn} onClick={handleLogout}>
        Logout
      </a>
      <div className={styles.Clearfix}></div>
    </div>
  );
};

export default Navbar;
