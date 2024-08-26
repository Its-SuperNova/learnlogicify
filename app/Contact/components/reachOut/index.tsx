"use client";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

const ReachOut = () => {
  const emailIconRef = useRef<HTMLDivElement>(null);
  const phoneIconRef = useRef<HTMLDivElement>(null);
  const locationIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadLordiconScript = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.lordicon.com/lordicon.js";
      script.async = true;
      document.body.appendChild(script);
    };

    loadLordiconScript();

    const handleHoverEffect = (iconRef: React.RefObject<HTMLDivElement>) => {
      const lordIcon = iconRef.current?.querySelector("lord-icon");

      if (lordIcon) {
        const handleMouseEnter = () => {
          lordIcon.setAttribute("trigger", "hover");
          lordIcon.dispatchEvent(new Event("mouseenter"));
        };

        const handleMouseLeave = () => {
          lordIcon.setAttribute("trigger", "none");
        };

        iconRef.current?.addEventListener("mouseenter", handleMouseEnter);
        iconRef.current?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          iconRef.current?.removeEventListener("mouseenter", handleMouseEnter);
          iconRef.current?.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    };

    handleHoverEffect(emailIconRef);
    handleHoverEffect(phoneIconRef);
    handleHoverEffect(locationIconRef);
  }, []);

  return (
    <main>
      <div className={styles.container}>
        <header>
          <div className={styles.ReachOutContainer}>
            <p>Reach Out</p>
          </div>
          <h2 className={styles.title}>We&apos;d love to hear from you!</h2>
          <p className={styles.subtitle}>
            Reach out with any questions or ideas – we&apos;re here to help!
          </p>
        </header>
        <section className={styles.cardContainer}>
          {/* Email Support Card */}
          <div className={styles.card} ref={emailIconRef}>
            <lord-icon
              src="https://cdn.lordicon.com/ebjjjrhp.json"
              trigger="none"
              stroke="bold"
              colors="primary:#121331,secondary:#6c16c7"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
            <h3 className={styles.h3}>Email Support</h3>
            <p className={styles.desc}>Quick responses to all your queries.</p>
            <p className={styles.link}>support@learnlogicify.com</p>
            <FaArrowRightLong
              size={30}
              color="#6c16c7"
              className={styles.arrow}
            />
          </div>

          {/* Phone Support Card */}
          <div className={styles.card} ref={phoneIconRef}>
            <lord-icon
              src="https://cdn.lordicon.com/rsvfayfn.json"
              trigger="none"
              colors="primary:#6c16c7"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
            <h3 className={styles.h3}>Phone Support</h3>
            <p className={styles.desc}>Speak directly with our support team.</p>
            <p className={styles.link}>+91 89250 84608</p>
            <FaArrowRightLong
              size={30}
              color="#6c16c7"
              className={styles.arrow}
            />
          </div>

          {/* Office Location Card */}
          <div className={styles.card} ref={locationIconRef}>
            <lord-icon
              src="https://cdn.lordicon.com/surcxhka.json"
              trigger="none"
              stroke="bold"
              colors="primary:#121331,secondary:#6c16c7"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
            <h3 className={styles.h3}>Visit Our Office</h3>
            <p className={styles.desc}>We’re here to welcome you anytime.</p>
            <p className={styles.link}>
              Coimbatore , Tamilnadu -641 602
            </p>
            <FaArrowRightLong
              size={30}
              color="#6c16c7"
              className={styles.arrow}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default ReachOut;
