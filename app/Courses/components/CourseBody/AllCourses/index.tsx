import React, { useState, useEffect } from "react";
import Card from "../../CourseCard";
import coursesData, { Course } from "../../data/courseData";
import CourseNotFound from "../CourseNotFound";
import styles from "./styles.module.css";
import SkeletonCourseCard from "../../skeletonCourseCard"; // Already created SkeletonCourseCard

interface AllCoursesProps {
  selectedLanguage: string;
  selectedTopic: string;
  selectedLevel: string;
  isAvailableOnly: boolean;
  searchTerm: string;
}

const AllCourses: React.FC<AllCoursesProps> = ({
  selectedLanguage,
  selectedTopic,
  selectedLevel,
  isAvailableOnly,
  searchTerm,
}) => {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    // Simulate loading delay (1.5s) for skeleton
    setLoading(true);
    const timer = setTimeout(() => {
      applyFilters();
      setLoading(false); // After data is filtered, stop the loading
    }, 1500);

    // Cleanup the timer when component is unmounted or filters change
    return () => clearTimeout(timer);
  }, [searchTerm, selectedLanguage, selectedTopic, selectedLevel, isAvailableOnly]);

  const applyFilters = () => {
    let filtered = coursesData;

    if (selectedLanguage && selectedLanguage !== "All") {
      filtered = filtered.filter((course: Course) => course.languageId === selectedLanguage);
    }

    if (selectedTopic && selectedTopic !== "All") {
      filtered = filtered.filter((course: Course) => course.topicId === selectedTopic);
    }

    if (selectedLevel && selectedLevel !== "All") {
      filtered = filtered.filter((course: Course) => course.Level === selectedLevel);
    }

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (course: Course) =>
          course.title.toLowerCase().includes(search) ||
          course.desc.toLowerCase().includes(search) ||
          course.Level.toLowerCase().includes(search)
      );
    }

    if (isAvailableOnly) {
      filtered = filtered.filter((course: Course) => course.available);
    }

    setFilteredCourses(filtered);
  };

  return (
    <div
      className={`${styles.container} ${
        filteredCourses.length === 0 && !loading ? styles.noCoursesGrid : styles.grid
      }`}
    >
      {loading ? (
        // Show skeleton while loading
        Array(6)
          .fill(0)
          .map((_, index) => <SkeletonCourseCard key={index} />)
      ) : filteredCourses.length > 0 ? (
        filteredCourses.map((course: Course) => (
          <Card
            key={course.url}
            url={course.url}
            Level={course.Level}
            icon={course.icon}
            title={course.title}
            topics={course.topics}
            videos={course.videos}
            desc={course.desc}
            offer={course.offer}
            price={course.price}
            originalPrice={course.originalPrice}
            bannerColor={course.bannerColor}
            available={course.available}
          />
        ))
      ) : (
        <CourseNotFound />
      )}
    </div>
  );
};

export default AllCourses;
