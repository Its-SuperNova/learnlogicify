import React from "react";
import styles from "./styles.module.css";

const Refund = () => {
  return (
    <div className={styles.refundContainer}>
      <div className={styles.section}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>Refund Policy</h3>
        </div>
        <div className={styles.lastUpdatedContainer}>
          <p className={styles.lastUpdated}>Last Updated: August 8, 2024</p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.introContainer}>
          <p className={styles.introText}>
            At LearnLogicify Technologies LLP, we value your satisfaction and
            aim to ensure that you are pleased with our courses and services.
            However, we understand that sometimes a refund may be necessary.
            This Refund Policy outlines the terms and conditions regarding
            refunds for our products and services.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Eligibility for Refund</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <ul>
            <li>
              <span className={styles.bullet}>●</span>{" "}
              <p>
                <b>Course Purchases:</b> Refunds are available within 7 days of
                purchase if you have not accessed more than 10% of the course
                content.
              </p>
            </li>
            <li>
              <span className={styles.bullet}>●</span>{" "}
              <p>
                <b>Bootcamps and Special Programs:</b> Due to the nature of live
                sessions and limited slots, refunds for bootcamps are available
                only before the first session begins.
              </p>
            </li>
            <li>
              <span className={styles.bullet}>●</span>{" "}
              <p>
                <b>Services:</b> Refunds for additional services (e.g., resume
                review, mentorship) are processed on a case-by-case basis and
                depend on the service&apos;s completion stage.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Refund Process</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            If you meet the eligibility criteria, you can request a refund by
            contacting our support team at{" "}
            <a
              href="mailto:support@learnlogicify.com"
              className={styles.emailLink}
            >
              support@learnlogicify.com
            </a>
            . Please include your order details and the reason for your refund
            request. Our team will review your request and respond within 5-7
            business days.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Partial Refunds</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            In some cases, a partial refund may be granted. This typically
            applies if you have accessed a portion of the course content or if a
            service has already been partially delivered. The amount refunded
            will be prorated based on the content accessed or service provided.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Non-Refundable Items</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <ul>
            <li>
              <span className={styles.bullet}>●</span>{" "}
              <p>
                <b>Discounted Purchases:</b> Items purchased at a discount or as
                part of a promotion are non-refundable.
              </p>
            </li>
            <li>
              <span className={styles.bullet}>●</span>{" "}
              <p>
                <b>Digital Downloads:</b> Digital products like eBooks, study
                guides, and templates are non-refundable once downloaded.
              </p>
            </li>
            <li>
              <span className={styles.bullet}>●</span>{" "}
              <p>
                <b>Completed Services:</b> Once a service has been fully
                rendered, it is non-refundable.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Processing Refunds</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Refunds will be processed using the original payment method. It may
            take 7-10 business days for the refund to reflect in your account,
            depending on your bank or payment provider.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Changes to This Refund Policy</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            We may update this Refund Policy from time to time. If we make
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
            If you have any questions or concerns about this Refund Policy or
            need assistance with your refund request, please contact us: <br />
            <br />
            <b>LearnLogicify Technologies LLP</b>
            <br />
            Coimbatore, Tamil Nadu - 641602
            <br />
            Email:{" "}
            <a
              href="mailto:support@learnlogicify.com"
              className={styles.emailLink}
            >
              support@learnlogicify.com
            </a>
            <br />
            WhatsApp:{" "}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className={styles.phoneLink}
            >
              +91 98765 43210
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Refund;
