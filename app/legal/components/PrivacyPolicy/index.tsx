import React from "react";
import styles from "./styles.module.css";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";

const Privacy = () => {
  return (
    <div className={styles.privacyContainer}>
      <div className={styles.section}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>Privacy Policy</h3>
        </div>
        <div className={styles.lastUpdatedContainer}>
          <p className={styles.lastUpdated}>Last Updated: August 8, 2024</p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.introContainer}>
          <p className={styles.introText}>
            Welcome to LearnLogicify Technologies LLP ("Company," "We," "Us," or
            "Our"). We are committed to protecting your privacy and ensuring a
            secure experience on our website and while using our services. This
            Privacy Policy explains how we collect, use, and protect your
            information when you visit our website, enroll in our courses, or
            engage with our services.
            <br />
            By accessing our website and utilizing our services, you agree to
            the terms of this Privacy Policy. If you do not agree with this
            policy, please do not use our website or services.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Information We Collect</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <ul>
            <li>
              <FaCircle size={13} color="blue" />{" "}
              <p>
                <b>Personal Information: </b>
                Includes your name, email address, phone number, postal address,
                date of birth, and other personally identifiable information you
                provide during registration or through forms.
              </p>
            </li>
            <li>
              <FaCircle size={7} color="blue" />{" "}
              <p>
                <b>Payment Information: </b>
                Includes credit/debit card details, billing address, and
                transaction history.
              </p>
            </li>
            <li>
              <FaCircle size={10} color="blue" />{" "}
              <p>
                <b>Usage Data: </b> Includes information about how you interact
                with our website, such as pages visited, time spent on the
                website, and the links clicked.
              </p>
            </li>
            <li>
              <FaCircle size={7} color="blue" />{" "}
              <p>
                <b>Technical Data: </b> Includes your IP address, browser type,
                device type, and operating system.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>How We Use Your Information</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            We use the information we collect for various purposes, including:
          </p>
          <ul>
            <li>
              <FaCircle size={7} color="blue" /> To provide, maintain, and
              improve our services.
            </li>
            <li>
              <FaCircle size={7} color="blue" /> To process your course
              enrollment, transactions, and payments.
            </li>
            <li>
              <FaCircle size={7} color="blue" /> To personalize your experience
              and deliver content tailored to your interests.
            </li>
            <li>
              <FaCircle size={7} color="blue" /> To communicate with you
              regarding updates, promotions, or customer support.
            </li>
            <li>
              <FaCircle size={7} color="blue" /> To monitor and prevent
              fraudulent activity and ensure the integrity of our services.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>
            Cookies and Tracking Technologies
          </h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            We use cookies and similar tracking technologies to enhance your
            experience on our website. Cookies are small data files stored on
            your device that help us remember your preferences and improve our
            website's performance. You can choose to disable cookies through
            your browser settings, but doing so may affect your ability to
            access certain features of our website.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>How We Share Your Information</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information in the following
            cases:
          </p>
          <ul>
            <li>
              <FaCircle size={11} color="blue" />{" "}
              <p>
                <b>Service Providers:</b> We may share your information with
                trusted service providers who assist us in operating our
                website, processing payments, or providing customer support.
              </p>
            </li>
            <li>
              <FaCircle size={7} color="blue" />{" "}
              <p>
                <b>Legal Requirements:</b> We may disclose your information if
                required by law, regulation, or legal process.
              </p>
            </li>
            <li>
              <FaCircle size={9} color="blue" />{" "}
              <p>
                <b>Business Transfers:</b> If we undergo a merger, acquisition,
                or asset sale, your information may be transferred as part of
                the transaction.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Data Security</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            We take data security seriously and implement various measures to
            protect your information from unauthorized access, alteration, or
            disclosure. This includes using secure servers, encryption, and
            access controls. However, no online transmission of data is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Your Rights</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            You have certain rights regarding your personal information,
            including:
          </p>
          <ul>
            <li>
              <FaCircle size={7} color="blue" />{" "}
              <p>
                <b>Access:</b> You can request access to the personal
                information we hold about you.
              </p>
            </li>
            <li>
              <FaCircle size={7} color="blue" />{" "}
              <p>
                <b>Correction:</b> You can request corrections if your
                information is inaccurate or incomplete.
              </p>
            </li>
            <li>
              <FaCircle size={7} color="blue" />{" "}
              <p>
                <b>Deletion:</b> You can request that we delete your personal
                information, subject to certain legal obligations.
              </p>
            </li>
            <li>
              <FaCircle size={7} color="blue" />{" "}
              <p>
                <b>Opt-Out:</b> You can opt out of receiving promotional
                communications from us by following the unsubscribe link in our
                emails.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Data Retention</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            We retain your personal information as long as your account is
            active or as needed to provide you with our services. We may also
            retain your information to comply with legal obligations, resolve
            disputes, or enforce our agreements.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Monitoring and Exam Integrity</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            To ensure the integrity of our assessments, we use video and audio
            monitoring, screen tracking, and AI image capture during exams. Our
            system captures images every minute throughout the 2-hour exam,
            resulting in 120 images stored temporarily to detect any
            malpractice. By participating in our assessments, you consent to
            this monitoring.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Third-Party Links</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these websites. We
            encourage you to review their privacy policies before providing any
            personal information.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Changes to This Privacy Policy</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            We may update this Privacy Policy from time to time. If we make
            significant changes, we will notify you by posting the updated
            policy on our website or by sending an email. Your continued use of
            our services after any such changes constitutes your acceptance of
            the new terms.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Contact Us</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            If you have any questions or concerns about this Privacy Policy or
            how we handle your information, please contact us: <br />
            <br />
            <b>LearnLogicify Technologies LLP</b>
            <br />
            Coimbatore, Tamil Nadu - 641602
            <br />
            Email:{" "}
            <Link
              href="mailto:support@learnlogicify.com"
              className={styles.emailLink}
            >
              support@learnlogicify.com
            </Link>
            <br />
            WhatsApp:{" "}
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              className={styles.phoneLink}
            >
              +91 98765 43210
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
