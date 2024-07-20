import React from "react";
import Image from "next/image";
import logo from "@/public/SVG/icons/rocket.svg";
import styles from "./styles.module.css";
const Rocket = () => {
  return (
    <div>
      <Image className={styles.logo} src={logo} alt="Light Logo" />
    </div>
  );
};

export default Rocket;
