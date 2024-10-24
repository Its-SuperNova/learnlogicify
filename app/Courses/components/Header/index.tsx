"use client";
import React from "react";
import styles from "./styles.module.css";
import { FaArrowLeft, FaArrowRight, FaBars } from "react-icons/fa6";

interface HeaderProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  toggleAvailability: () => void; // Function to handle availability toggle
  isAvailableOnly: boolean; // Boolean state for available courses toggle
}

const Header: React.FC<HeaderProps> = ({
  isCollapsed,
  toggleSidebar,
  toggleMobileSidebar,
  toggleAvailability, // Prop for handling availability toggle
  isAvailableOnly, // Current availability state
}) => {
  return (
    <div
      className={`${styles.header} ${
        isCollapsed ? styles.collapsedHeader : styles.expandedHeader
      }`}
    >
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
      <div className={styles.middle}>
        <img src="SVG/logo/logo-icon.svg" alt="" />
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.right}>
          <p>Available Courses</p>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={isAvailableOnly} // Reflect the current state
              onChange={toggleAvailability} // Handle availability toggle
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
