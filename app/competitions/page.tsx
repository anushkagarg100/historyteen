import type { Metadata } from "next";
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
            From fast-paced quiz tournaments to months-long original research,
            these are two of the best places to begin competing in history.
          </p>

          <div className={styles.competitionList}>
            <section className={styles.competitionSection}>
              <div>
                <p className={styles.kicker}>Quiz competition</p>
                <h2>International Academic Competitions</h2>
                <p className={styles.competitionName}>IAC</p>
              </div>
              <div className={styles.competitionDetails}>
                <p>
                  IAC organizes academic quiz tournaments for primary and
                  secondary students. Its history events include the
                  individual International History Bee and the team-based
                  International History Bowl.
                </p>
                <ul className={styles.competitionFacts}>
                  <li>
                    <strong>Best for</strong>
                    Students who enjoy quick recall, broad knowledge, and
                    buzzer-based competition.
                  </li>
                  <li>
                    <strong>Formats</strong>
                    Compete individually in the Bee or with a team in the Bowl.
                  </li>
                  <li>
                    <strong>Pathway</strong>
                    Regional events can lead to national and international
                    championships.
                  </li>
                </ul>
                <a
                  className={styles.competitionLink}
                  href="https://www.iacompetitions.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore IAC competitions <span aria-hidden="true">↗</span>
                </a>
              </div>
            </section>

            <section className={styles.competitionSection}>
              <div>
                <p className={styles.kicker}>Research competition</p>
                <h2>National History Day</h2>
                <p className={styles.competitionName}>NHD</p>
              </div>
              <div className={styles.competitionDetails}>
                <p>
                  NHD invites students in grades 6–12 to investigate a
                  historical topic connected to an annual theme, build an
                  evidence-based argument, and present the finished work to
                  judges.
                </p>
                <ul className={styles.competitionFacts}>
                  <li>
                    <strong>Best for</strong>
                    Students who want to dig deeply into sources and develop an
                    original historical argument.
                  </li>
                  <li>
                    <strong>Formats</strong>
                    Documentary, exhibit, paper, performance, or website.
                  </li>
                  <li>
                    <strong>Pathway</strong>
                    Competition begins locally, with projects advancing through
                    affiliate contests to the national level.
                  </li>
                </ul>
                <a
                  className={styles.competitionLink}
                  href="https://nhd.org/en/contest/get-started/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Start an NHD project <span aria-hidden="true">↗</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
