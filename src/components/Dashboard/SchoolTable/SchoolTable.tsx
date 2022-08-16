import React, { FC } from "react";
import styles from "./SchoolTable.module.css";

const SchoolTable: FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.TableHead}>
        <h1>Schools:</h1>
      </div>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>sn</th>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>A03433HY7</td>
            <td>Oxford University</td>
            <td>United States</td>
            <td>
              <a
                href="#"
                className={`${styles.ActionBtn} ${styles.ActionBtnEdit}`}
              >
                Edit
              </a>
              <a
                href="#"
                className={`${styles.ActionBtn} ${styles.ActionBtnDelete}`}
              >
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SchoolTable;
