import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "Competitions",
  description:
    "History competitions, contests, and opportunities for teenage students.",
};

export default function CompetitionsPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.destination}>
        <div className={`${styles.container} ${styles.destinationInner}`}>
          <p className={styles.eyebrow}>Competitions</p>
          <h1>Put your historical thinking to the test.</h1>
          <p className={styles.destinationIntro}>
            A curated guide to essay contests, history bowls, research
            challenges, and other opportunities for teenage historians is
            coming soon.
          </p>
          <Link className={styles.backLink} href="/">
            Back to the homepage
          </Link>
        </div>
      </main>
    </div>
  );
}
