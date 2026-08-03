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
            In my opinion, the best parts of history lie in stumbling on new,
            different stories, often from unexpected sources. If you don&rsquo;t
            know anything about the subject and want to learn something new,
            this is a great place to start.
          </p>

          <section className={styles.blogList} aria-label="Blog posts">
            <article className={styles.blogPost}>
              <p className={styles.kicker}>Featured post &middot; Substack</p>
              <h2>
                <a
                  href="https://anushkagargwrites.substack.com/p/introducing-the-bone-wars"
                  target="_blank"
                  rel="noreferrer"
                >
                  Introducing... the Bone Wars!
                </a>
              </h2>
              <a
                className={styles.competitionLink}
                href="https://anushkagargwrites.substack.com/p/introducing-the-bone-wars"
                target="_blank"
                rel="noreferrer"
              >
                Read on Substack &nearr;
              </a>
            </article>

            <article className={styles.blogPost}>
              <p className={styles.kicker}>Post &middot; Substack</p>
              <h2>
                <a
                  href="https://anushkagargwrites.substack.com/p/to-americas-250th"
                  target="_blank"
                  rel="noreferrer"
                >
                  To America&rsquo;s 250th
                </a>
              </h2>
              <a
                className={styles.competitionLink}
                href="https://anushkagargwrites.substack.com/p/to-americas-250th"
                target="_blank"
                rel="noreferrer"
              >
                Read on Substack &nearr;
              </a>
            </article>
          </section>

          <Link className={styles.backLink} href="/">
            Back to the homepage
          </Link>
        </div>
      </main>
    </div>
  );
}
