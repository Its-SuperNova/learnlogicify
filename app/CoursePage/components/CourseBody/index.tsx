import React, { useState } from "react";
import styles from "./styles.module.css";
import { IoIosSearch } from "react-icons/io";
import AllCourses from "./AllCourses"; // Import the AllCourses component
import AllBootCamps from "./AllBootcamps"; // Placeholder for bootcamps
import CompanySpecific from "./CompanySpesific"; // Placeholder for company-specific courses

interface CourseMainProps {
  selectedLanguage: string;
  selectedTopic: string;
  selectedLevel: string;
  isAvailableOnly: boolean;
}

const CourseMain: React.FC<CourseMainProps> = ({
  selectedLanguage,
  selectedTopic,
  selectedLevel,
  isAvailableOnly,
}) => {
  const [activeTab, setActiveTab] = useState("All Courses");
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Update search term as user types
  };

  const renderGridContent = () => {
    if (activeTab === "All Courses") {
      return (
        <AllCourses
          selectedLanguage={selectedLanguage}
          selectedTopic={selectedTopic}
          selectedLevel={selectedLevel}
          isAvailableOnly={isAvailableOnly}
          searchTerm={searchTerm} // Pass search term to AllCourses
        />
      );
    }

    if (activeTab === "All BootCamps") {
      return <AllBootCamps />;
    }

    if (activeTab === "Company Specific") {
      return <CompanySpecific />;
    }

    return null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* Tab Section */}
        <div className={styles.tabContainer}>
          <div
            className={`${styles.tab} ${
              activeTab === "All Courses" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("All Courses")}
          >
            All Courses
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "All BootCamps" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("All BootCamps")}
          >
            All BootCamps
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "Company Specific" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("Company Specific")}
          >
            Company Specific
          </div>
        </div>

        {/* Search Box */}
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search Courses"
            className={styles.searchInput}
            value={searchTerm}
            onChange={handleSearchChange} // Handle search input change
          />
          <IoIosSearch className={styles.searchIcon} />
        </div>
      </div>
      {renderGridContent()} {/* Render the filtered content */}
    </div>
  );
};

export default CourseMain;
