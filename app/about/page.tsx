import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Meet Anushka Garg and learn how HistoryTeen helps young people find a path forward in history.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.destination}>
        <div className={`${styles.container} ${styles.destinationInner}`}>
          <p className={styles.eyebrow}>About me</p>
          <h1>Our Mission</h1>
          <p className={styles.destinationIntro}>
            To ignite an interest in the past and show kids a path forward in
            history.
          </p>

          <div className={styles.missionStory}>
            <div className={styles.missionProse}>
              <p>
                Since elementary school, I have been a history enthusiast.
                Nothing gave me more joy than flipping through thick
                encyclopedias (a favorite was a well worn copy of Picturepedia)
                and watching Brainpop videos, each fact giving me more insight
                into the world and our social heritage.
              </p>
              <p>
                But where to go with this interest? After lots of research, I
                found history contests I could be a part of. They gave me so
                much confidence, a community to be part of, and a clear career
                path forward in the humanities. Not only that, but I learned so
                much about history itself—a fascinating subject that is
                arguably slept on.
              </p>
              <p>
                Now, as a high school student, I want to give other
                history-obsessed kids a place they can channel their interest, a
                place I wish I had when I was starting out. Are you interested
                in the subject but don&rsquo;t know how to develop it? Have you
                just begun competing but are clueless about strategy? Or just
                looking for something to get into?
              </p>
              <p>
                It&rsquo;s all here. Resources of every kind, to get YOU in the
                history zone.
              </p>
              <p>
                To paraphrase Laozi, &ldquo;A history journey of a thousand
                miles begins with History Teen.&rdquo;
              </p>
              <p className={styles.missionSignoff}>Happy learning!!</p>
            </div>
          </div>

          <Link className={styles.backLink} href="/">
            Back to the homepage
          </Link>
        </div>
      </main>
    </div>
  );
}
