"use client";

import { useState } from "react";
import styles from "./subscribe-form.module.css";

/**
 * Front-end only. Nothing is transmitted or stored yet.
 *
 * TODO: point the submit handler at a real list before promising anyone a
 * newsletter — e.g. a Next.js Route Handler that forwards to Buttondown,
 * ConvertKit, or Resend Audiences.
 */
export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className={styles.confirmation} role="status">
        Noted &mdash; <span>{email}</span>. Fair warning: the list isn&rsquo;t
        wired to a mail provider yet, so nothing has actually been stored.
      </p>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        if (email.trim()) setSubmitted(true);
      }}
    >
      <label className={styles.srOnly} htmlFor="subscribe-email">
        Email address
      </label>
      <input
        id="subscribe-email"
        className={styles.input}
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="you@school.edu"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button className={styles.submit} type="submit">
        Subscribe
      </button>
    </form>
  );
}
