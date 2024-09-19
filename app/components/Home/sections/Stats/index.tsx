"use client";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../common/Animations/slideUpWord";
import styles from "./styles.module.css";
import Card from "./card";
import Avator from "./lottie/avator.json";

export default function ExplorePopularCourses() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const title = ["Our work in Numbers"];

  return (
    <div ref={descriptionRef} className={styles.Stats}>
      <div className={styles.body}>
        <SlideUpWord
          title={title}
          isInView={isInView}
          className={styles.title}
        />
        <div className={styles.grid}>
          <Card count={1000} title="Active Learners" animationData={Avator} />
          <Card count={500} title="Courses Available" animationData={Avator} />
          <Card count={150} title="Trainers" animationData={Avator} />
          <Card
            count={300}
            title="Certifications Issued"
            animationData={Avator}
          />
          <Card count={200} title="Projects Completed" animationData={Avator} />
          <Card count={50} title="Partner Companies" animationData={Avator} />
          <Card count={120} title="Workshops Held" animationData={Avator} />
          <Card count={80} title="Webinars Hosted" animationData={Avator} />
          <Card count={80} title="Webinars Hosted" animationData={Avator} />
        </div>
      </div>
    </div>
  );
}
