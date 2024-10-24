import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Languages from "./Languages";
import Topics from "./Topics";
import Level from "./Level";

interface SidebarProps {
  onFilterChange: (filters: {
    language: string;
    topic: string;
    level: string;
  }) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Languages",
  ]); // Initially, only "Languages" is expanded
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All"); // Manage selected Language
  const [selectedTopic, setSelectedTopic] = useState<string>("All"); // Manage selected Topic
  const [selectedLevel, setSelectedLevel] = useState<string>("All"); // Manage selected Level

  const handleToggle = (section: string) => {
    setExpandedSections((prevSections) =>
      prevSections.includes(section)
        ? prevSections.filter((s) => s !== section)
        : [...prevSections, section]
    );
  };

  // UseEffect to send filter values when any of them change
  useEffect(() => {
    onFilterChange({
      language: selectedLanguage,
      topic: selectedTopic,
      level: selectedLevel,
    });
  }, [selectedLanguage, selectedTopic, selectedLevel, onFilterChange]);

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

      {/* Languages Filter */}
      <Languages
        isExpanded={expandedSections.includes("Languages")}
        onToggle={() => handleToggle("Languages")}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

      {/* Topics Filter */}
      <Topics
        isExpanded={expandedSections.includes("Topics")}
        onToggle={() => handleToggle("Topics")}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />

      {/* Level Filter */}
      <Level
        isExpanded={expandedSections.includes("Level")}
        onToggle={() => handleToggle("Level")}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
      />
    </div>
  );
};

export default Sidebar;
