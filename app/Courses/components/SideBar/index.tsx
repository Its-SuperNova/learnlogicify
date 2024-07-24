// sidebar/index.tsx
import React, { useState } from "react";
import styles from "./styles.module.css";

interface SideBarProps {
  onFilterChange: (category: string, value: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterClick = (category: string, value: string) => {
    onFilterChange(category, value);
  };

  return (
    <>
      <div
        className={`${styles.sidebarToggle} ${isOpen ? styles.open : ""}`}
        onClick={toggleSidebar}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sidebarContent}>
          <h2>Catalog</h2>
          <div className={styles.filterCategory}>
            <h3>Languages</h3>
            <ul>
              <li onClick={() => handleFilterClick("languageId", "python")}>
                Python
              </li>
              <li onClick={() => handleFilterClick("languageId", "c")}>C</li>
              <li onClick={() => handleFilterClick("languageId", "cpp")}>
                C++
              </li>
              <li onClick={() => handleFilterClick("languageId", "java")}>
                Java
              </li>
              <li onClick={() => handleFilterClick("languageId", "html-css")}>
                HTML/CSS
              </li>
              <li onClick={() => handleFilterClick("languageId", "js")}>
                JavaScript
              </li>
              <li onClick={() => handleFilterClick("languageId", "database")}>
                Database
              </li>
            </ul>
          </div>
          <div className={styles.filterCategory}>
            <h3>Topics</h3>
            <ul>
              <li
                onClick={() => handleFilterClick("topicId", "problem-solving")}
              >
                Problem Solving
              </li>
              <li
                onClick={() => handleFilterClick("topicId", "data-structure")}
              >
                Data Structure
              </li>
              <li onClick={() => handleFilterClick("topicId", "algorithms")}>
                Algorithms
              </li>
              <li onClick={() => handleFilterClick("topicId", "graph-theory")}>
                Graph Theory
              </li>
              <li onClick={() => handleFilterClick("topicId", "dbms")}>DBMS</li>
            </ul>
          </div>
          <div className={styles.filterCategory}>
            <h3>Level</h3>
            <ul>
              <li onClick={() => handleFilterClick("Level", "Beginner")}>
                Beginner
              </li>
              <li onClick={() => handleFilterClick("Level", "Intermediate")}>
                Intermediate
              </li>
              <li onClick={() => handleFilterClick("Level", "Advanced")}>
                Advanced
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
