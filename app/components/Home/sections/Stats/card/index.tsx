import React, { useState } from "react";
import Lottie from "react-lottie";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";

interface StatsCardProps {
  count: number;
  title: string;
  animationData: any; // Type for Lottie animation data
}

const StatsCard: React.FC<StatsCardProps> = ({
  count,
  title,
  animationData,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Lottie animation configuration
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData, // Use the passed animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { ref, inView } = useInView({
    triggerOnce: false, // We want the animation to trigger every time
    threshold: 0.5, // Adjust this as needed for the visibility threshold
  });

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={ref} // Attach the intersection observer ref
    >
      <div className={styles.iconBox}>
        <Lottie
          options={defaultOptions}
          isStopped={!isHovered} // Starts the animation on hover
          isPaused={!isHovered} // Pauses the animation when not hovered
          height={55}
          width={55}
        />
      </div>
      <div className={styles.content}>
        {inView ? (
          <CountUp
            start={0}
            end={count} // Dynamic count value
            duration={2.5} // Set the animation duration
            separator=","
            suffix="+"
            key={inView ? "count-up-visible" : "count-up-hidden"} // Changing the key forces a re-render
          >
            {({ countUpRef }) => (
              <p
                className={styles.count}
                ref={countUpRef as React.RefObject<HTMLParagraphElement>}
              ></p>
            )}
          </CountUp>
        ) : (
          <p className={styles.count}>0</p> // Show 0 when not in view
        )}
        <p className={styles.title}>{title}</p> {/* Dynamic title */}
      </div>
    </div>
  );
};

export default StatsCard;
