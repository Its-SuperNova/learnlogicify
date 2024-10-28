"use client";
import React from "react";
import styles from "./styles.module.css";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../../components/common/Animations/slideUpWord";
import FadeTransition from "../../../../components/common/Animations/textFade";
import { motion } from "framer-motion";
import { buttonReveal } from "../../../../components/common/Animations/animation";
import Rounded from "../../../../components/common/buttons/roundButton";
import Link from "next/link";
import Image from "next/image";
const OurServices = () => {
  const { ref: headertitleRef, inView: isheaderTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: subtitleRef, inView: issubTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: campustitleRef, inView: iscampusTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: campusdescRef, inView: iscampusDescInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: campusbuttonRef, inView: iscampusButtonInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: coursetitleRef, inView: iscourseTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: coursedescRef, inView: iscourseDescInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: coursebuttonRef, inView: iscourseButtonInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const headertitle = ["Services We Provide"];
  const title = ["Campus Training Services"];
  const coursetitle = ["Comprehensive Course Offerings"];
  const subtitle = `Explore our specialized services crafted to deliver outstanding results, driven by expertise and dedication.`;
  const descriptionPart1 = `Our placement training programs are carefully tailored to meet the unique needs of colleges and universities. With a focus on holistic career preparation, we combine technical skills training, aptitude development, and soft skills enhancement to equip students for real-world challenges.`;
  const descriptionPart2 = `Led by professional trainers with extensive industry experience, our programs bring valuable insights that help students stand out. We ensure that each participant is thoroughly prepared to meet the demands of their future careers with confidence and competence`;
  const CourseDescription1 = `Alongside placement training, we offer programming courses to build technical proficiency and deepen understanding of modern technologies. With options for beginners and advanced learners, our curriculum ensures a match for every skill level.`;
  const CourseDescription2 = `Courses include Python, C, C++, Java, Data Structures and Algorithms (DSA), Web Development, and more. Each course emphasizes hands-on learning to boost confidence and competence, preparing students for success in tech.`;
  return (
    <div className={styles.main}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <div className={styles.headertitle}>
            <div ref={headertitleRef}>
              <SlideUpWord
                title={headertitle}
                isInView={isheaderTitleInView}
                className={styles.headertitle}
              />
            </div>
          </div>
          <div ref={subtitleRef} className={styles.subtitleContainer}>
            <FadeTransition
              description={subtitle}
              isInView={issubTitleInView}
              className={styles.subtitle}
            />
          </div>
        </div>
      </div>
      <div className={styles.campuscontainer}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/services/campus-training.jpg"
              alt="About Portal Illustration"
              width={600}
              height={500}
              className={styles.responsiveImage}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div ref={campustitleRef}>
            <SlideUpWord
              title={title}
              isInView={iscampusTitleInView}
              className={styles.title}
            />
          </div>
          <div ref={campusdescRef} className={styles.desc}>
            <FadeTransition
              description={descriptionPart1}
              isInView={iscampusDescInView}
              className={styles.description1}
            />
            <FadeTransition
              description={descriptionPart2}
              isInView={iscampusDescInView}
              className={styles.description2}
            />
          </div>
          <div ref={campusbuttonRef} className={styles.btnContainer}>
            <motion.div
              variants={buttonReveal}
              initial="initial"
              animate={iscampusButtonInView ? "open" : "initial"}
            >
              <Link href={"/company/portal"}>
                <Rounded className={styles.btn}>
                  <p>About Portal</p>
                </Rounded>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className={styles.coursecontainer}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/services/course offerings.png"
              alt="About Portal Illustration"
              width={600}
              height={500}
              className={styles.responsiveImage}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div ref={coursetitleRef}>
            <SlideUpWord
              title={coursetitle}
              isInView={iscourseTitleInView}
              className={styles.title}
            />
          </div>
          <div ref={coursedescRef} className={styles.desc}>
            <FadeTransition
              description={CourseDescription1}
              isInView={iscourseDescInView}
              className={styles.description1}
            />
            <FadeTransition
              description={CourseDescription2}
              isInView={iscourseDescInView}
              className={styles.description2}
            />
          </div>
          <div ref={coursebuttonRef} className={styles.btnContainer}>
            <motion.div
              variants={buttonReveal}
              initial="initial"
              animate={iscourseButtonInView ? "open" : "initial"}
            >
              <Link href={"/company/portal"}>
                <Rounded className={styles.btn}>
                  <p>About Portal</p>
                </Rounded>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
