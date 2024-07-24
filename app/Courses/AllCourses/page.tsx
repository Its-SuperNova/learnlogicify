"use client"
import React, { useState, ChangeEvent } from "react";
import styles from "./styles.module.css";
import Card from "../components/CourseCard";
import coursesData from "./data/courseData";
import { IoIosSearch } from "react-icons/io";

const AllCourse: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Function to handle search input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter courses based on search term
  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>All Courses</h1>
      <div className={styles.searchContainer}>
        <IoIosSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search Course"
          className={styles.searchBox}
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.grid}>
        {filteredCourses.map((course, index) => (
          <Card
            key={index}
            Level={course.Level}
            icon={course.icon} // Pass the icon component
            title={course.title}
            topics={course.topics}
            videos={course.videos}
            desc={course.desc}
            offer={course.offer}
            price={course.price}
            originalPrice={course.originalPrice}
            bannerColor={course.bannerColor}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
