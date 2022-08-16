import React, { FC } from "react";
import Modal from "../../HOC/Modal/Modal";
import styles from "./EditSchoolModal.module.css";

interface EditSchoolModalProps {
  toggleModal: any;
  show: boolean;
}

const EditSchoolModal: FC<EditSchoolModalProps> = props => {
  return (
    <Modal title="Checkikfdk" show={props.show} click={props.toggleModal}>
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
    </Modal>
  );
};

export default EditSchoolModal;
