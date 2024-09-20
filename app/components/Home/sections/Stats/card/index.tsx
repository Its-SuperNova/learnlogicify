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
    triggerOnce: false,
    threshold: 0.5, 
  });

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={ref} 
    >
      <div className={styles.iconBox}>
        <Lottie
          options={defaultOptions}
          isStopped={!isHovered} 
          isPaused={!isHovered} 
          height={55}
          width={55}
        />
      </div>
      <div className={styles.content}>
        {inView ? (
          <CountUp
            start={0}
            end={count} 
            duration={2.5} 
            separator=","
            suffix="+"
            key={inView ? "count-up-visible" : "count-up-hidden"} 
          >
            {({ countUpRef }) => (
              <p
                className={styles.count}
                ref={countUpRef as React.RefObject<HTMLParagraphElement>}
              ></p>
            )}
          </CountUp>
        ) : (
          <p className={styles.count}>0</p> 
        )}
        <p className={styles.title}>{title}</p> 
      </div>
    </div>
  );
};

export default StatsCard;
