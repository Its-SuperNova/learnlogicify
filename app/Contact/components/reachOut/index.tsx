"use client";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";

const ReachOut = () => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load the Lordicon script
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    if (iconRef.current) {
      const lordIcon = iconRef.current.querySelector("lord-icon");

      const handleMouseEnter = () => {
        if (lordIcon) {
          lordIcon.setAttribute("trigger", "hover");
          lordIcon.dispatchEvent(new Event("mouseenter"));
        }
      };

      const handleMouseLeave = () => {
        if (lordIcon) {
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
            Reach out with any questions or ideas – we&apos;re here to help!
          </p>
        </header>
        <section className={styles.cardContainer}>
          <div className={styles.card}></div>
          <div className={styles.card} ref={iconRef}>
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
