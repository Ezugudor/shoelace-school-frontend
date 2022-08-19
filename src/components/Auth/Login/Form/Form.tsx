import React, { FC, FormEvent } from "react";
import { UserLogin, UserLoginKeys } from "../../../../models/User";
import styles from "./Form.module.css";

interface FormProps {
  setFieldValue: (key: UserLoginKeys, value: string) => any;
  submit: (e: FormEvent) => any;
  credentials: UserLogin;
}

const Form: FC<FormProps> = props => {
  return (
    <div className={styles.Container}>
      <form action="" className={styles.Form} onSubmit={props.submit}>
        <div className={styles.FieldCont}>
          <input
            value={props.credentials.username}
            onChange={e => {
              props.setFieldValue("username", e.target.value);
            }}
            className={styles.InputField}
            type="text"
            name="username"
            placeholder="Username"
          />
        </div>
        <div className={styles.FieldCont}>
          <input
            value={props.credentials.password}
            onChange={e => {
              props.setFieldValue("password", e.target.value);
            }}
            className={styles.InputField}
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <section className={styles.FormBtnCont}>
          <button type="submit">Login</button>
        </section>
      </form>
    </div>
  );
};

export default Form;
