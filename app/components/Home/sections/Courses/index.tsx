"use client";
import { useInView } from "react-intersection-observer";
import { BsArrowRight } from "react-icons/bs"; // Import arrow icon from react-icons
import SlideUpWord from "../../../common/Animations/slideUpWord"; // Slide up animation for the title
import FadeTransition from "../../../common/Animations/textFade"; // Fade transition animation for the description
import styles from "./styles.module.css"; // CSS Modules
import Card from "./courseCard";
import coursesData, { Course } from "./courseData/courseData";
import Link from "next/link"; // Import Link from Next.js for navigation

export default function ExplorePopularCourses() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const title = ["Explore Our Popular Courses"];
  const description =
    "Explore some of the top courses we provide, designed to kickstart your tech journey. Whether you&apos;re looking to master problem-solving, coding essentials, or industry-specific skills, we&apos;ve got you covered. This is just a glimpse of what we offer&mdash;click below to view our full range of courses and find the perfect one for you!";

  // Filter only available courses (first 4)
  const filteredCourses = coursesData
    .filter((course) => course.available)
    .slice(0, 4);

  return (
    <div ref={descriptionRef} className={styles.exploreCourses}>
      <div className={styles.body}>
        <SlideUpWord
          title={title}
          isInView={isInView}
          className={styles.title}
        />

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

        <FadeTransition
          description={description}
          isInView={isInView}
          className={styles.descriptionText}
        />

        {/* View All Courses Button */}
        <Link href="/all-courses" className={styles.viewAllLink}>
          View All Courses <BsArrowRight className={styles.arrowIcon} />
        </Link>
      </div>
    </div>
  );
}
