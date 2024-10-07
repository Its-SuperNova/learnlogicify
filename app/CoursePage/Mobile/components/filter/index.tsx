import React from "react";
import styles from "./styles.module.css";

const Filter = () => {
  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.title}>Filter Courses</h3>

      {/* Languages Filter */}
      <div className={styles.filterGroup}>
        <h4 className={styles.subtitle}>Languages</h4>
        <div className={styles.content}>
          <label className={styles.label}>
            <input
              type="checkbox"
              className={styles.checkbox}
              value="JavaScript"
            />
            <span className={styles.checkboxCustom}></span>
            <p className={styles.p}>JavaScript</p>
          </label>
          <label className={styles.label}>
            <input type="checkbox" className={styles.checkbox} value="Python" />
            <span className={styles.checkboxCustom}></span>
            <p className={styles.p}>Python</p>
          </label>
          <label className={styles.label}>
            <input type="checkbox" className={styles.checkbox} value="Java" />
            <span className={styles.checkboxCustom}></span>
            <p className={styles.p}>Java</p>
          </label>
          <label className={styles.label}>
            <input type="checkbox" className={styles.checkbox} value="C++" />
            <span className={styles.checkboxCustom}></span>
            <p className={styles.p}>C++</p>
          </label>
        </div>
      </div>

      {/* Topics Filter */}
      <div className={styles.filterGroup}>
        <h4 className={styles.subtitle}>Topics</h4>
        <div className={styles.content}>
          <label className={styles.label}>
            <input
              type="checkbox"
              className={styles.checkbox}
              value="Web Development"
            />
            <span className={styles.checkboxCustom}></span>
            <p className={styles.p}>Web Development</p>
          </label>
          <label className={styles.label}>
            <input
              type="checkbox"
              className={styles.checkbox}
              value="Data Structures"
            />
            <span className={styles.checkboxCustom}></span>
            <p className={styles.p}>Data Structures</p>
          </label>
          <label className={styles.label}>
            <input
              type="checkbox"
              className={styles.checkbox}
              value="Algorithms"
            />
            <span className={styles.checkboxCustom}></span>
            <p className={styles.p}>Algorithms</p>
          </label>
          <label className={styles.label}>
            <input
              type="checkbox"
              className={styles.checkbox}
              value="Machine Learning"
            />
            <span className={styles.checkboxCustom}></span>
            <p className={styles.p}>Machine Learning</p>
          </label>
        </div>
      </div>

      {/* Levels Filter */}
      <div className={styles.filterGroup}>
        <h4 className={styles.subtitle}>Level</h4>
        <div className={styles.content}>
          <label className={styles.label}>
            <input
              type="checkbox"
              className={styles.checkbox}
              value="Beginner"
            />
            <span className={styles.checkboxCustom}></span>
            <p className={styles.p}>Beginner</p>
          </label>
          <label className={styles.label}>
            <input
              type="checkbox"
              className={styles.checkbox}
              value="Intermediate"
            />
            <span className={styles.checkboxCustom}></span>
            <p className={styles.p}>Intermediate</p>
          </label>
          <label className={styles.label}>
            <input
              type="checkbox"
              className={styles.checkbox}
              value="Advanced"
            />
            <span className={styles.checkboxCustom}></span>
            <p className={styles.p}>Advanced</p>
          </label>
        </div>
      </div>

      {/* Fixed Buttons at the bottom */}
      <div className={styles.buttonContainer}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.applyButton}>Apply</button>
      </div>
    </div>
  );
};

export default Filter;
