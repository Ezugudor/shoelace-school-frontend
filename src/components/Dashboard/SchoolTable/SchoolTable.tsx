import React, { FC } from "react";
import { School } from "../../../models/Schools";
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
          {props.schools.map((school, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{school.id}</td>
                <td>{school.name}</td>
                <td>{school.location}</td>
                <td>
                  <a
                    href="#"
                    className={`${styles.ActionBtn} ${styles.ActionBtnEdit}`}
                    onClick={() => {
                      props.editSchool(school.id);
                    }}
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className={`${styles.ActionBtn} ${styles.ActionBtnDelete}`}
                    onClick={() => {
                      props.deleteSchool(school.id);
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
