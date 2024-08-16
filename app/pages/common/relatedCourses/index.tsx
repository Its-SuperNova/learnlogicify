import React from "react";
import styles from "./styles.module.css";
import coursesData, { Course } from "@/app/Courses/data/courseData"; // Adjust the path as necessary

interface RelatedCoursesProps {
  topics: string[];
}

const RelatedCourses: React.FC<RelatedCoursesProps> = ({ topics }) => {
  const relatedCourses = coursesData
    .filter((course: Course) =>
      course.topics.some((topic: string) => topics.includes(topic))
    )
    .slice(0, 4); // Limit to 4 courses

  return (
    <div className={styles.relatedCoursesContainer}>
      <h2>Explore Related Courses</h2>
      <div className={styles.courseGrid}>
        {relatedCourses.map((course, index) => (
          <div key={index} className={styles.courseCard}>
            <div className={styles.courseInfo}>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <span>₹{course.price}</span>
            </div>
            <div>
              <button className={styles.buyButton}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCourses;
