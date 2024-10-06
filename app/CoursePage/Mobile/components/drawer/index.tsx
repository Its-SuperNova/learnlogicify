import React, { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import styles from "./styles.module.css";

interface DrawerProps {
  content: React.ReactNode; // Accept the drawer content via props
}

export const Drawer: React.FC<DrawerProps> = ({ content }) => {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {/* Filter button at the bottom of the screen */}
      <button
        onClick={() => setOpen(true)}
        className={styles.filterButton} // Adjusted style for bottom button
      >
        <IoFilterSharp className={styles.filterIcon} />
        <span className={styles.filterText}>Filter</span>
      </button>

      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className={styles.backdrop}
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className={styles.drawerContainer}
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className={styles.drawerHandle}>
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className={styles.handleButton}
              ></button>
            </div>
            <div className={styles.drawerContent}>{content}</div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Drawer;
