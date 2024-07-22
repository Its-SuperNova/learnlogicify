// header/index.tsx
"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import NavMenu from "./NavMenu";
import sideNav from "../../hamburger/nav";
import Logo from "../../images/logo/lightLogo";
import LoginButton from "../buttons/login";
import Link from "next/link";
import MenuIcon from "../SVG/icons/hamburger";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <div className={styles.left}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.middle}>
          <NavMenu />
        </div>
        <div className={styles.right}>
          <div className={styles.login}>
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
