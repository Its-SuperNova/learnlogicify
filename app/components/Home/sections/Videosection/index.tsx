"use client"; // Ensure client-side rendering

import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Video from "../../VideoSection"; // Adjust path as necessary

gsap.registerPlugin(ScrollTrigger);

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null); // Ref for the container
  const videoElementRef = useRef<HTMLVideoElement>(null); // Ref for the video element

  useEffect(() => {
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        width: "70%", // Target size when scrolled to the end
        ease: "none", // Remove easing for smooth animation during scrolling
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top+=80px center", // Adjust start based on the padding
          end: "bottom top", // End when the video leaves the top of the viewport
          scrub: 1, // Scrub for smooth scroll-tied animation
        },
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.videoPlayer} ref={videoRef}>
        <Video
          ref={videoElementRef} // Pass the videoElementRef to the Video component
          src="/website-intro (1).mp4"
          poster="/images/thumbnail/image.png"
        />
      </div>
    </div>
  );
};

export default VideoSection;
