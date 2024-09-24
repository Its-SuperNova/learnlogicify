import React, { useState } from "react";
import styles from "./styles.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaPython, FaJava, FaJsSquare } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";

const Level = () => {
  // State to manage the dropdown visibility
  const [isLangOpen, setIsLangOpen] = useState(true);
  const [isCollapsing, setIsCollapsing] = useState(false);

  // Function to toggle dropdown
  const toggleLanguages = () => {
    if (isLangOpen) {
      setIsCollapsing(true); // Start collapsing
      setTimeout(() => {
        setIsLangOpen(false); // After timeout, complete collapse
        setIsCollapsing(false); // Reset collapse state
      }, 500); // Match the max-height transition time (0.5s)
    } else {
      setIsLangOpen(true); // Immediately expand
    }
  };

  return (
    <div className={styles.LangContainer}>
      <div className={styles.langHeader} onClick={toggleLanguages}>
        <h1 className={styles.langTitle}>Level</h1>
        {isLangOpen ? (
          <IoMdArrowDropup size={25} /> // Show up arrow when dropdown is open
        ) : (
          <IoMdArrowDropdown size={25} /> // Show down arrow when dropdown is closed
        )}
      </div>
      <div
        className={`${styles.languages} ${isLangOpen ? styles.visible : ""} ${
          isCollapsing ? styles.collapsing : ""
        }`}
      >
        <div className={styles.lang}>
          <div className={styles.icon}>
            <FaPython size={23} />
          </div>
          <p className={styles.langName}>Basic</p>
        </div>
        <div className={styles.lang}>
          <div className={styles.icon}>
            <img className={styles.c} src="SVG/icons/c-program.svg" alt="" />
          </div>
          <p className={styles.langName}>Intermediate</p>
        </div>
        <div className={styles.lang}>
          <div className={styles.icon}>
            <SiCplusplus size={23} />
          </div>
          <p className={styles.langName}>Advanced</p>
        </div>
      </div>
    </div>
  );
};

export default Level;