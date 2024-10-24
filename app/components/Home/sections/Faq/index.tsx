"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import SlideUpWord from "../../../common/Animations/slideUpWord";
import styles from "./styles.module.css";

export default function ExplorePopularCourses() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const title = ["Frequently asked questions?"];
  const subTitle = ["We've Got Answers"];

  const faqs = [
    {
      question: "What courses does LearnLogicify offer?",
      answer:
        "LearnLogicify provides courses in DSA, company-specific training, and essential tech skills, designed to accelerate your tech career.",
    },
    {
      question: "How do I enroll in a course?",
      answer:
        "Enrolling is easy! Simply browse our course catalog, choose the course you want, and click 'Enroll Now' to start your journey.",
    },
    {
      question: "What if I need help during my course?",
      answer:
        "Our expert trainers and dedicated support team are here to assist you throughout your learning experience. You can reach out via our platform or email.",
    },
    {
      question: "Is there a limit to how many courses I can take?",
      answer:
        "There are no limits! You can take as many courses as you want to enhance your skills and career growth.",
    },
    {
      question: "Why should I choose LearnLogicify over other platforms?",
      answer:
        "We offer personalized learning, real-world projects, and expert guidance at a competitive price, focusing on tech industry careers.",
    },
    {
      question: "How can I provide feedback on the courses?",
      answer:
        "You can share your feedback directly through the course platform, or you can email us. We value your input!",
    },
    {
      question: "Can I schedule one-on-one sessions with trainers?",
      answer:
        "Yes, one-on-one sessions can be scheduled for personalized learning support.",
    },
    {
      question: "What’s your refund policy?",
      answer:
        "If you’re not satisfied with your course, you can request a refund within 14 days of purchase.",
    },
    {
      question: "Is there any certification after completing a course?",
      answer:
        "Yes! Upon successfully passing the final test, you'll receive a certification verified by LearnLogicify.",
    },
    {
      question: "How can I cancel my course enrollment?",
      answer:
        "You can cancel your enrollment at any time through our platform, with no long-term commitment.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Divide FAQs into two columns
  const firstColumnFAQs = faqs.slice(0, 5);
  const secondColumnFAQs = faqs.slice(5);

  return (
      <div ref={descriptionRef} className={styles.exploreCourses}>
        <div className={styles.body}>
          <SlideUpWord
            title={title}
            isInView={isInView}
            className={styles.title}
          />
          <SlideUpWord
            title={subTitle}
            isInView={isInView}
            className={styles.subTitle}
          />
          <div className={styles.faqSection}>
            <div className={styles.column}>
              {firstColumnFAQs.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqCard} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className={styles.question}>
                    {faq.question}
                    <span
                      className={`${styles.icon} ${
                        activeIndex === index ? styles.clicked : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        className={styles.answer}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div className={styles.column}>
              {secondColumnFAQs.map((faq, index) => (
                <div
                  key={index + 5} // Offset the index for the second column
                  className={`${styles.faqCard} ${
                    activeIndex === index + 5 ? styles.active : ""
                  }`}
                  onClick={() => toggleFAQ(index + 5)}
                >
                  <div className={styles.question}>
                    {faq.question}
                    <span
                      className={`${styles.icon} ${
                        activeIndex === index + 5 ? styles.clicked : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                  <AnimatePresence>
                    {activeIndex === index + 5 && (
                      <motion.div
                        className={styles.answer}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
