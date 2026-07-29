import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "About Me",
  description: "Meet the student behind HistoryTeen.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.destination}>
        <div className={`${styles.container} ${styles.destinationInner}`}>
          <p className={styles.eyebrow}>About me</p>
          <h1>The person behind HistoryTeen.</h1>
          <p className={styles.destinationIntro}>
            I am an incoming freshman in high school
          </p>
          <p className={styles.destinationIntro}>
            This page will introduce the student building HistoryTeen, the
            questions that sparked the project, and the mission behind it.
          </p>
          <Link className={styles.backLink} href="/">
            Back to the homepage
          </Link>
        </div>
      </main>
    </div>
  );
}
