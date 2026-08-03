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
                      <Link
                        className={styles.resourceLink}
                        href="/competitions/coming-soon"
                      >
                        My IAC Experience
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={styles.resourceLink}
                        href="/competitions/coming-soon"
                      >
                        The Complete IAC Strategy Guide
                      </Link>
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
                <p className={styles.kicker}>Team quiz competition</p>
                <h2>National Academic Quiz Tournaments</h2>
                <p className={styles.competitionName}>NAQT</p>
              </div>
              <div className={styles.competitionDetails}>
                <p>
                  The competition at NAQT is even more intense than IAC, as it
                  is a middle and high school contest and seasoned competitors
                  from IAC almost always land up there eventually.
                </p>
                <p>
                  If you are new to history and quizzing, do not compete in
                  NAQT. Stick with IAC and try NAQT after a few years.
                </p>
                <p>
                  However, if you know A LOT about history or if you have
                  competed in IAC for a few years, keep reading.
                </p>
                <p>
                  NAQT is known for its team competitions, or as they are called
                  in the quiz community, &ldquo;bowls.&rdquo; In any given round,
                  the questions span science, history, geography, math, and
                  literature/humanities. Again, even though there are science
                  and math questions in the rounds, NAQT attracts mainly history
                  and geography buffs.
                </p>
                <p>
                  I&rsquo;ll be honest—I am very new to NAQT. At the time of
                  writing this, I haven&rsquo;t even participated yet! However,
                  I plan to form a team in high school. Stay tuned for my NAQT
                  Chronicles, where I post updates on my NAQT journey. I hope it
                  will be informative for anyone looking to start a team or join
                  the contest themselves.
                </p>

                <div className={styles.competitionResources}>
                  <p className={styles.kicker}>Follow the journey</p>
                  <ul>
                    <li>
                      <Link
                        className={styles.resourceLink}
                        href="/competitions/coming-soon"
                      >
                        NAQT Chronicles
                      </Link>
                    </li>
                  </ul>
                </div>

                <ul className={styles.competitionFacts}>
                  <li>
                    <strong>Format</strong>
                    Team-based quiz bowl competition.
                  </li>
                  <li>
                    <strong>Subjects</strong>
                    Science, history, geography, math, and literature.
                  </li>
                  <li>
                    <strong>Best for</strong>
                    Experienced quizzers ready for intense competition.
                  </li>
                </ul>
                <a
                  className={styles.competitionLink}
                  href="https://www.naqt.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore NAQT competitions <span aria-hidden="true">↗</span>
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
