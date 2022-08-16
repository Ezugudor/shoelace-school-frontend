import React, { FC } from "react";
import styles from "./NewSchoolForm.module.css";
const NewSchoolForm: FC = () => {
  return (
    <div className={styles.Container}>
      <form action="" method="post" className={styles.Form}>
        <input
          className={styles.InputField}
          type="text"
          name="school_name"
          placeholder="School Name e.g Oxford University"
        />
        <input
          className={styles.InputField}
          type="text"
          name="school_location"
          placeholder="School Location e.g United States"
        />
        <button type="submit" className={styles.InputBtn}>
          Add School
        </button>
      </form>
    </div>
  );
};

export default NewSchoolForm;
