import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";

type RoundButtonProps = {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  type?: "button" | "submit" | "reset";
};

const RoundButton: React.FC<RoundButtonProps> = ({
  children,
  className = "",
  backgroundColor = "#455CE9",
  type = "button",
  ...attributes
}) => {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId = useRef<NodeJS.Timeout | null>(null);

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

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <button
      className={`${styles.roundedButton} ${className}`}
      style={
        {
          "--button-width": "150px",
          "--button-height": "50px",
          overflow: "hidden",
        } as React.CSSProperties
      } // Casting to allow CSS variables
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
