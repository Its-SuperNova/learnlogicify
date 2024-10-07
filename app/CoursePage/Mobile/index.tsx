import React from "react";
import Drawer from "./components/drawer";
import styles from "./styles.module.css";
import Filter from "./components/filter"

const Mobile = () => {
  const drawerContent = (
    <div>
      <Filter/>
    </div>
  );

  return (
    <div className={styles.main}>
      <Drawer content={drawerContent} />
    </div>
  );
};

export default Mobile;
