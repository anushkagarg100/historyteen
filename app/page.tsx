import styles from "./page.module.css";
import SiteHeader from "./site-header";
import SubscribeForm from "./subscribe-form";

const LEAD = {
  kicker: "Soweto · 1976",
  title: "The schoolchildren who broke apartheid’s timetable",
  standfirst:
    "On 16 June 1976, thousands of students walked out of their Soweto classrooms over a decree that made them study mathematics in Afrikaans. The police answered with live rounds. What began as an argument about a language of instruction ended as the moment the South African state lost the wider argument for good.",
  meta: "Long read · Forthcoming",
};

const PIECES = [
  {
    kicker: "Rome · 165–180 CE",
    title: "The plague that came home with the victory parade",
    standfirst:
      "Soldiers returning from the Parthian campaign brought back something worse than plunder. Galen described the pustules; modern epidemiologists suspect smallpox. The argument worth having is whether Rome’s tax base ever really recovered.",
    meta: "Essay · Forthcoming",
  },
  {
    kicker: "Berlin · 1884–85",
    title: "The conference that drew no borders",
    standfirst:
      "Fourteen states met in Bismarck’s chancellery to settle the future of a continent none of them had invited to the table. They did not carve up Africa in that room — they agreed on the rules by which it would be carved up everywhere else.",
    meta: "Essay · Forthcoming",
  },
  {
    kicker: "Aegean & Levant · c. 1200 BCE",
    title: "Why every palace fell at once",
    standfirst:
      "Hittite Anatolia, Mycenaean Greece, Ugarit on the Syrian coast: inside two generations the whole interlocking system was gone. Blaming the ‘Sea Peoples’ is the easy answer. Drought, debt and dependency are the interesting ones.",
    meta: "Essay · Forthcoming",
  },
];

const SYLLABUS = [
  {
    numeral: "I",
    era: "The Ancient World",
    span: "to 476 CE",
    note: "Sumerian accountancy, the small print of Athenian democracy, and how an empire dies slowly.",
  },
  {
    numeral: "II",
    era: "The Middle Ages",
    span: "476 – 1450",
    note: "Byzantium, the Abbasid libraries, Song China’s paper money, and the century of plague.",
  },
  {
    numeral: "III",
    era: "Empires and Oceans",
    span: "1450 – 1775",
    note: "Silver out of Potosí, the Atlantic slave trade, and the first genuinely global economy.",
  },
  {
    numeral: "IV",
    era: "The Age of Revolutions",
    span: "1775 – 1848",
    note: "America, France and Haiti — where the idea that a people could start over was tested to destruction.",
  },
  {
    numeral: "V",
    era: "Industry and Empire",
    span: "1848 – 1914",
    note: "Steam, abolition, nationalism, and the scramble that drew the borders we still argue about.",
  },
  {
    numeral: "VI",
    era: "The Short Twentieth Century",
    span: "1914 – 1991",
    note: "Two wars, decolonization, and a cold peace held together by the threat of ending everything.",
  },
];

