"use client";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";

const ReachOut = () => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      const lordIcon = iconRef.current.querySelector("lord-icon");

      const handleMouseEnter = () => {
        if (lordIcon) {
          // Trigger the hover event manually on the lord-icon element
          lordIcon.setAttribute("trigger", "hover");
          lordIcon.dispatchEvent(new Event("mouseenter")); // Simulate hover to start animation
        }
      };

      const handleMouseLeave = () => {
        if (lordIcon) {
          // Reset the animation trigger to stop further animations
          lordIcon.setAttribute("trigger", "none");
        }
      };

      iconRef.current.addEventListener("mouseenter", handleMouseEnter);
      iconRef.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        iconRef.current?.removeEventListener("mouseenter", handleMouseEnter);
        iconRef.current?.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <main>
      <div className={styles.container}>
        <header>
          <div className={styles.ReachOutContainer}>
            <p>Reach Out</p>
          </div>
          <h2 className={styles.title}>We&apos;d love to hear from you!</h2>
          <p className={styles.subtitle}>
            Reach out with any questions or ideas – we’re here to help!
          </p>
        </header>
        <section className={styles.cardContainer}>
          <div className={styles.card}></div>
          <div className={styles.card} ref={iconRef}>
            <script src="https://cdn.lordicon.com/lordicon.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/ebjjjrhp.json"
              trigger="none" // Initially no animation is triggered
              stroke="bold"
              colors="primary:#121331,secondary:#6c16c7"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </div>
          <div className={styles.card}></div>
        </section>
      </div>
    </main>
  );
};

export default ReachOut;
