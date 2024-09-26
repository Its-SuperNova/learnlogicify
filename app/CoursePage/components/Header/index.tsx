"use client";
import React from "react";
import styles from "./styles.module.css";
import { FaArrowLeft, FaArrowRight, FaBars } from "react-icons/fa6";

const Header = ({
  isCollapsed,
  toggleSidebar,
  toggleMobileSidebar,
}: {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
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
        <div className={styles.title}>
          <h1>
            Discover our Courses{" "}
            <span className={styles.entite}>&#127919;</span>
          </h1>
        </div>
      </div>
      <div className={styles.right}>
        <p>Available Course</p>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
