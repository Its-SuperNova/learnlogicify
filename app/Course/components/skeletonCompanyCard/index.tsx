// components/SkeletonCompanyCard.tsx
import React from "react";
import styles from "./styles.module.css";

const SkeletonCompanyCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.title}></div>
        <div className={styles.desc}></div>
        <div className={styles.priceSection}></div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default SkeletonCompanyCard;
