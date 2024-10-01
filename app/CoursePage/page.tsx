"use client"
import React, { useState } from "react";
import styles from "./styles.module.css";
import { RxCross1 } from "react-icons/rx";
import Sidebar from "./components/SideBar"; // Full Sidebar
import CollapsedSidebar from "./components/SidebarCollapsed"; // Collapsed Sidebar
import Header from "./components/Header"; // Importing the header component
import HamburgerMenu from "../components/CourseHamburger";
import CourseBody from "./components/CourseBody"; // Component displaying courses

const Course = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);

  // State to store the selected filters (language, topic, level)
  const [filters, setFilters] = useState({
    language: "All",
    topic: "All",
    level: "All",
  });

  // State to manage availability toggle
  const [isAvailableOnly, setIsAvailableOnly] = useState(false);

  // Function to handle the collapse toggle
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Function to handle mobile sidebar toggle
  const toggleMobileSidebar = () => {
    setIsMobileSidebarVisible(!isMobileSidebarVisible);
  };

  // Function to handle availability toggle
  const toggleAvailability = () => {
    setIsAvailableOnly(!isAvailableOnly); // Toggle the availability state
  };

  // Function to handle filter changes from the Sidebar
  const handleFilterChange = (newFilters: {
    language: string;
    topic: string;
    level: string;
  }) => {
    setFilters(newFilters); // Update filters state when Sidebar changes
  };

  return (
    <>
      <HamburgerMenu />
      <div className={styles.container}>
        {/* Sidebar */}
        <div
          className={`${styles.sidebar} ${
            isCollapsed ? styles.collapsed : ""
          } ${isMobileSidebarVisible ? styles.mobileSidebarVisible : ""}`}
        >
          <button
            className={styles.closeMobileSidebar}
            onClick={toggleMobileSidebar}
          >
            <RxCross1 size={20} />
          </button>

          {/* Dynamically switch between full sidebar and collapsed sidebar */}
          {isCollapsed ? (
            <CollapsedSidebar onFilterChange={handleFilterChange} /> // Pass handleFilterChange to CollapsedSidebar
          ) : (
            <Sidebar onFilterChange={handleFilterChange} /> // Pass handleFilterChange to Sidebar
          )}
        </div>

        {/* Main Content */}
        <div className={styles.main}>
          {/* Import and use the Header component */}
          <Header
            isCollapsed={isCollapsed}
            toggleSidebar={toggleSidebar}
            toggleMobileSidebar={toggleMobileSidebar}
            toggleAvailability={toggleAvailability} // Pass toggleAvailability
            isAvailableOnly={isAvailableOnly} // Pass isAvailableOnly state
          />
          <div className={styles.body}>
            {/* Pass the filters and availability toggle to CourseBody */}
            <CourseBody
              selectedLanguage={filters.language}
              selectedTopic={filters.topic}
              selectedLevel={filters.level}
              isAvailableOnly={isAvailableOnly} // Pass isAvailableOnly state
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
