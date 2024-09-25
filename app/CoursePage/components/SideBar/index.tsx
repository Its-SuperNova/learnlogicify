import React, { useState } from "react";
import styles from "./styles.module.css";
import Languages from "./Languages";
import Topics from "./Topics";
import Level from "./Level";

const Sidebar = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Languages"
  ); // Allow 'string | null'

  const handleToggle = (section: string) => {
    setExpandedSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src="SVG/logo/logo-icon.svg"
            alt="Learnlogicify icon"
          />
        </div>
        <div className={styles.title}>
          <span className={styles.bold}>Catalog</span> / All Courses
        </div>
      </div>

      <Languages
        isExpanded={expandedSection === "Languages"}
        onToggle={() => handleToggle("Languages")}
      />
      <Topics
        isExpanded={expandedSection === "Topics"}
        onToggle={() => handleToggle("Topics")}
      />
      <Level
        isExpanded={expandedSection === "Level"}
        onToggle={() => handleToggle("Level")}
      />
    </div>
  );
};

export default Sidebar;
