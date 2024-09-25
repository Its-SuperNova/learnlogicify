import React, { useState } from "react";
import styles from "./styles.module.css";
import Languages from "./Languages";
import Topics from "./Topics";
import Level from "./Level";

const Sidebar = () => {
  const TabTitle = "All Courses";

  // State to manage which dropdown is open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggle = (dropdownName: string) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
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
          <span className={styles.bold}>Catalog</span> / {TabTitle}
        </div>
      </div>

      <Languages
        isOpen={openDropdown === "languages"}
        toggleDropdown={() => handleToggle("languages")}
      />
      <Topics
        isOpen={openDropdown === "topics"}
        toggleDropdown={() => handleToggle("topics")}
      />
      <Level
        isOpen={openDropdown === "level"}
        toggleDropdown={() => handleToggle("level")}
      />
    </div>
  );
};

export default Sidebar;
