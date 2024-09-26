"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { RxCross1 } from "react-icons/rx";
import Sidebar from "./components/SideBar"; // Full Sidebar
import CollapsedSidebar from "./components/SidebarCollapsed"; // Collapsed Sidebar
import Header from "./components/Header"; // Importing the header component
import HamburgerMenu from "../components/CourseHamburger";
import CourseBody from "./components/CourseBody"
const Course = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);

  // Function to handle the collapse toggle
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Function to handle mobile sidebar toggle
  const toggleMobileSidebar = () => {
    setIsMobileSidebarVisible(!isMobileSidebarVisible);
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
            <CollapsedSidebar /> // Show CollapsedSidebar when collapsed
          ) : (
            <Sidebar /> // Show full Sidebar when not collapsed
          )}
        </div>

        {/* Main Content */}
        <div className={styles.main}>
          {/* Import and use the Header component */}
          <Header
            isCollapsed={isCollapsed}
            toggleSidebar={toggleSidebar}
            toggleMobileSidebar={toggleMobileSidebar}
          />
          <div className={styles.body}>
            <CourseBody />
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
