import React from "react";
import styles from "./styles.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaPython, FaJava, FaJsSquare } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";

interface LanguagesProps {
  isExpanded: boolean;
  onToggle: () => void;
  selectedLanguage: string; // Selected language passed from parent
  setSelectedLanguage: (language: string) => void; // Function to set the selected language
}

const Languages: React.FC<LanguagesProps> = ({
  isExpanded,
  onToggle,
  selectedLanguage,
  setSelectedLanguage,
}) => {
  const handleLanguageClick = (language: string) => {
    // Toggle selection: deselect if already selected
    if (selectedLanguage === language) {
      setSelectedLanguage("All"); // Reset to "All" if clicked again
    } else {
      setSelectedLanguage(language); // Set new selected language
    }
  };

  return (
    <div className={styles.LangContainer}>
      <div className={styles.langHeader} onClick={onToggle}>
        <h1 className={styles.langTitle}>Languages</h1>
        {isExpanded ? (
          <IoMdArrowDropup size={25} />
        ) : (
          <IoMdArrowDropdown size={25} />
        )}
      </div>
      <div
        className={`${styles.languages} ${isExpanded ? styles.visible : ""}`}
      >
        <div
          className={`${styles.lang} ${
            selectedLanguage === "python" ? styles.selected : ""
          }`}
          onClick={() => handleLanguageClick("python")}
        >
          <div className={styles.icon}>
            <FaPython size={23} />
          </div>
          <p className={styles.langName}>Python</p>
        </div>
        <div
          className={`${styles.lang} ${
            selectedLanguage === "c" ? styles.selected : ""
          }`}
          onClick={() => handleLanguageClick("c")}
        >
          <div className={styles.icon}>
            <img className={styles.c} src="SVG/icons/c-program.svg" alt="C" />
          </div>
          <p className={styles.langName}>C</p>
        </div>
        <div
          className={`${styles.lang} ${
            selectedLanguage === "cpp" ? styles.selected : ""
          }`}
          onClick={() => handleLanguageClick("cpp")}
        >
          <div className={styles.icon}>
            <SiCplusplus size={23} />
          </div>
          <p className={styles.langName}>C++</p>
        </div>
        <div
          className={`${styles.lang} ${
            selectedLanguage === "java" ? styles.selected : ""
          }`}
          onClick={() => handleLanguageClick("java")}
        >
          <div className={styles.icon}>
            <FaJava size={23} />
          </div>
          <p className={styles.langName}>Java</p>
        </div>
        <div
          className={`${styles.lang} ${
            selectedLanguage === "javascript" ? styles.selected : ""
          }`}
          onClick={() => handleLanguageClick("javascript")}
        >
          <div className={styles.icon}>
            <FaJsSquare size={23} />
          </div>
          <p className={styles.langName}>JavaScript</p>
        </div>
        <div
          className={`${styles.lang} ${
            selectedLanguage === "html-css" ? styles.selected : ""
          }`}
          onClick={() => handleLanguageClick("html-css")}
        >
          <div className={styles.icon}>
            <IoLogoHtml5 size={23} />
          </div>
          <p className={styles.langName}>HTML / CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Languages;
