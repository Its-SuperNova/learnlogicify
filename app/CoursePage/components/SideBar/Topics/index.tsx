import React from "react";
import styles from "./styles.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoExtensionPuzzle } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { FaGear } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

// Define the types for props
interface DropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
}

const Topics: React.FC<DropdownProps> = ({ isOpen, toggleDropdown }) => {
  return (
    <div className={styles.LangContainer}>
      <div className={styles.langHeader} onClick={toggleDropdown}>
        <h1 className={styles.langTitle}>Topics</h1>
        {isOpen ? (
          <IoMdArrowDropup size={25} />
        ) : (
          <IoMdArrowDropdown size={25} />
        )}
      </div>
      <div className={`${styles.languages} ${isOpen ? styles.visible : ""}`}>
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
