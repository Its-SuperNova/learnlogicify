"use client";
import React, { useState, ChangeEvent, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import styles from "./styles.module.css";
import Card from "./components/CourseCard";
import SkeletonCourseCard from "./components/skeletonCourseCard";
import SkeletonBootcampCard from "./components/skeletonBootcampCard";
import SkeletonCompanyCard from "./components/skeletonCompanyCard";
import coursesData, { Course } from "./data/courseData";
import BootcampData, { Bootcamp } from "./data/bootcampData";
import CompanyData, { Company } from "./data/CompanyData";
import SideBar from "./components/SideBar";
import BootcampCard from "./components/BootcampCard";
import CompanyCard from "./components/CompanyCard";
import Footer from "../components/common/Footer";

const AllCourseContent: React.FC = () => {
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
  const [loading, setLoading] = useState<boolean>(true);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState<boolean>(false);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setSelectedTab(tab);
    }
  }, [searchParams]);

  // Simulate loading effect
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [selectedTab, filters]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

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

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    setFilters({
      Level: [],
      languageId: [],
      topicId: [],
      companyId: [],
      category: [],
    });
  };

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

    const matchesAvailability = !showOnlyAvailable || course.available;

    return matchesSearch && matchesFilters && matchesAvailability;
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
    <>
      <div className={styles.container}>
        <SideBar
          onFilterChange={handleFilterChange}
          selectedTab={selectedTab}
        />
        <div className={styles.mainContent}>
          <div className={styles.header}>
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
              <div className={styles.toggleContainer}>
                <label htmlFor="toggle" className={styles.availableLabel}>
                  Available Courses
                </label>
                <div className={styles.toggleButton}>
                  <input
                    type="checkbox"
                    id="toggle"
                    onChange={() => setShowOnlyAvailable(!showOnlyAvailable)}
                  />
                  <label htmlFor="toggle" className={styles.switch}></label>
                </div>
              </div>
            </div>
          </div>
          {loading ? (
            <>
              {selectedTab === "AllCourses" && (
                <div className={styles.grid}>
                  {Array(6)
                    .fill(0)
                    .map((_, index) => (
                      <SkeletonCourseCard key={index} />
                    ))}
                </div>
              )}
              {selectedTab === "AllBootcamps" && (
                <div className={styles.bootcampGrid}>
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <SkeletonBootcampCard key={index} />
                    ))}
                </div>
              )}
              {selectedTab === "CompanySpecific" && (
                <div className={styles.companyGrid}>
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <SkeletonCompanyCard key={index} />
                    ))}
                </div>
              )}
            </>
          ) : (
            <>
              {selectedTab === "AllCourses" && (
                <div className={styles.grid}>
                  {filteredCourses.map((course, index) => (
                    <Card
                      url={course.url}
                      key={index}
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
                  ))}
                </div>
              )}
              {selectedTab === "AllBootcamps" && (
                <div className={styles.bootcampGrid}>
                  {filteredBootcamps.map((bootcamp, index) => (
                    <BootcampCard
                      key={index}
                      icon={bootcamp.icon}
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
            </>
          )}
        </div>
      </div>
      <Footer className={styles.footer} />
    </>
  );
};

const AllCourse: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AllCourseContent />
    </Suspense>
  );
};

export default AllCourse;
