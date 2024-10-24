import React, { useState } from "react";
import styles from "./styles.module.css";

interface SideBarProps {
  onFilterChange: (category: string, value: string, isActive: boolean) => void;
  selectedTab: string;
}

const SideBar: React.FC<SideBarProps> = ({ onFilterChange, selectedTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterClick = (category: string, value: string) => {
    const isActive = document
      .getElementById(value)
      ?.classList.contains(styles.activeFilter);
    onFilterChange(category, value, !isActive);
    document.getElementById(value)?.classList.toggle(styles.activeFilter);
  };

  const renderFilters = () => {
    if (selectedTab === "AllBootcamps") {
      return (
        <div className={styles.filterCategory}>
          <h3 className={styles.h3}>Languages</h3>
          <ul className={styles.ul}>
            <li
              id="python"
              onClick={() => handleFilterClick("languageId", "python")}
            >
              Python
            </li>
            <li id="c" onClick={() => handleFilterClick("languageId", "c")}>
              C
            </li>
            <li id="cpp" onClick={() => handleFilterClick("languageId", "cpp")}>
              C++
            </li>
            <li
              id="java"
              onClick={() => handleFilterClick("languageId", "java")}
            >
              Java
            </li>
            <li
              id="html-css"
              onClick={() => handleFilterClick("languageId", "html-css")}
            >
              Web Development
            </li>
            <li id="js" onClick={() => handleFilterClick("languageId", "js")}>
              JavaScript
            </li>
            <li
              id="database"
              onClick={() => handleFilterClick("languageId", "database")}
            >
              Database
            </li>
          </ul>
        </div>
      );
    }

    if (selectedTab === "CompanySpecific") {
      return (
        <>
          <div className={styles.filterCategory}>
            <h3 className={styles.h3}>Companies</h3>
            <ul className={styles.ul}>
              <li
                id="accenture"
                onClick={() => handleFilterClick("companyId", "accenture")}
              >
                Accenture
              </li>
              <li
                id="capgemini"
                onClick={() => handleFilterClick("companyId", "capgemini")}
              >
                Capgemini
              </li>
              <li
                id="tcs-ninja"
                onClick={() => handleFilterClick("companyId", "tcs-ninja")}
              >
                TCS Ninja
              </li>
              <li
                id="amcat"
                onClick={() => handleFilterClick("companyId", "amcat")}
              >
                Amcat
              </li>
              <li
                id="cocubes"
                onClick={() => handleFilterClick("companyId", "cocubes")}
              >
                Cocubes
              </li>
              <li
                id="infytq"
                onClick={() => handleFilterClick("companyId", "infytq")}
              >
                InfyTQ
              </li>
              <li
                id="tcs-codevita"
                onClick={() => handleFilterClick("companyId", "tcs-codevita")}
              >
                TCS Codevita
              </li>
              <li
                id="cts-genc"
                onClick={() => handleFilterClick("companyId", "cts-genc")}
              >
                CTS Genc
              </li>
            </ul>
          </div>
          <div className={styles.filterCategory}>
            <h3 className={styles.h3}>Category</h3>
            <ul className={styles.ul}>
              <li
                id="service-based"
                onClick={() => handleFilterClick("category", "service-based")}
              >
                Service Based
              </li>
              <li
                id="product-based"
                onClick={() => handleFilterClick("category", "product-based")}
              >
                Product Based
              </li>
            </ul>
          </div>
        </>
      );
    }

    // Default filters for AllCourses tab
    return (
      <>
        <div className={styles.filterCategory}>
          <h3 className={styles.h3}>Languages</h3>
          <ul className={styles.ul}>
            <li
              id="python"
              onClick={() => handleFilterClick("languageId", "python")}
            >
              Python
            </li>
            <li id="c" onClick={() => handleFilterClick("languageId", "c")}>
              C
            </li>
            <li id="cpp" onClick={() => handleFilterClick("languageId", "cpp")}>
              C++
            </li>
            <li
              id="java"
              onClick={() => handleFilterClick("languageId", "java")}
            >
              Java
            </li>
            <li
              id="html-css"
              onClick={() => handleFilterClick("languageId", "html-css")}
            >
              HTML/CSS
            </li>
            <li id="js" onClick={() => handleFilterClick("languageId", "js")}>
              JavaScript
            </li>
            <li
              id="database"
              onClick={() => handleFilterClick("languageId", "database")}
            >
              Database
            </li>
          </ul>
        </div>
        <div className={styles.filterCategory}>
          <h3 className={styles.h3}>Topics</h3>
          <ul className={styles.ul}>
            <li
              id="problem-solving"
              onClick={() => handleFilterClick("topicId", "problem-solving")}
            >
              Problem Solving
            </li>
            <li
              id="data-structure"
              onClick={() => handleFilterClick("topicId", "data-structure")}
            >
              Data Structure
            </li>
            <li
              id="algorithms"
              onClick={() => handleFilterClick("topicId", "algorithms")}
            >
              Algorithms
            </li>
            <li
              id="graph-theory"
              onClick={() => handleFilterClick("topicId", "graph-theory")}
            >
              Graph Theory
            </li>
            <li id="dbms" onClick={() => handleFilterClick("topicId", "dbms")}>
              DBMS
            </li>
          </ul>
        </div>
        <div className={styles.filterCategory}>
          <h3 className={styles.h3}>Level</h3>
          <ul className={styles.ul}>
            <li
              id="Beginner"
              onClick={() => handleFilterClick("Level", "Beginner")}
            >
              Beginner
            </li>
            <li
              id="Intermediate"
              onClick={() => handleFilterClick("Level", "Intermediate")}
            >
              Intermediate
            </li>
            <li
              id="Advanced"
              onClick={() => handleFilterClick("Level", "Advanced")}
            >
              Advanced
            </li>
          </ul>
        </div>
      </>
    );
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
          <h2 className={styles.title}>Catalog</h2>
          <div className={styles.sepcon}>
            <div className={styles.separator}></div>
          </div>
          {renderFilters()}
        </div>
      </div>
    </>
  );
};

export default SideBar;
