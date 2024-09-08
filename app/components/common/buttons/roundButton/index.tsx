"use client";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";

type RoundButtonProps = {
  children: React.ReactNode;
  className?: string; // Accept className prop to style externally
  backgroundColor?: string;
  width?: string;
  height?: string;
  type?: "button" | "submit" | "reset";
};

const RoundButton: React.FC<RoundButtonProps> = ({
  children,
  className = "", // Default className is an empty string
  backgroundColor = "#455CE9",
  width = "150px",
  height = "50px",
  type = "button",
  ...attributes
}) => {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId = useRef<NodeJS.Timeout | null>(null);

  // GSAP Animation Setup
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );

    // Cleanup on component unmount
    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  // Mouse enter handler to trigger animation
  const manageMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeline.current?.tweenFromTo("enter", "exit");
  };

  // Mouse leave handler to reset animation
  const manageMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <button
      className={`${styles.roundedButton} ${className}`} // Combine internal styles with external className
      style={{ width, height, overflow: "hidden" }}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      type={type}
      {...attributes}
    >
      {children}
      <div
        ref={circle}
        style={{ backgroundColor }}
        className={styles.circle}
      ></div>
    </button>
  );
};

export default RoundButton;
