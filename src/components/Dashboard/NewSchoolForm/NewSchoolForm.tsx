import React, { FC, FormEvent } from "react";
import { School, SchoolKeys } from "../../../models/Schools";
import styles from "./NewSchoolForm.module.css";

interface NewSchoolFormProps {
  setFieldValue: (key: SchoolKeys, value: string) => any;
  addSchool: (e: FormEvent) => any;
  school: School;
}

const NewSchoolForm: FC<NewSchoolFormProps> = props => {
  return (
    <div className={styles.Container}>
      <form action="" className={styles.Form} onSubmit={props.addSchool}>
        <input
          value={props.school.name}
          onChange={e => {
            props.setFieldValue("name", e.target.value);
          }}
          className={styles.InputField}
          type="text"
          name="school_name"
          placeholder="School Name e.g Oxford University"
        />
        <input
          value={props.school.location}
          onChange={e => {
            props.setFieldValue("location", e.target.value);
          }}
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
