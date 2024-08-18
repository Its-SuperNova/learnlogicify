import React from "react";
import styles from "./styles.module.css";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";

const RefundPolicy = () => {
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
            At LearnLogicify Technologies LLP, we prioritize your satisfaction.
            We understand that circumstances may arise where a refund is
            required. Please review our refund policy carefully to understand
            the conditions and eligibility for refunds on our courses and
            services.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Course Duration</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Our courses are available in two subscription plans:
          </p>
          <ul>
            <li>
              <FaCircle size={7} color="blue" /> <b>6-Month Access</b>
            </li>
            <li>
              <FaCircle size={7} color="blue" /> <b>12-Month Access</b>
            </li>
          </ul>
          <p className={styles.paragraph}>
            During this period, you will have full access to all course
            materials and support. The subscription automatically ends after the
            chosen period unless renewed.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Refund Eligibility</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>You are eligible for a refund if:</p>
          <ul>
            <li>
              <FaCircle size={7} color="blue" /> You are dissatisfied with the
              course content or experience.
            </li>
            <li>
              <FaCircle size={7} color="blue" /> You submit a refund request
              within <b>7 days</b> from the date of purchase.
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
            To initiate a refund, please follow these steps:
          </p>
          <ul>
            <li>
              <FaCircle size={7} color="blue" /> Send an email to{" "}
              <a
                href="mailto:support@learnlogicify.com"
                className={styles.emailLink}
              >
                support@learnlogicify.com
              </a>{" "}
              with the subject line "Refund Request - [Your Course Name]".
            </li>
            <li>
              <FaCircle size={7} color="blue" /> In the email, include your
              purchase details, such as the order number and the reason for
              requesting a refund.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Refund Amount</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Refunds will cover <b>90%</b> of the purchase amount, with the
            remaining 10% deducted as a processing fee. Refunds will be
            processed within <b>10-15 business days</b> from the date of
            approval.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Non-Refundable Situations</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Refunds will not be granted in the following situations:
          </p>
          <ul>
            <li>
              <FaCircle size={7} color="blue" /> The refund request is made
              after 7 days from the date of purchase.
            </li>
            <li>
              <FaCircle size={7} color="blue" /> The user has completed more
              than 30% of the course content.
            </li>
            <li>
              <FaCircle size={7} color="blue" /> The user has violated any of
              our terms and conditions, resulting in account suspension or
              termination.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Payment Method for Refunds</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Refunds will be issued back to the original payment method used
            during purchase (credit card, debit card, online payment gateway,
            etc.). We are not responsible for any delays caused by the payment
            gateway or financial institution.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subheadingContainer}>
          <h4 className={styles.subheading}>Contact Information for Refunds</h4>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            If you have any questions regarding the refund policy or need
            further assistance, please reach out to us at:
            <br />
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

export default RefundPolicy;
