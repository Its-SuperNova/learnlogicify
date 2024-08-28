"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
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
          <Link href="mailto:support@learnlogicify.com" passHref>
            <div className={styles.card} ref={emailIconRef}>
              <lord-icon
                src="https://cdn.lordicon.com/ebjjjrhp.json"
                trigger="none"
                stroke="bold"
                colors="primary:#121331,secondary:#00FF7C"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
              <h3 className={styles.h3}>Email Support</h3>
              <p className={styles.desc}>
                Quick responses to all your queries.
              </p>
              <p className={styles.link_1}>support@learnlogicify.com</p>
              <FaArrowRightLong
                size={30}
                color="#00FF7C"
                className={styles.arrow}
              />
            </div>
          </Link>

          {/* Phone Support Card */}
          <Link href="https://wa.me/918925084608" passHref>
            <div className={styles.card} ref={phoneIconRef}>
              <lord-icon
                src="https://cdn.lordicon.com/rsvfayfn.json"
                trigger="none"
                colors="primary:#008BFF"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
              <h3 className={styles.h3}>Phone Support</h3>
              <p className={styles.desc}>
                Speak directly with our support team.
              </p>
              <p className={styles.link_2}>+91 89250 84608</p>
              <FaArrowRightLong
                size={30}
                color="#008BFF"
                className={styles.arrow}
              />
            </div>
          </Link>

          {/* Office Location Card */}
          <Link
            href="https://www.google.com/maps/search/?api=1&query=Coimbatore,Tamilnadu-641602"
            passHref
          >
            <div className={styles.card} ref={locationIconRef}>
              <lord-icon
                src="https://cdn.lordicon.com/surcxhka.json"
                trigger="none"
                stroke="bold"
                colors="primary:#121331,secondary:#FF001C"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
              <h3 className={styles.h3}>Visit Our Office</h3>
              <p className={styles.desc}>We’re here to welcome you anytime.</p>
              <p className={styles.link_3}>Coimbatore , Tamilnadu -641 602</p>
              <FaArrowRightLong
                size={30}
                color="#FF001C"
                className={styles.arrow}
              />
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default ReachOut;
