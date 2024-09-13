"use client";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../Animations/slideUpWord";
import styles from "./styles.module.css";

export default function ServiceGallery() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false, // Re-trigger the animation when in view
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  // Title for the ServiceGallery section with a line break after "Training"
  const title = ["Look into our Training and ", "Service Gallery"];

  return (
    <div ref={descriptionRef} className={styles.serviceGallery}>
      <SlideUpWord title={title} isInView={isInView} className={styles.title} />
    </div>
  );
}
