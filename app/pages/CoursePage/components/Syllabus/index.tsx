"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { BiMessageSquareDots } from "react-icons/bi";
import { syllabusData } from "./data/syllabusData";
import Quotes from "./components/quotes";
import Probanner from "./components/proBanner"
const Syllabus: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Course Syllabus</div>
        <div className={styles.subtitle}>
          <div>10 Modules</div>
          <div className={styles.line}></div>
          <div>46 Topics</div>
          <div className={styles.line}></div>
          <div>500 problems</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.SyllabusArea}>
          {syllabusData.map((module, index) => {
            const Icon = module.icon;
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className={`${styles.list} ${
                  isExpanded ? styles.expanded : ""
                }`}
              >
                <div className={styles.listRow}>
                  <div className={styles.icon}>
                    <Icon size={35} />
                  </div>
                  <div className={styles.lisContent}>
                    <div className={styles.listStats}>
                      <div className={styles.module}>{module.title}</div>
                      <div className={styles.topic}>{module.subtitle}</div>
                    </div>
                    <div
                      className={styles.DropdownIcon}
                      onClick={() => toggleExpand(index)}
                    >
                      {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                  </div>
                </div>
                {isExpanded && (
                  <div className={styles.dropdownContent}>
                    <ul>
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>
                          <BiMessageSquareDots color="blue" /> {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.right}>
          <div className={styles.cardContainer}>
            <Quotes />
            <Probanner />
          </div>
          <div className={styles.why}>
            <div className={styles.tit}>
              Why should take this Python course?
            </div>
            <div>
              <br />
              <b>Beginner-Friendly</b> This course requires no prior
              programming experience, making it ideal for complete beginners.
              <br />
              <br />
              <b>Comprehensive Learning</b>You ll gain a solid foundation
              in Python, covering all essential concepts from variables and data
              types to control structures and functions.
              <br />
              <br />
              <b>Practical Skills</b> Learn through hands on exercises and
              real world examples, ensuring you can apply Python programming
              skills effectively in various domains.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
