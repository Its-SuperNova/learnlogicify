import React from "react";
import styles from "./styles.module.css";
import NavMenu from "./NavMenu"
import Logo from "../../images/lightLogo";
import LoginButton from "../buttons/login";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <div className={styles.left}>
        </div>
        <div className={styles.middle}>
          <NavMenu/>
        </div>
        <div className={styles.right}>
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
