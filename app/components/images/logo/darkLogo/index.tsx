import React from "react";
import Image from "next/image";
import logo from "@/public/SVG/logo/Dark-logo.svg";
import styles from "./styles.module.css";
const LightLogo = () => {
  return (
    <div>
      <Image className={styles.logo} src={logo} alt="Light Logo" />
    </div>
  );
};

export default LightLogo;
