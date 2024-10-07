import React from "react";
import styles from "./styles.module.css";

interface FilterProps {
  selectedLanguage: string[];
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string[]>>;
  selectedTopic: string[];
  setSelectedTopic: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLevel: string[];
  setSelectedLevel: React.Dispatch<React.SetStateAction<string[]>>;
  setIsAvailableOnly: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: React.FC<FilterProps> = ({
  selectedLanguage,
  setSelectedLanguage,
  selectedTopic,
  setSelectedTopic,
  selectedLevel,
  setSelectedLevel,
  setIsAvailableOnly,
}) => {
  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    selectedItems: string[],
    setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    }
  };

  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.title}>Filter Courses</h3>

      {/* Languages Filter */}
      <div className={styles.filterGroup}>
        <h4 className={styles.subtitle}>Languages</h4>
        <div className={styles.content}>
          {["JavaScript", "Python", "Java", "C++"].map((language) => (
            <label className={styles.label} key={language}>
              <input
                type="checkbox"
                className={styles.checkbox}
                value={language}
                checked={selectedLanguage.includes(language)}
                onChange={(e) =>
                  handleCheckboxChange(e, selectedLanguage, setSelectedLanguage)
                }
              />
              <span className={styles.checkboxCustom}></span>
              <p className={styles.p}>{language}</p>
            </label>
          ))}
        </div>
      </div>

      {/* Topics Filter */}
      <div className={styles.filterGroup}>
        <h4 className={styles.subtitle}>Topics</h4>
        <div className={styles.content}>
          {[
            "Web Development",
            "Data Structures",
            "Algorithms",
            "Machine Learning",
          ].map((topic) => (
            <label className={styles.label} key={topic}>
              <input
                type="checkbox"
                className={styles.checkbox}
                value={topic}
                checked={selectedTopic.includes(topic)}
                onChange={(e) =>
                  handleCheckboxChange(e, selectedTopic, setSelectedTopic)
                }
              />
              <span className={styles.checkboxCustom}></span>
              <p className={styles.p}>{topic}</p>
            </label>
          ))}
        </div>
      </div>

      {/* Levels Filter */}
      <div className={styles.filterGroup}>
        <h4 className={styles.subtitle}>Level</h4>
        <div className={styles.content}>
          {["Beginner", "Intermediate", "Advanced"].map((level) => (
            <label className={styles.label} key={level}>
              <input
                type="checkbox"
                className={styles.checkbox}
                value={level}
                checked={selectedLevel.includes(level)}
                onChange={(e) =>
                  handleCheckboxChange(e, selectedLevel, setSelectedLevel)
                }
              />
              <span className={styles.checkboxCustom}></span>
              <p className={styles.p}>{level}</p>
            </label>
          ))}
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
