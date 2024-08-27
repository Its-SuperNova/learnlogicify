"use client";
import React, { useRef } from "react";
import styles from "./styles.module.css";
import RoundButton from "../../../components/common/buttons/roundButton";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6hnne5g",
        "template_zqmxyuq",
        form.current || "",
        "MwYEue3OMW5_CaHhl"
      )
      .then(
        () => {
          emailjs.sendForm(
            "service_6hnne5g",
            "template_85ez3ch",
            form.current || "",
            "MwYEue3OMW5_CaHhl"
          );
          Swal.fire({
            title: "Good job!",
            text: "Message sent successfully!",
            icon: "success",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} className={styles.form} onSubmit={sendEmail}>
      <div className={styles.formGroup}>
        <div className={styles.formField}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="from_name" // Matching the template variable
            className={styles.input}
            placeholder="Your Name"
            required
          />
        </div>
        <div className={styles.formField}>
          <label className={styles.label} htmlFor="phone">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="user_phone"
            className={styles.input}
            placeholder="Your Phone"
            required
          />
        </div>
      </div>
      <div className={styles.formField}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="from_email" // Matching the template variable
          className={styles.input}
          placeholder="Your Email"
          required
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message" // Matching the template variable
          className={styles.input}
          placeholder="Your Message"
          rows={5}
          required
        />
      </div>
      <RoundButton type="submit">
        <p>Send Message</p>
      </RoundButton>
    </form>
  );
};

export default ContactForm;
