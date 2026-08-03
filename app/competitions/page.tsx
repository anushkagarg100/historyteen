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
            these are some of the best places to compete in history.
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
                  Do you hoard National Geographic books in your room? Is your
                  favorite site Wikipedia? Does a trip to the museum send happy
                  tingles up your spine? If you responded yes to any of these
                  questions, you have come to the right location.
                </p>
                <p>
                  International Academic Competitions is a non-profit
                  organization that organizes quiz competitions for kids of all
                  ages. They have science and math competitions, but it&rsquo;s
                  the history and geography ones that are particularly
                  exceptional.
                </p>
                <p>
                  For history, the big competition is the History Bee, which
                  quizzes you over general world history. However, there are
                  multiple smaller events you can take part in, such as the US
                  History Bee, the Citizenship Bee (mainly about US history and
                  American citizenship), and the Humanities Bee (about the
                  history of literature and the arts). You can also take written
                  exams.
                </p>
                <p>
                  The bees involve a moderator and about 6 to 8 players in a
                  room. A moderator reads a paragraph-style question like the
                  one below:
                </p>

                <blockquote className={styles.competitionQuestion}>
                  In 1755, this man fought off troops at the Battle of
                  Monogahela while suffering from dysentery. During his
                  presidency, this man quelled the Whiskey Rebellion and was
                  known for his farewell address that warned against the
                  formation of political parties. He &ldquo;crossed the
                  Delaware&rdquo; in the American Revolution, resulting in a
                  victory at the Battle of Trenton. For the point, who is this
                  first president of the United States?
                </blockquote>

                <p>
                  Players ring in with their buzzers when they have an answer.
                  It&rsquo;s a lot of fun—think of this like Jeopardy but for
                  kids.
                </p>
                <p>
                  You have to pass a regional contest. IAC is located across the
                  US and in many different countries, so there will likely be an
                  event in your area. You then proceed to the national contest
                  in Orlando, Florida or Arlington, Virginia, depending on your
                  age group.
                </p>
                <p>
                  The level of competition is quite high at these events,
                  particularly if you are an older student. However, if you love
                  learning, it is also extremely rewarding. IAC is essentially a
                  sport—a mental sport.
                </p>

                <div className={styles.competitionResources} id="iac-resources">
                  <p className={styles.kicker}>
                    If you are interested in IAC, check out these links below
                  </p>
                  <ul>
                    <li>
                      <a
                        className={styles.placeholderLink}
                        href="#"
                        aria-disabled="true"
                        tabIndex={-1}
                      >
                        My IAC Experience
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.placeholderLink}
                        href="#"
                        aria-disabled="true"
                        tabIndex={-1}
                      >
                        The Complete IAC Strategy Guide
                      </a>
                    </li>
                  </ul>
                </div>

                <ul className={styles.competitionFacts}>
                  <li>
                    <strong>Format</strong>
                    Fast-paced, buzzer-based quiz competition.
                  </li>
                  <li>
                    <strong>Pathway</strong>
                    Advance from a regional contest to the national level.
                  </li>
                  <li>
                    <strong>Answer</strong>
                    George Washington.
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
