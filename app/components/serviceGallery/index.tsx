"use client";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../common/Animations/slideUpWord";
import styles from "./styles.module.css";

export default function ServiceGallery() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  const title = ["Look into our Training and ", "Service Gallery"];

  return (
    <div ref={descriptionRef} className={styles.serviceGallery}>
      <SlideUpWord title={title} isInView={isInView} className={styles.title} />

    </div>
  );
}
