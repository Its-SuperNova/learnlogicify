"use client";
import { useEffect, useState } from "react";
import HamburgerMenu from "../../hamburger"; // Adjust the import path if needed
import styles from "./styles.module.css";

const ScrollHandler: React.FC = () => {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight =
        document.querySelector(".hero-section")?.clientHeight || 0;
      if (window.scrollY > heroSectionHeight / 2) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.hamburgerMenu} ${
        showHamburger ? styles.hamburgerMenuVisible : ""
      }`}
    >
      <HamburgerMenu />
    </div>
  );
};

export default ScrollHandler;
