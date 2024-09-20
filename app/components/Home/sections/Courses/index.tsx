"use client";
import { useInView } from "react-intersection-observer";
import { BsArrowRight } from "react-icons/bs"; // Import arrow icon from react-icons
import SlideUpWord from "../../../common/Animations/slideUpWord"; // Slide up animation for the title
import FadeTransition from "../../../common/Animations/textFade"; // Fade transition animation for the description
import styles from "./styles.module.css"; // CSS Modules
import Card from "./courseCard";
import coursesData from "./courseData/courseData";
import Link from "next/link"; // Import Link from Next.js for navigation
import { motion } from "framer-motion"; // Import Framer Motion

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

  // Animation variants for the grid
  const gridVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger the card animations by 0.2 seconds
      },
    },
  };

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state (hidden and moved down)
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Final state (fade in and move up)
  };

  return (
    <div ref={descriptionRef} className={styles.exploreCourses}>
      <div className={styles.body}>
        {/* Title animation */}
        <SlideUpWord
          title={title}
          isInView={isInView}
          className={styles.title}
        />

        {/* Grid with card reveal animations */}
        <motion.div
          className={styles.grid}
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants} // Apply card animation
              className={styles.cardWrapper}
            >
              <Card
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
            </motion.div>
          ))}
        </motion.div>

        {/* Description fade-in animation */}
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
