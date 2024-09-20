"use client";
import { useInView } from "react-intersection-observer";
import { BsArrowRight } from "react-icons/bs"; // Import arrow icon from react-icons
import SlideUpWord from "../../../common/Animations/slideUpWord"; // Slide up animation for the title
import FadeTransition from "../../../common/Animations/textFade"; // Fade transition animation for the description
import styles from "./styles.module.css"; // CSS Modules
import Link from "next/link"; // Import Link from Next.js for navigation
import Card from "./card";
import { motion } from "framer-motion"; // Import Framer Motion

export default function ExplorePopularCourses() {
  // Use react-intersection-observer to detect if the section is in view
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.2, // Adjust the threshold as necessary
  });

  const title = ["Hear What Our Students Say !"];
  const description =
    "Discover inspiring feedback from our students, showcasing how LearnLogicify has transformed their learning experiences and accelerated their tech careers.";

  // Variants for the grid that will stagger children animations
  const gridVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger children with 0.2s delay between each
      },
    },
  };

  // Variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial hidden state (fade and move down)
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Final visible state (fade up)
  };

  return (
    <div ref={descriptionRef} className={styles.exploreCourses}>
      <div className={styles.body}>
        {/* Pass isInView to both SlideUpWord and FadeTransition components */}
        <SlideUpWord
          title={title}
          isInView={isInView}
          className={styles.title}
        />
        <FadeTransition
          description={description}
          isInView={isInView} // Pass isInView prop to handle animation logic inside FadeTransition
          className={styles.descriptionText}
        />
        {/* Add motion.div to wrap the grid for staggered animation */}
        <motion.div
          className={styles.grid}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible" // Triggers animation each time the section comes into view
          viewport={{ once: false, amount: 0.2 }} // Controls when animation starts, and repeats
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={styles.cardWrapper}
            >
              <Card />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
