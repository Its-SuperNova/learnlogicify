import React from "react";
import styles from "./styles.module.css";
import { RiDoubleQuotesL } from "react-icons/ri";

const Quotes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <RiDoubleQuotesL size={40} />
      </div>
      <div className={styles.content}>
        <div className={styles.quote}>
          &quot;Success is not the key to happiness. Happiness is the key to
          success. If you love what you are doing, you will be successful.&quot;
        </div>
        <div className={styles.name}>- Sachin Nandha Sabarish</div>
      </div>
    </div>
  );
};

export default Quotes;
