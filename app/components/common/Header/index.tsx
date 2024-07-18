// header/index.tsx
"use client"
import React, { useState } from "react";
import styles from "./styles.module.css";
import NavMenu from "./NavMenu";
import Logo from "../../images/lightLogo";
import LoginButton from "../buttons/login";
import Link from "next/link";
import MenuIcon from "../SVG/icons/hamburger";
import Offcanvas from "../offCanvasArea";

const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const handleOffcanvasOpen = () => {
    setIsOffcanvasOpen(true);
  };

  const handleOffcanvasClose = () => {
    setIsOffcanvasOpen(false);
  };

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
          <div className={styles.Menu} onClick={handleOffcanvasOpen}>
            <MenuIcon />
          </div>
        </div>
      </div>
      <Offcanvas isOpen={isOffcanvasOpen} onClose={handleOffcanvasClose} />
    </div>
  );
};

export default Header;
