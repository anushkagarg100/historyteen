import type { Metadata } from "next";
import SiteHeader from "../site-header";
import styles from "../page.module.css";
import SiteSearch from "./site-search";

export const metadata: Metadata = {
  title: "Search",
  description: "Search HistoryTeen sections and resources.",
};

export default function SearchPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.destination}>
        <div className={`${styles.container} ${styles.destinationInner}`}>
          <p className={styles.eyebrow}>Search</p>
          <h1>Find something historical.</h1>
          <SiteSearch />
        </div>
      </main>
    </div>
  );
}
