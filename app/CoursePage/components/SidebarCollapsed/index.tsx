import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaPython, FaJava, FaJsSquare } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";

interface CollapseSidebarProps {
  onFilterChange: (filters: {
    language: string;
    topic: string;
    level: string;
  }) => void; // Function to handle filter change
}

const CollapseSidebar: React.FC<CollapseSidebarProps> = ({
  onFilterChange,
}) => {
  // State to keep track of the selected filters
  const [selectedFilter, setSelectedFilter] = useState({
    language: "All",
    topic: "All",
    level: "All",
  });

  // Function to handle when a language is selected or deselected
  const handleLanguageClick = (language: string) => {
    const newLanguage = selectedFilter.language === language ? "All" : language;
    const updatedFilters = { ...selectedFilter, language: newLanguage };
    setSelectedFilter(updatedFilters);
    onFilterChange(updatedFilters); // Pass all selected filters
  };

  // Function to handle when a topic is selected or deselected
  const handleTopicClick = (topic: string) => {
    const newTopic = selectedFilter.topic === topic ? "All" : topic;
    const updatedFilters = { ...selectedFilter, topic: newTopic };
    setSelectedFilter(updatedFilters);
    onFilterChange(updatedFilters); // Pass all selected filters
  };

  // Function to handle when a level is selected or deselected
  const handleLevelClick = (level: string) => {
    const newLevel = selectedFilter.level === level ? "All" : level;
    const updatedFilters = { ...selectedFilter, level: newLevel };
    setSelectedFilter(updatedFilters);
    onFilterChange(updatedFilters); // Pass all selected filters
  };

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
        <div
          className={`${styles.icon} ${
            selectedFilter.language === "python" ? styles.selected : ""
          }`}
          data-name="Python"
          onClick={() => handleLanguageClick("python")}
        >
          <FaPython size={23} />
        </div>
        <div
          className={`${styles.icon} ${
            selectedFilter.language === "c" ? styles.selected : ""
          }`}
          data-name="C"
          onClick={() => handleLanguageClick("c")}
        >
          <img className={styles.c} src="SVG/icons/c-program.svg" alt="C" />
        </div>
        <div
          className={`${styles.icon} ${
            selectedFilter.language === "cpp" ? styles.selected : ""
          }`}
          data-name="C++"
          onClick={() => handleLanguageClick("cpp")}
        >
          <SiCplusplus size={23} />
        </div>
        <div
          className={`${styles.icon} ${
            selectedFilter.language === "java" ? styles.selected : ""
          }`}
          data-name="Java"
          onClick={() => handleLanguageClick("java")}
        >
          <FaJava size={23} />
        </div>
        <div
          className={`${styles.icon} ${
            selectedFilter.language === "javascript" ? styles.selected : ""
          }`}
          data-name="JavaScript"
          onClick={() => handleLanguageClick("javascript")}
        >
          <FaJsSquare size={23} />
        </div>
        <div
          className={`${styles.icon} ${
            selectedFilter.language === "html-css" ? styles.selected : ""
          }`}
          data-name="HTML / CSS"
          onClick={() => handleLanguageClick("html-css")}
        >
          <IoLogoHtml5 size={23} />
        </div>
      </div>

      <div className={styles.TopicContainer}>
        <div
          className={`${styles.icon} ${
            selectedFilter.topic === "problem-solving" ? styles.selected : ""
          }`}
          data-name="Problem Solving"
          onClick={() => handleTopicClick("problem-solving")}
        >
          <FaPython size={23} />
        </div>
        <div
          className={`${styles.icon} ${
            selectedFilter.topic === "data-structure" ? styles.selected : ""
          }`}
          data-name="Data Structures"
          onClick={() => handleTopicClick("data-structure")}
        >
          <SiCplusplus size={23} />
        </div>
        <div
          className={`${styles.icon} ${
            selectedFilter.topic === "algorithms" ? styles.selected : ""
          }`}
          data-name="Algorithms"
          onClick={() => handleTopicClick("algorithms")}
        >
          <FaJava size={23} />
        </div>
      </div>

      <div className={styles.LevelContainer}>
        <div
          className={`${styles.icon} ${
            selectedFilter.level === "Beginner" ? styles.selected : ""
          }`}
          data-name="Beginner"
          onClick={() => handleLevelClick("Beginner")}
        >
          <FaPython size={23} />
        </div>
        <div
          className={`${styles.icon} ${
            selectedFilter.level === "Intermediate" ? styles.selected : ""
          }`}
          data-name="Intermediate"
          onClick={() => handleLevelClick("Intermediate")}
        >
          <SiCplusplus size={23} />
        </div>
        <div
          className={`${styles.icon} ${
            selectedFilter.level === "Advanced" ? styles.selected : ""
          }`}
          data-name="Advanced"
          onClick={() => handleLevelClick("Advanced")}
        >
          <FaJava size={23} />
        </div>
      </div>
    </div>
  );
};

export default CollapseSidebar;
