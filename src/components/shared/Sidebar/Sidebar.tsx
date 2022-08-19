import React, { FC } from "react";
import styles from "./Sidebar.module.css";
const Sidebar: FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Logo}></div>
      <ul>
        <li>
          <a href="#">Dashboard</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
