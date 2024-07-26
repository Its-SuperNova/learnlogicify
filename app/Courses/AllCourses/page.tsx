"use client";
import React, { useState, ChangeEvent } from "react";
import { IoIosSearch } from "react-icons/io"; // Import the IoIosSearch icon
import styles from "./styles.module.css";
import Card from "../components/CourseCard";
import coursesData, { Course } from "./data/courseData";
import BootcampData, { Bootcamp } from "./data/bootcampData";
import SideBar from "../components/SideBar";
import BootcampCard from "../components/BootcampCard";
import CompanyCard from "../components/CompanyCard";

const AllCourse: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<{ category: string; value: string }>({
    category: "",
    value: "",
  });
  const [selectedTab, setSelectedTab] = useState<string>("AllCourses");

  // Function to handle search input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle filter change
  const handleFilterChange = (category: string, value: string) => {
    setFilter({ category, value });
    setSelectedTab(""); // Deselect the tab when a filter is applied
  };

  // Function to handle tab change
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    if (tab === "AllCourses") {
      setFilter({ category: "", value: "" }); // Reset filters when All Courses tab is clicked
    }
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

  const filteredBootcamps = BootcampData.filter((bootcamp: Bootcamp) => {
    const matchesSearch = bootcamp.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // You can add similar filtering for bootcamps if needed
    return matchesSearch;
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
        <div className={styles.tabContainer}>
          <button
            className={`${styles.tabButton} ${
              selectedTab === "AllCourses" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("AllCourses")}
          >
            All Courses
          </button>
          <button
            className={`${styles.tabButton} ${
              selectedTab === "AllBootcamps" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("AllBootcamps")}
          >
            All Bootcamps
          </button>
          <button
            className={`${styles.tabButton} ${
              selectedTab === "CompanySpecific" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("CompanySpecific")}
          >
            Company Specific
          </button>
        </div>

        {selectedTab === "AllCourses" && (
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
        )}
        {selectedTab === "" && (
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
        )}
        {selectedTab === "AllBootcamps" && (
          <div className={styles.bootcampGrid}>
            {filteredBootcamps.map((bootcamp, index) => (
              <BootcampCard
                key={index}
                icon={bootcamp.icon} // Pass the icon component
                title={bootcamp.title}
                Problems={bootcamp.Problems}
                Courses={bootcamp.Courses}
                desc={bootcamp.desc}
                offer={bootcamp.offer}
                price={bootcamp.price}
                originalPrice={bootcamp.originalPrice}
                bannerColor={bootcamp.bannerColor}
              />
            ))}
          </div>
        )}
        {selectedTab === "CompanySpecific" && (
          <div>
            <CompanyCard/>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCourse;
