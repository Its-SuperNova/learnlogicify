// allcourses/page.tsx
"use client";
import React, { useState, ChangeEvent } from "react";
import { IoIosSearch } from "react-icons/io"; // Import the IoIosSearch icon
import styles from "./styles.module.css";
import Card from "../components/CourseCard";
import coursesData, { Course } from "./data/courseData";
import SideBar from "../components/SideBar";

const AllCourse: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<{ category: string; value: string }>({
    category: "",
    value: "",
  });

  // Function to handle search input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle filter change
  const handleFilterChange = (category: string, value: string) => {
    setFilter({ category, value });
  };

  // Filter courses based on search term and selected filter
  const filteredCourses = coursesData.filter((course: Course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let matchesFilter = true;
    if (filter.category === "Level") {
      matchesFilter = course.Level === filter.value;
    } else if (filter.category === "languageId") {
      matchesFilter = course.languageId === filter.value;
    } else if (filter.category === "topicId") {
      matchesFilter = course.topicId === filter.value;
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <div className={styles.container}>
      <SideBar onFilterChange={handleFilterChange} />
      <div className={styles.mainContent}>
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
    </div>
  );
};

export default AllCourse;
