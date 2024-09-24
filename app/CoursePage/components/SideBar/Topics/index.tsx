import React, { useState } from "react";
import styles from "./styles.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoExtensionPuzzle } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { FaGear } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

const Topics = () => {
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
        <h1 className={styles.langTitle}>Topics</h1>
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
            <IoExtensionPuzzle size={23} />
          </div>
          <p className={styles.langName}>Problem Solving</p>
        </div>
        <div className={styles.lang}>
          <div className={styles.icon}>
            <SlGraph size={23} />
          </div>
          <p className={styles.langName}>Data Structures</p>
        </div>
        <div className={styles.lang}>
          <div className={styles.icon}>
            <FaGear size={23} />
          </div>
          <p className={styles.langName}>Algorithms</p>
        </div>
        <div className={styles.lang}>
          <div className={styles.icon}>
            <FaDatabase size={23} />
          </div>
          <p className={styles.langName}>DBMS</p>
        </div>
      </div>
    </div>
  );
};

export default Topics;
