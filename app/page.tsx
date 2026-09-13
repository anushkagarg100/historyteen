import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import SiteSearch from "./search/site-search";
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
            <SiteSearch compact />
            <div className={styles.heroStage}>
              <div className={styles.heroPortraits} aria-label="Historical figures">
                <figure className={`${styles.heroPortrait} ${styles.portraitTesla}`}>
                  <Image src="/historical-figures/nikola-tesla.jpg" alt="Portrait of Nikola Tesla" fill sizes="(max-width: 600px) 25vw, 210px" />
                  <figcaption>Nikola Tesla</figcaption>
                </figure>
                <figure className={`${styles.heroPortrait} ${styles.portraitLiliuokalani}`}>
                  <Image src="/historical-figures/queen-liliuokalani.jpg" alt="Photograph of Queen Liliʻuokalani" fill sizes="(max-width: 600px) 28vw, 235px" />
                  <figcaption>Queen Liliʻuokalani</figcaption>
                </figure>
                <figure className={`${styles.heroPortrait} ${styles.portraitSusan}`}>
                  <Image src="/historical-figures/susan-b-anthony.jpg" alt="Photograph of Susan B. Anthony" fill sizes="(max-width: 600px) 25vw, 210px" />
                  <figcaption>Susan B. Anthony</figcaption>
                </figure>
                <figure className={`${styles.heroPortrait} ${styles.portraitAda}`}>
                  <Image src="/historical-figures/ada-lovelace.jpg" alt="Portrait of Ada Lovelace" fill sizes="(max-width: 600px) 31vw, 210px" />
                  <figcaption>Ada Lovelace</figcaption>
                </figure>
                <figure className={`${styles.heroPortrait} ${styles.portraitWashington}`}>
                  <Image src="/historical-figures/george-washington.jpg" alt="Portrait of George Washington" fill sizes="(max-width: 600px) 34vw, 240px" priority />
                  <figcaption>George Washington</figcaption>
                </figure>
                <figure className={`${styles.heroPortrait} ${styles.portraitHarriet}`}>
                  <Image src="/historical-figures/harriet-tubman.jpg" alt="Photograph of Harriet Tubman" fill sizes="(max-width: 600px) 35vw, 250px" priority />
                  <figcaption>Harriet Tubman</figcaption>
                </figure>
                <figure className={`${styles.heroPortrait} ${styles.portraitMarie}`}>
                  <Image src="/historical-figures/marie-curie.jpg" alt="Photograph of Marie Curie" fill sizes="(max-width: 600px) 31vw, 220px" />
                  <figcaption>Marie Curie</figcaption>
                </figure>
                <figure className={`${styles.heroPortrait} ${styles.portraitFrederick}`}>
                  <Image src="/historical-figures/frederick-douglass.jpg" alt="Photograph of Frederick Douglass" fill sizes="(max-width: 600px) 31vw, 220px" />
                  <figcaption>Frederick Douglass</figcaption>
                </figure>
              </div>
              <div className={styles.heroHeadline}>
                <h1>History doesn&rsquo;t have to be boring.</h1>
              </div>
            </div>
            <details className={styles.imageCredits}>
              <summary>Portrait credits</summary>
              Public-domain images from Wikimedia Commons: {" "}
              <a href="https://commons.wikimedia.org/wiki/File:Ada_Lovelace_portrait.jpg">Ada Lovelace</a>, {" "}
              <a href="https://commons.wikimedia.org/wiki/File:Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg">George Washington</a>, {" "}
              <a href="https://commons.wikimedia.org/wiki/File:Harriet_Tubman_(circa_1885).jpg">Harriet Tubman</a>, {" "}
              <a href="https://commons.wikimedia.org/wiki/File:Portrait_of_Marie_Curie.jpg">Marie Curie</a>, {" "}
              <a href="https://commons.wikimedia.org/wiki/File:Frederick_Douglass_(circa_1879).jpg">Frederick Douglass</a>, {" "}
              <a href="https://commons.wikimedia.org/wiki/File:Portrait_of_Susan_B._Anthony.jpg">Susan B. Anthony</a>, {" "}
              <a href="https://commons.wikimedia.org/wiki/File:Nikola_Tesla.jpg">Nikola Tesla</a>, and {" "}
              <a href="https://commons.wikimedia.org/wiki/File:Liliuokalani_LCCN2004679211.jpg">Queen Liliʻuokalani</a>.
            </details>
            <p className={styles.lede}>
              HistoryTeen publishes long-form essays on the ancient world,
              empire, revolution, and the century that made ours. Every claim is
              sourced. Nothing is rounded down.
            </p>
            <Link className={`${styles.button} ${styles.homeQuizLink}`} href="/quiz">
              Take a quiz
            </Link>
          </div>
        </section>

        {/* Coming soon */}
        <section className={styles.section}>
          <div
            className={`${styles.container} ${styles.sectionBody} ${styles.comingSoonBody}`}
          >
            <aside className={styles.comingSoon} aria-labelledby="coming-soon-title">
              <h2 id="coming-soon-title">Coming Soon:</h2>
              <ul>
                <li>
                  <strong>Comics section:</strong> The Adventures of Mac, the
                  Time-Traveling Snail
                </li>
                <li>
                  <strong>Interviews:</strong> Text/email me any suggestions for
                  who I should interview!
                </li>
              </ul>
            </aside>
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <p className={styles.footerBrand}>
            History<span>Teen</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
