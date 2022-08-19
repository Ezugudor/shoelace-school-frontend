import React, { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { UserLogin, UserLoginKeys } from "../../../models/User";
import Form from "./Form/Form";
import styles from "./Login.module.css";

const emptyUserObj: UserLogin = { username: "", password: "" };
export const Login: FC = () => {
  const [userCredential, setUserCredential] = useState<UserLogin>(emptyUserObj);
  const navigate = useNavigate();

  const setUserField = (key: UserLoginKeys, value: string) => {
    const cUser = { ...userCredential };
    cUser[key] = value;
    setUserCredential(cUser);
  };

  const handleUserLogin = (e: FormEvent) => {
    e.preventDefault();

    console.log("user credentials:", userCredential);
    navigate("/");
  };

  return (
    <>
      <div className={styles.InsideBody}>
        <aside className={styles.LayoutLeft}></aside>
        <aside className={styles.LayoutRight}>
          <main className={styles.FormCont}>
            <Form
              credentials={userCredential}
              setFieldValue={setUserField}
              submit={handleUserLogin}
            />
          </main>
        </aside>
      </div>
    </>
  );
};
