import React, { useState, useEffect } from "react";
import Card from "../../../components/CourseCard";
import coursesData, { Course } from "../../components/data/courseData";
import CourseNotFound from "../../../components/CourseBody/CourseNotFound";
import styles from "./styles.module.css";
import SkeletonCourseCard from "../../../components/skeletonCourseCard";

interface AllCoursesProps {
  selectedLanguage: string[];
  selectedTopic: string[];
  selectedLevel: string[];
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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading delay (1.5s) for skeleton
    setLoading(true);
    const timer = setTimeout(() => {
      applyFilters();
      setLoading(false); // After data is filtered, stop the loading
    }, 1500);

    // Cleanup the timer when component is unmounted or filters change
    return () => clearTimeout(timer);
  }, [
    searchTerm,
    selectedLanguage,
    selectedTopic,
    selectedLevel,
    isAvailableOnly,
  ]);

  const applyFilters = () => {
    let filtered = coursesData;

    // Filter by selected languages
    if (selectedLanguage.length > 0) {
      filtered = filtered.filter((course) =>
        selectedLanguage.includes(course.languageId)
      );
    }

    // Filter by selected topics
    if (selectedTopic.length > 0) {
      filtered = filtered.filter((course) =>
        selectedTopic.includes(course.topicId)
      );
    }

    // Filter by selected levels
    if (selectedLevel.length > 0) {
      filtered = filtered.filter((course) =>
        selectedLevel.includes(course.Level.toLowerCase())
      );
    }

    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(search) ||
          course.desc.toLowerCase().includes(search) ||
          course.Level.toLowerCase().includes(search)
      );
    }

    // Filter by availability
    if (isAvailableOnly) {
      filtered = filtered.filter((course) => course.available);
    }

    setFilteredCourses(filtered);
  };

  return (
    <div
      className={`${styles.container} ${
        filteredCourses.length === 0 && !loading
          ? styles.noCoursesGrid
          : styles.grid
      }`}
    >
      {loading ? (
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
