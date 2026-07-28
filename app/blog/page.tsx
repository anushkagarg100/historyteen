import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "Blog",
  description: "HistoryTeen essays, stories, and ideas for curious readers.",
};

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.destination}>
        <div className={`${styles.container} ${styles.destinationInner}`}>
          <p className={styles.eyebrow}>The blog</p>
          <h1>History is an argument worth joining.</h1>
          <p className={styles.destinationIntro}>
            Essays, unusual stories, primary sources, and fresh ways into the
            past will live here. The first posts are in preparation.
          </p>
          <Link className={styles.backLink} href="/">
            Back to the homepage
          </Link>
        </div>
      </main>
    </div>
  );
}
