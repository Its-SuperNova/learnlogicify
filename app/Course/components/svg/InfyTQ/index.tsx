"use client";
import React from "react";
import Image from "next/image";
import img from "@/public/SVG/company illustration/InfyTQ.svg";
import styles from "./styles.module.css";

const Accenture = () => {
  return (
    <div className={styles.imageWrapper}>
      <Image className={styles.img} src={img} alt="Accenture Illustration" />
    </div>
  );
};

export default Accenture;
