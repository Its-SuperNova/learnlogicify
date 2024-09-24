"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaArrowLeft, FaArrowRight, FaBars} from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Sidebar from "./components/SideBar";
const Course = () => {
  // State to manage the collapsed/expanded state of the sidebar
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
    <div className={styles.container}>
      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""} ${
          isMobileSidebarVisible ? styles.mobileSidebarVisible : ""
        }`}
      >
        <button
          className={styles.closeMobileSidebar}
          onClick={toggleMobileSidebar}
        >
          <RxCross1 size={20} />
        </button>
        
        <Sidebar/>
      </div>

      {/* Main Content */}
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.collapseContainer}>
            {/* Menu Button for Mobile Screens */}
            <button
              className={styles.collapseButtonMobile}
              onClick={toggleMobileSidebar}
            >
              <FaBars size={20} />
            </button>

            {/* Collapse Button for Desktop Screens */}
            <button
              className={styles.collapseButtonDesktop}
              onClick={toggleSidebar}
            >
              {isCollapsed ? (
                <FaArrowRight size={20} />
              ) : (
                <FaArrowLeft size={20} />
              )}
            </button>
          </div>
        </div>
        <div className={styles.body}></div>
      </div>
    </div>
  );
};

export default Course;
