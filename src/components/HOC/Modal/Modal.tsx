import React, { FC, ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  title: string;
  show: boolean;
  click: any;
  children: ReactNode;
}

const Modal: FC<ModalProps> = props => {
  return props.show ? (
    <div className={styles.Overlay} onClick={props.click} data-testid="overlay">
      <div className={styles.Container} onClick={e => e.stopPropagation()}>
        <header>{props.title}</header>
        <div>{props.children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
