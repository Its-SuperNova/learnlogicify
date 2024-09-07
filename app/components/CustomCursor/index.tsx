"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.css";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3, // Adjust for smooth trailing effect
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 3, // Scale up the cursor when hovering on text
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1, // Scale back to normal
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Select all p and heading tags
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");

    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    // Cleanup event listeners
    return () => {
      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className={styles.cursor} ref={cursorRef}></div>;
};

export default CustomCursor;
