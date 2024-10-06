import React from "react";
import Drawer from "./components/drawer";
import styles from "./styles.module.css";

const Mobile = () => {
  const drawerContent = (
    <div>
      <h2 className="text-2xl font-bold text-white">Filter Options</h2>
      <p className="text-white">
        This is where the filter options will appear. You can customize this
        section as needed.
      </p>
    </div>
  );

  return (
    <div className={styles.main}>
      {/* Pass the filter content to the Drawer */}
      <Drawer content={drawerContent} />
    </div>
  );
};

export default Mobile;
