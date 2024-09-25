import React from "react";
import styles from "./styles.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaPython, FaJava, FaJsSquare } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";

// Define the types for props
interface DropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
}

const Level: React.FC<DropdownProps> = ({ isOpen, toggleDropdown }) => {
  return (
    <div className={styles.LangContainer}>
      <div className={styles.langHeader} onClick={toggleDropdown}>
        <h1 className={styles.langTitle}>Level</h1>
        {isOpen ? (
          <IoMdArrowDropup size={25} />
        ) : (
          <IoMdArrowDropdown size={25} />
        )}
      </div>
      <div className={`${styles.languages} ${isOpen ? styles.visible : ""}`}>
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
