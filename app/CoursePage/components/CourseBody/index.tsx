import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { IoIosSearch } from "react-icons/io";
import Card from "../CourseCard"; // Import the Card component
import SkeletonCourseCard from "../skeletonCourseCard"; // Import the skeleton component
import coursesData, { Course } from "../data/courseData"; // Import the courses data and Course type
import CourseNotFound from "../CourseNotFound"; // Import the CourseNotFound component

interface CourseMainProps {
  selectedLanguage: string; // Props for selected language
  selectedTopic: string; // Props for selected topic
  selectedLevel: string; // Props for selected level
  isAvailableOnly: boolean; // Props for availability toggle
}

const CourseMain: React.FC<CourseMainProps> = ({
  selectedLanguage,
  selectedTopic,
  selectedLevel,
  isAvailableOnly, // New prop to filter only available courses
}) => {
  const [activeTab, setActiveTab] = useState("All Courses");
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]); // State for filtered courses
  const [loading, setLoading] = useState<boolean>(true); // State for loading, for filters only

  // Apply filters when active tab or filter criteria change
  useEffect(() => {
    setLoading(true); // Set loading to true when filters are applied or when the page is first loaded
    const timer = setTimeout(() => {
      applyFilters();
      setLoading(false); // Disable loading after filtering is complete
    }, 1000); // Simulate a short delay for loading effect

    return () => clearTimeout(timer);
  }, [
    activeTab,
    selectedLanguage,
    selectedTopic,
    selectedLevel,
    searchTerm,
    isAvailableOnly,
  ]);

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

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Update search term as user types
  };

  const renderGridContent = () => {
    if (activeTab === "All Courses") {
      if (loading) {
        return (
          <div className={styles.grid}>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <SkeletonCourseCard key={index} /> // Show loading skeleton
              ))}
          </div>
        );
      } else {
        return (
          <div
            className={`${styles.grid} ${
              filteredCourses.length === 0 ? styles.hideGrid : ""
            }`}
          >
            {filteredCourses.length > 0 ? (
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
              <CourseNotFound /> // Display CourseNotFound component
            )}
          </div>
        );
      }
    }

    if (activeTab === "All BootCamps") {
      return <div className={styles.grid}>All BootCamps Content</div>;
    }

    if (activeTab === "Company Specific") {
      return <div className={styles.grid}>Company Specific Content</div>;
    }

    return null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* Tab Section */}
        <div className={styles.tabContainer}>
          <div
            className={`${styles.tab} ${
              activeTab === "All Courses" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("All Courses")}
          >
            All Courses
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "All BootCamps" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("All BootCamps")}
          >
            All BootCamps
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "Company Specific" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick("Company Specific")}
          >
            Company Specific
          </div>
        </div>

        {/* Search Box */}
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search Courses"
            className={styles.searchInput}
            value={searchTerm}
            onChange={handleSearchChange} // Handle search input change
          />
          <IoIosSearch className={styles.searchIcon} />
        </div>
      </div>
      {renderGridContent()} {/* Render the filtered content */}
    </div>
  );
};

export default CourseMain;
