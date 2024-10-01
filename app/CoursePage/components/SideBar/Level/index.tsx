import React from "react";
import styles from "./styles.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

interface LevelProps {
  isExpanded: boolean;
  onToggle: () => void;
  selectedLevel: string; // Selected level passed from parent
  setSelectedLevel: (level: string) => void; // Function to set the selected level
}

const Level: React.FC<LevelProps> = ({
  isExpanded,
  onToggle,
  selectedLevel,
  setSelectedLevel,
}) => {
  const handleLevelClick = (level: string) => {
    // Toggle selection: if already selected, deselect it
    if (selectedLevel === level) {
      setSelectedLevel("All"); // Reset to "All" (deselect)
    } else {
      setSelectedLevel(level); // Set new selected level
    }
  };

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
        <div
          className={`${styles.lang} ${
            selectedLevel === "Beginner" ? styles.selected : ""
          }`}
          onClick={() => handleLevelClick("Beginner")}
        >
          <div className={styles.icon}>
            <FaPython size={23} />
          </div>
          <p className={styles.langName}>Beginner</p>
        </div>
        <div
          className={`${styles.lang} ${
            selectedLevel === "Intermediate" ? styles.selected : ""
          }`}
          onClick={() => handleLevelClick("Intermediate")}
        >
          <div className={styles.icon}>
            <SiCplusplus size={23} />
          </div>
          <p className={styles.langName}>Intermediate</p>
        </div>
        <div
          className={`${styles.lang} ${
            selectedLevel === "Advanced" ? styles.selected : ""
          }`}
          onClick={() => handleLevelClick("Advanced")}
        >
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
