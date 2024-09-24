import React, { useState } from "react";
import styles from "./styles.module.css";
import Languages from "./Languages"; // Import Languages Component
import Topics from "./Topics";
import Level from "./Level";
const Sidebar = () => {
  const TabTitle = "All Courses";

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
          <span className={styles.bold}>Catalog</span> / {TabTitle}
        </div>
      </div>
      <Languages />
      <Topics />
      <Level />
    </div>
  );
};

export default Sidebar;
