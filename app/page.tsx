import styles from "./page.module.css";
import SiteHeader from "./site-header";

export default function Home() {
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#main">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        {/* Hero */}
        <section className={styles.section}>
          <div className={`${styles.container} ${styles.hero}`}>
            <p className={styles.eyebrow}>
              Established 2026 &middot; Issue No. 1 in preparation
            </p>
            <h1>
              History for people who are still in school, written as though they
              aren&rsquo;t.
            </h1>
            <p className={styles.lede}>
              HistoryTeen publishes long-form essays on the ancient world,
              empire, revolution, and the century that made ours. Every claim is
              sourced. Nothing is rounded down.
            </p>
          </div>
        </section>

        {/* Placeholder */}
        <section className={styles.section}>
          <div className={`${styles.container} ${styles.sectionBody}`}>
            <p className={styles.eyebrow}>More to come</p>
            <p className={styles.deck}>
              We&rsquo;re building the next chapter of HistoryTeen. Check back
              soon for new ways to explore the past.
            </p>
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <p className={styles.wordmark}>
            History<span>Teen</span>
          </p>
          <p>&copy; {new Date().getFullYear()} HistoryTeen</p>
        </div>
      </footer>
    </div>
  );
}
