import React from "react";
import styles from "./styles.module.css";

const LoginButton = () => {
  return (
    <div className={styles.buttons}>
      <button className={`${styles.btnHover} ${styles.color7}`}>Login</button>
    </div>
  );
};

export default LoginButton;
