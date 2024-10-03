import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Icon from "@/app/components/common/SVG/icons/Certificate";
import { FaArrowRightLong } from "react-icons/fa6";

const CertificationProcess = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.icon}>
            <Icon />
          </div>
          <div className={styles.title}>
            Certification Process and Requirements for the Basic Python Course
          </div>
        </div>
        <div className={styles.right}>
          <Link href="/#">
            <div className={styles.viewMore}>
              <div>View More</div>
              <div>
                <FaArrowRightLong />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        <p>
          Upon successfully completing the Basic Python Course, you will be
          required to attend a proctored exam. This exam is conducted with high
          security, including screen recording and video recording, to ensure
          integrity. The certificate will be generated after completing this
          proctored exam, which is for 100 marks and contributes 75% to your
          final score. In addition to the proctored exam, there are practice
          problems available on our portal for each module. The scores from
          these practice problems will be converted to contribute the remaining
          25% to your final score. The total score will be calculated by
          combining both components.
        </p>
        <p>
          To be eligible for the certificate, you must meet the following
          criteria:
        </p>
        <ul className={styles.customList}>
          <li>Achieve at least 15% in the practice problems.</li>
          <li>Score 50% or more in the proctored exam.</li>
        </ul>
        <p>
          If these conditions are met, you will receive a certificate. If not,
          you will have the opportunity to retake the proctored exam once more.
        </p>
        <p>
          This structured evaluation ensures that only those who truly
          understand and can apply the course content will be awarded the
          certificate, maintaining the integrity and value of the certification.
        </p>
      </div>
    </div>
  );
};

export default CertificationProcess;
