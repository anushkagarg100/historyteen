import Link from "next/link";
import styles from "./page.module.css";
import SiteHeader from "./site-header";

type SectionPlaceholderProps = {
  title: string;
};

export default function SectionPlaceholder({
  title,
}: SectionPlaceholderProps) {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.destination}>
        <div className={`${styles.container} ${styles.destinationInner}`}>
          <p className={styles.eyebrow}>Coming soon</p>
          <h1>{title}</h1>
          <p className={styles.destinationIntro}>
            We&rsquo;re working on this section now. Check back soon for
            something new from HistoryTeen.
          </p>
          <Link className={styles.backLink} href="/">
            Back to the homepage
          </Link>
        </div>
      </main>
    </div>
  );
}
