import React, { useState, useEffect } from "react";
import Card from "../../CourseCard"; // Adjust the import path accordingly
import SkeletonCourseCard from "../../skeletonCourseCard"; // Adjust the import path accordingly
import coursesData, { Course } from "../../data/courseData"; // Adjust the import path accordingly
import CourseNotFound from "../CourseNotFound"; // Adjust the import path accordingly
import styles from "./styles.module.css"; // Import the styles for AllCourses

interface AllCoursesProps {
  selectedLanguage: string;
  selectedTopic: string;
  selectedLevel: string;
  isAvailableOnly: boolean;
  searchTerm: string; // Add searchTerm as a prop
}

const AllCourses: React.FC<AllCoursesProps> = ({
  selectedLanguage,
  selectedTopic,
  selectedLevel,
  isAvailableOnly,
  searchTerm, // Accept searchTerm as a prop
}) => {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Helper to determine if filtering is happening (not search)
  const isFiltering = (
    selectedLanguage: string,
    selectedTopic: string,
    selectedLevel: string
  ) => {
    return (
      selectedLanguage !== "All" ||
      selectedTopic !== "All" ||
      selectedLevel !== "All" ||
      isAvailableOnly
    );
  };

  // Trigger loading skeleton on toggle availability or filtering
  useEffect(() => {
    setLoading(true); // Show loading skeleton for both enabling and disabling toggle
    const timer = setTimeout(() => {
      applyFilters();
      setLoading(false); // Stop loading after applying filters
    }, 1000); // Simulate loading delay

    return () => clearTimeout(timer);
  }, [selectedLanguage, selectedTopic, selectedLevel, isAvailableOnly]);

  // Apply filters based on the provided search term and other criteria
  useEffect(() => {
    applyFilters(); // Re-apply filters without loading for search term changes
  }, [searchTerm]);

  const applyFilters = () => {
    let filtered = coursesData;

    // Apply language filter
    if (selectedLanguage && selectedLanguage !== "All") {
      filtered = filtered.filter(
        (course: Course) => course.languageId === selectedLanguage
      );
    }

    // Apply topic filter
    if (selectedTopic && selectedTopic !== "All") {
      filtered = filtered.filter(
        (course: Course) => course.topicId === selectedTopic
      );
    }

    // Apply level filter
    if (selectedLevel && selectedLevel !== "All") {
      filtered = filtered.filter(
        (course: Course) => course.Level === selectedLevel
      );
    }

    // Apply search term filter if the user is searching
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (course: Course) =>
          course.title.toLowerCase().includes(search) ||
          course.desc.toLowerCase().includes(search) ||
          course.Level.toLowerCase().includes(search)
      );
    }

    // Apply availability filter if the toggle is enabled
    if (isAvailableOnly) {
      filtered = filtered.filter((course: Course) => course.available);
    }

    setFilteredCourses(filtered);
  };

  return (
    <div
      className={`${styles.container} ${
        filteredCourses.length === 0 ? styles.flex : styles.grid
      }`}
    >
      {loading ? (
        Array(8)
          .fill(0)
          .map((_, index) => (
            <SkeletonCourseCard key={index} /> // Show loading skeleton for filtering
          ))
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
