import React, { useState } from "react";
import Drawer from "./components/drawer";
import styles from "./styles.module.css";
import Filter from "./components/filter";
import { IoIosSearch } from "react-icons/io";
import AllCourse from "./components/AllCourses";
import CookingCourse from "../components/CourseBody/CookingCourse";

const Mobile = () => {
  const [activeTab, setActiveTab] = useState("All Courses");
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string[]>([]);
  const [isAvailableOnly, setIsAvailableOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const drawerContent = (
    <Filter
      selectedLanguage={selectedLanguage}
      setSelectedLanguage={setSelectedLanguage}
      selectedTopic={selectedTopic}
      setSelectedTopic={setSelectedTopic}
      selectedLevel={selectedLevel}
      setSelectedLevel={setSelectedLevel}
      setIsAvailableOnly={setIsAvailableOnly}
    />
  );

  const renderContent = () => {
    switch (activeTab) {
      case "All Courses":
        return (
          <div className={styles.content}>
            <AllCourse
              selectedLanguage={selectedLanguage} // Pass the array directly
              selectedTopic={selectedTopic} // Pass the array directly
              selectedLevel={selectedLevel} // Pass the array directly
              isAvailableOnly={isAvailableOnly}
              searchTerm={searchTerm}
            />
          </div>
        );
      case "All Bootcamps":
      case "Company Specific":
        return (
          <div className={styles.content}>
            <CookingCourse />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="SVG/logo/logo-icon.svg" alt="" />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.title}>
          <h1>
            Discover our Courses{" "}
            <span className={styles.entite}>&#127919;</span>
          </h1>
        </div>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search Courses"
            className={styles.searchInput}
            value={searchTerm} // Bind searchTerm to the input
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state
          />
          <IoIosSearch className={styles.searchIcon} />
        </div>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${
              activeTab === "All Courses" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("All Courses")}
          >
            All Courses
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "All Bootcamps" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("All Bootcamps")}
          >
            All Bootcamps
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "Company Specific" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("Company Specific")}
          >
            Company Specific
          </button>
        </div>
        {renderContent()}
      </div>
      <Drawer content={drawerContent} />
    </div>
  );
};

export default Mobile;
