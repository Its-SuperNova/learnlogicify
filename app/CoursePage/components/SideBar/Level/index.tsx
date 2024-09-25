import React from "react";
import styles from "./styles.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const Level = ({
  isExpanded,
  onToggle,
}: {
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className={styles.LangContainer}>
      <div className={styles.langHeader} onClick={onToggle}>
        <h1 className={styles.langTitle}>Level</h1>
        {isExpanded ? (
          <IoMdArrowDropup size={25} />
        ) : (
          <IoMdArrowDropdown size={25} />
        )}
      </div>
      <div
        className={`${styles.languages} ${isExpanded ? styles.visible : ""}`}
      >
        <div className={styles.lang}>
          <div className={styles.icon}>
            <FaPython size={23} />
          </div>
          <p className={styles.langName}>Basic</p>
        </div>
        <div className={styles.lang}>
          <div className={styles.icon}>
            <SiCplusplus size={23} />
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
