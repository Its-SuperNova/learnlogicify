import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

const ButtonWrapper = () => {
  return (
    <div className={styles.buttonWrapper}>
      <SpotlightButton />
    </div>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    if (btnRef.current) {
      btnRef.current.addEventListener("mousemove", handleMouseMove);
      btnRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (btnRef.current) {
        btnRef.current.removeEventListener("mousemove", handleMouseMove);
        btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className={styles.button}
    >
      <span className={styles.span1}>Get Access</span>
      <span ref={spanRef} className={styles.span2} />
    </motion.button>
  );
};

export default ButtonWrapper;
