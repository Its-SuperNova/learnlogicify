import React from "react";
import styles from "./styles.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoExtensionPuzzle } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { FaGear } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

interface TopicsProps {
  isExpanded: boolean;
  onToggle: () => void;
  selectedTopic: string; // Selected topic passed from parent
  setSelectedTopic: (topic: string) => void; // Function to set the selected topic
}

const Topics: React.FC<TopicsProps> = ({
  isExpanded,
  onToggle,
  selectedTopic,
  setSelectedTopic,
}) => {
  const handleTopicClick = (topic: string) => {
    // If the same topic is clicked again, reset it (deselect it)
    if (selectedTopic === topic) {
      setSelectedTopic("All"); // Deselect and return to "All"
    } else {
      setSelectedTopic(topic); // Set the new selected topic
    }
  };

  return (
    <div className={styles.LangContainer}>
      <div className={styles.langHeader} onClick={onToggle}>
        <h1 className={styles.langTitle}>Topics</h1>
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
            selectedTopic === "problem-solving" ? styles.selected : ""
          }`}
          onClick={() => handleTopicClick("problem-solving")}
        >
          <div className={styles.icon}>
            <IoExtensionPuzzle size={23} />
          </div>
          <p className={styles.langName}>Problem Solving</p>
        </div>
        <div
          className={`${styles.lang} ${
            selectedTopic === "data-structure" ? styles.selected : ""
          }`}
          onClick={() => handleTopicClick("data-structure")}
        >
          <div className={styles.icon}>
            <SlGraph size={23} />
          </div>
          <p className={styles.langName}>Data Structures</p>
        </div>
        <div
          className={`${styles.lang} ${
            selectedTopic === "algorithms" ? styles.selected : ""
          }`}
          onClick={() => handleTopicClick("algorithms")}
        >
          <div className={styles.icon}>
            <FaGear size={23} />
          </div>
          <p className={styles.langName}>Algorithms</p>
        </div>
        <div
          className={`${styles.lang} ${
            selectedTopic === "dbms" ? styles.selected : ""
          }`}
          onClick={() => handleTopicClick("dbms")}
        >
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
