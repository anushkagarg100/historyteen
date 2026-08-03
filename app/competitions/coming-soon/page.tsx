import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";
import SiteHeader from "../../site-header";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "A new HistoryTeen competition guide is in progress.",
};

export default function ComingSoonPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.destination}>
        <div className={`${styles.container} ${styles.destinationInner}`}>
          <p className={styles.eyebrow}>Competition guides</p>
          <h1>We&rsquo;re working on it.</h1>
          <p className={styles.destinationIntro}>
            This guide is still in progress. Please check back soon.
          </p>
          <Link className={styles.backLink} href="/competitions">
            Back to competitions
          </Link>
        </div>
      </main>
    </div>
  );
}
