"use client";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../common/Animations/slideUpWord"; // Slide up animation for the title
import FadeTransition from "../../../common/Animations/textFade"; // Fade transition animation for the description
import styles from "./styles.module.css"; // CSS Modules

export default function ExplorePopularCourses() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const title = ["Explore Our Popular Courses"];
  const description =
    "Jumpstart your journey with our top courses in DSA, company-specific training, and essential tech skills. Discover more below!";

  return (
    <div ref={descriptionRef} className={styles.exploreCourses}>
      <div className={styles.body}>
        <SlideUpWord
          title={title}
          isInView={isInView}
          className={styles.title}
        />
        <FadeTransition
          description={description}
          isInView={isInView}
          className={styles.descriptionText}
        />
      </div>
    </div>
  );
}
