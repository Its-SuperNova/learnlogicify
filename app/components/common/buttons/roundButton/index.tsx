"use client";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";

type RoundButtonProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  width?: string;
  height?: string;
  type?: "button" | "submit" | "reset";
};

const RoundButton: React.FC<RoundButtonProps> = ({
  children,
  backgroundColor = "#455CE9",
  width = "150px", // default width
  height = "50px", // default height
  type = "button",
  ...attributes
}) => {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

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
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <button
      className={styles.roundedButton}
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
