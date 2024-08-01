"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { IoIosSearch } from "react-icons/io"; // Import the IoIosSearch icon
import styles from "./styles.module.css";
import Card from "./components/CourseCard";
import coursesData, { Course } from "./data/courseData";
import BootcampData, { Bootcamp } from "./data/bootcampData";
import CompanyData, { Company } from "./data/CompanyData";
import SideBar from "./components/SideBar";
import BootcampCard from "./components/BootcampCard";
import CompanyCard from "./components/CompanyCard";

const AllCourse: React.FC = () => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({
    Level: [],
    languageId: [],
    topicId: [],
    companyId: [],
    category: [],
  });
  const [selectedTab, setSelectedTab] = useState<string>("AllCourses");

  // Set the selected tab based on the query parameter
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setSelectedTab(tab);
    }
  }, [searchParams]);

  // Function to handle search input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle filter change
  const handleFilterChange = (
    category: string,
    value: string,
    isActive: boolean
  ) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (isActive) {
        if (!updatedFilters[category].includes(value)) {
          updatedFilters[category].push(value);
        }
      } else {
        updatedFilters[category] = updatedFilters[category].filter(
          (item) => item !== value
        );
      }
      return updatedFilters;
    });
  };

  // Function to handle tab change
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    setFilters({
      Level: [],
      languageId: [],
      topicId: [],
      companyId: [],
      category: [],
    }); // Reset filters when a new tab is clicked
  };

  // Filter courses based on search term and selected filters
  const filteredCourses = coursesData.filter((course: Course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilters = Object.entries(filters).every(
      ([category, values]) => {
        if (values.length === 0) return true;
        return values.includes(course[category as keyof Course] as string);
      }
    );

    return matchesSearch && matchesFilters;
  });

  const filteredBootcamps = BootcampData.filter((bootcamp: Bootcamp) => {
    const matchesSearch = bootcamp.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilters = Object.entries(filters).every(
      ([category, values]) => {
        if (values.length === 0) return true;
        return values.includes(bootcamp[category as keyof Bootcamp] as string);
      }
    );

    return matchesSearch && matchesFilters;
  });

  const filteredCompanies = CompanyData.filter((company: Company) => {
    const matchesSearch = company.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilters = Object.entries(filters).every(
      ([category, values]) => {
        if (values.length === 0) return true;
        return values.includes(company[category as keyof Company] as string);
      }
    );

    return matchesSearch && matchesFilters;
  });

  const getTitle = () => {
    switch (selectedTab) {
      case "AllBootcamps":
        return "All Bootcamps";
      case "CompanySpecific":
        return "Company Specific";
      default:
        return "All Courses";
    }
  };

  const getPlaceholder = () => {
    switch (selectedTab) {
      case "AllBootcamps":
        return "Search Bootcamps";
      case "CompanySpecific":
        return "Search Companies";
      case "AllCourses":
      default:
        return "Search Courses";
    }
  };

  return (
    <div className={styles.container}>
      <SideBar onFilterChange={handleFilterChange} selectedTab={selectedTab} />
      <div className={styles.mainContent}>
        <h1 className={styles.title}>{getTitle()}</h1>
        <div className={styles.searchContainer}>
          <IoIosSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder={getPlaceholder()}
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
                url={course.url}
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
                url={course.url}
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
          <div className={styles.companyGrid}>
            {filteredCompanies.map((company, index) => (
              <CompanyCard
                key={index}
                title={company.title}
                desc={company.desc}
                offer={company.offer}
                price={company.price}
                originalPrice={company.originalPrice}
                bannerColor={company.bannerColor}
                desktopImage={company.desktopImage}
                mobileImage={company.mobileImage}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCourse;
