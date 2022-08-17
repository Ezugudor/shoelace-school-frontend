import React, { FC } from "react";
import { School } from "../Dashboard";
import styles from "./SchoolTable.module.css";

interface SchoolTableProps {
  deleteSchool: (id: string) => any;
  editSchool: (id: string) => any;
  schools: School[];
}

const SchoolTable: FC<SchoolTableProps> = props => {
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
          {props.schools.map(school => {
            return (
              <tr>
                <td>1</td>
                <td>A03433HY7</td>
                <td>Oxford University</td>
                <td>United States</td>
                <td>
                  <a
                    href="#"
                    className={`${styles.ActionBtn} ${styles.ActionBtnEdit}`}
                    onClick={() => {
                      props.editSchool("efwfas");
                    }}
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className={`${styles.ActionBtn} ${styles.ActionBtnDelete}`}
                    onClick={() => {
                      props.deleteSchool("efwfas");
                    }}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SchoolTable;
