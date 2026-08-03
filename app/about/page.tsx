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
            <p className={styles.missionIntro}>
              Hi! My name is Anushka Garg, and I am a student at Eastlake High
              School. A little bit about me:
            </p>
            <div className={styles.missionProse}>
              <p>
                Since elementary school, I have been a history enthusiast. But
                my passion was a bit offbeat—and because I didn&rsquo;t enjoy
                math or science, I struggled to find something that would match
                my interests.
              </p>
              <p>
                After lots of agonizing and researching, I found history
                competitions that I could take part in. They gave me so much
                confidence, a community to be part of, and a clear career path
                forward in the humanities. Not only that, but I learned so much
                about history itself—a fascinating subject that is arguably
                slept on.
              </p>
              <p>
                After competing for three years, I find that a lot of kids are
                facing similar issues to those I encountered in elementary
                school. They&rsquo;re not interested in more traditional
                competitions, but they still want to be involved in something.
                Or they like history, but they don&rsquo;t know what to do with
                that interest.
              </p>
            </div>
          </div>

          <div className={styles.myths}>
            <p className={styles.kicker}>Never fear—HistoryTeen is here</p>
            <h3>Two myths we&rsquo;re here to debunk</h3>
            <ol className={styles.mythList}>
              <li>
                <span className={styles.principleNum}>01</span>
                <p>
                  &ldquo;History is boring, old-fashioned, and completely
                  irrelevant.&rdquo;
                </p>
              </li>
              <li>
                <span className={styles.principleNum}>02</span>
                <p>&ldquo;What will I do with history? Nothing.&rdquo;</p>
              </li>
            </ol>
          </div>

          <div className={styles.missionStory}>
            <p className={styles.missionIntro}>The truth about history</p>
            <div className={styles.missionProse}>
              <p>
                History is an incredibly versatile field, with new discoveries
                being made all the time. Contrary to the first myth, history is
                not irrelevant or boring. In fact, the more you study history,
                the more you gain a new way of seeing the world. There are many
                different books you can check out on our website to learn more
                about history, as well as quizzes and articles.
              </p>
              <p>
                On to the second myth: there are plenty of things you can do
                with history. In our Competitions list, we have contests and
                programs you can take part in to stoke your passion. Not only
                that, but we feature interviews with many different history
                professionals who have gone on to make careers out of their
                budding interest.
              </p>
              <p>
                My main objective is to support you wherever you are on your
                history journey and create the space I wish I had when I was
                just starting out. Hopefully, entering this website will spark
                a long and fruitful history journey for you as well.
              </p>
              <p className={styles.missionSignoff}>Happy learning!</p>
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