const PRINCIPLES = [
  {
    numeral: "01",
    title: "Everything is sourced",
    body: "Each essay ends with the primary documents and the historians it leans on, and says plainly where they disagree with each other.",
  },
  {
    numeral: "02",
    title: "Nothing is simplified",
    body: "Being sixteen is not a reading disability. We cut jargon, not complexity, and we never round an argument down to a moral.",
  },
  {
    numeral: "03",
    title: "Arguments, not trivia",
    body: "Dates are scaffolding. The point is the causal claim underneath them — and whether it survives contact with the evidence.",
  },
];

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
            <div className={styles.actions}>
              <a className={styles.button} href="#issue">
                What&rsquo;s in the first issue
              </a>
              <a className={styles.quietLink} href="#subscribe">
                Get it by email
              </a>
            </div>
          </div>
        </section>

        {/* First issue */}
        <section id="issue" className={styles.section}>
          <div className={`${styles.container} ${styles.sectionBody}`}>
            <h2 className={styles.eyebrow}>In the first issue</h2>

            <article className={styles.lead}>
              <div>
                <p className={styles.kicker}>{LEAD.kicker}</p>
                <h3>{LEAD.title}</h3>
              </div>
              <div>
                <p className={styles.leadStandfirst}>{LEAD.standfirst}</p>
                <p className={styles.meta} style={{ marginTop: 20 }}>
                  {LEAD.meta}
                </p>
              </div>
            </article>

            <div className={styles.grid}>
              {PIECES.map((piece) => (
                <article className={styles.card} key={piece.title}>
                  <p className={styles.kicker}>{piece.kicker}</p>
                  <h3>{piece.title}</h3>
                  <p>{piece.standfirst}</p>
                  <span className={styles.meta}>{piece.meta}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Syllabus */}
        <section id="syllabus" className={styles.section}>
          <div className={`${styles.container} ${styles.sectionBody}`}>
            <h2 className={styles.eyebrow}>The syllabus</h2>
            <p className={styles.deck}>
              Six periods, covered in order — then covered again from somewhere
              other than Europe.
            </p>

            <ul className={styles.syllabus}>
              {SYLLABUS.map((row) => (
                <li key={row.era}>
                  <span className={styles.numeral}>{row.numeral}</span>
                  <span className={styles.era}>
                    {row.era}
                    <span className={styles.span}>{row.span}</span>
                  </span>
                  <span className={styles.note}>{row.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Mission */}
        <section id="about" className={styles.section}>
          <div className={`${styles.container} ${styles.sectionBody}`}>
            <div className={styles.missionHeading}>
              <h2 className={styles.eyebrow}>Our mission</h2>
              <p className={styles.missionStatement}>
                To ignite an interest in the past and show kids a path forward
                in history.
              </p>
            </div>

            <div className={styles.missionStory}>
              <p className={styles.missionIntro}>
                Hi! My name is Anushka Garg, and I am a student at Eastlake High
                School. A little bit about me:
              </p>
              <div className={styles.missionProse}>
                <p>
                  Since elementary school, I have been a history enthusiast. But
                  my passion was a bit offbeat—and because I didn&rsquo;t enjoy
                  math or science, I struggled to find something that would
                  match my interests.
                </p>
                <p>
                  After lots of agonizing and researching, I found history
                  competitions that I could take part in. They gave me so much
                  confidence, a community to be part of, and a clear career path
                  forward in the humanities. Not only that, but I learned so
                  much about history itself—a fascinating subject that is
                  arguably slept on.
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

            <div className={`${styles.split} ${styles.editorialApproach}`}>
              <div>
                <h2 className={styles.eyebrow}>Our editorial approach</h2>
                <p className={styles.deck}>
                  Most history written for teenagers is written down to them.
                </p>
              </div>
              <div className={styles.prose}>
                <p>
                  Textbooks flatten arguments into consensus; the internet
                  flattens them into content. Both leave out the part that makes
                  history worth doing — the evidence is incomplete, the
                  specialists disagree, and you are allowed to weigh it
                  yourself.
                </p>
                <p>
                  HistoryTeen is the attempt at an alternative: essays that show
                  their working, name their sources, and take a position you can
                  argue with. Written for readers between about thirteen and
                  nineteen, and readable by anyone.
                </p>
              </div>
            </div>

            <ol className={styles.principles}>
              {PRINCIPLES.map((principle) => (
                <li key={principle.numeral}>
                  <p className={styles.principleNum}>{principle.numeral}</p>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Subscribe */}
        <section id="subscribe">
          <div className={`${styles.container} ${styles.sectionBody}`}>
            <div className={styles.split}>
              <div>
                <h2 className={styles.eyebrow}>Subscribe</h2>
                <p className={styles.deck}>
                  One essay a fortnight. No newsletter about the newsletter.
                </p>
              </div>
              <div>
                <SubscribeForm />
                <p className={styles.fineprint}>
                  Free, and it stays free. We don&rsquo;t sell the list, and
                  unsubscribing takes one click.
                </p>
              </div>
            </div>
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
