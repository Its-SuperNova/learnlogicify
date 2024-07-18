// offcanvas/index.tsx
import React from "react";
import styles from "./styles.module.css";
import NavMenu from "../Header/OffCanvasNavMenu"
import { AnimatePresence, motion } from "framer-motion";
import LightLogo from "../../images/lightLogo";
interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

const Offcanvas: React.FC<OffcanvasProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className={styles.offcanvas}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            onClick={(e) => e.stopPropagation()}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className={styles.logo}>
              <LightLogo />
            </div>
            <NavMenu />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Offcanvas;
