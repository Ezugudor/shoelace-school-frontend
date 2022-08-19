import React, { FC, FormEvent } from "react";
import { School, SchoolKeys } from "../../../models/Schools";
import Modal from "../../HOC/Modal/Modal";
import styles from "./EditSchoolModal.module.css";

interface EditSchoolModalProps {
  toggleModal: () => any;
  show: boolean;
  selectedSchool: School;
  updateSelectedSchool: (key: SchoolKeys, value: string) => any;
  saveSelectedSchool: (e: FormEvent) => any;
}

const EditSchoolModal: FC<EditSchoolModalProps> = props => {
  return (
    <Modal title="Edit School:" show={props.show} click={props.toggleModal}>
      <div className={styles.Container}>
        <form
          action=""
          className={styles.Form}
          onSubmit={props.saveSelectedSchool}
        >
          <input
            value={props.selectedSchool.name}
            className={styles.InputField}
            onChange={e => {
              props.updateSelectedSchool("name", e.target.value);
            }}
            type="text"
            name="school_name"
            placeholder="School Name e.g Oxford University"
          />
          <input
            value={props.selectedSchool.location}
            className={styles.InputField}
            onChange={e => {
              props.updateSelectedSchool("location", e.target.value);
            }}
            type="text"
            name="school_location"
            placeholder="School Location e.g United States"
          />
          <button type="submit" className={styles.InputBtn}>
            Update School
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default EditSchoolModal;
