import React from "react";
import styles from "./styles.module.css";

const MagicButton = () => {
  return (
    <div className={styles.container}>
      <a href="#" className={styles.button}>
        <div className={styles.buttonContent}>
          <span className={styles.buttonText}>Join Us</span>
          {/* Fixed the className */}
          <div className={styles.buttonReflection1}></div>
          <div className={styles.buttonReflection2}></div>
        </div>

        <img
          src="/components/Image/star.png"
          alt=""
          className={styles.buttonStar1}
        />
        <img
          src="/components/Image/star.png"
          alt=""
          className={styles.buttonStar2}
        />
        <img
          src="/components/Image/circle.png"
          alt=""
          className={styles.buttonCircle1}
        />
        <img
          src="/components/Image/circle.png"
          alt=""
          className={styles.buttonCircle2}
        />
        <img
          src="/components/Image/diamond.png"
          alt=""
          className={styles.buttonDiamond}
        />
        <img
          src="/components/Image/triangle.png"
          alt=""
          className={styles.buttonTriangle}
        />

        <div className={styles.buttonShadow}></div>
      </a>
    </div>
  );
};

export default MagicButton;
