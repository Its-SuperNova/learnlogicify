"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.css";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true); // To handle cursor visibility

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3, // Smooth trailing effect
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

    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");

    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Function to handle screen resizing
    const handleResize = () => {
      if (window.innerWidth < 840) {
        setIsVisible(false); // Hide cursor if screen width is less than 840px
      } else {
        setIsVisible(true); // Show cursor if screen width is greater than 840px
      }
    };

    // Check screen size on initial load
    handleResize();

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("resize", handleResize);

    return () => {
      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Return null if the custom cursor should not be visible (when screen width is below 840px)
  if (!isVisible) return null;

  return <div className={styles.cursor} ref={cursorRef}></div>;
};

export default CustomCursor;
