import React from "react";
import styles from "./styles.module.css";
import { FaPython, FaJava, FaJsSquare } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";

const CollapseSidebar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src="SVG/logo/logo-icon.svg"
          alt="Learnlogicify icon"
        />
      </div>
      <div className={styles.langContainer}>
        <div className={styles.icon} data-name="Python">
          <FaPython size={23} />
        </div>
        <div className={styles.icon} data-name="C">
          <img className={styles.c} src="SVG/icons/c-program.svg" alt="C" />
        </div>
        <div className={styles.icon} data-name="C++">
          <SiCplusplus size={23} />
        </div>
        <div className={styles.icon} data-name="Java">
          <FaJava size={23} />
        </div>
        <div className={styles.icon} data-name="JavaScript">
          <FaJsSquare size={23} />
        </div>
        <div className={styles.icon} data-name="HTML / CSS">
          <IoLogoHtml5 size={23} />
        </div>
      </div>
      <div className={styles.langContainer}>
        <div className={styles.icon} data-name="Python">
          <FaPython size={23} />
        </div>
        <div className={styles.icon} data-name="C">
          <img className={styles.c} src="SVG/icons/c-program.svg" alt="C" />
        </div>
        <div className={styles.icon} data-name="C++">
          <SiCplusplus size={23} />
        </div>
        <div className={styles.icon} data-name="Java">
          <FaJava size={23} />
        </div>
      </div>
      <div className={styles.langContainer}>
        <div className={styles.icon} data-name="Python">
          <FaPython size={23} />
        </div>
        <div className={styles.icon} data-name="C">
          <img className={styles.c} src="SVG/icons/c-program.svg" alt="C" />
        </div>
      </div>
    </div>
  );
};

export default CollapseSidebar;
