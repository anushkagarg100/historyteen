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
                <h1>YOUR history space.</h1>
                <p className={styles.heroSubhead}>Ready to dive in?</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.homeIntroSection}>
          <div className={`${styles.container} ${styles.homeIntro}`}>
            <div className={styles.homeIntroCopy}>
              <p className={styles.homeIntroLead}>
                Hi! I&rsquo;m Anushka, history buff in charge. History captured
                my heart as I was watching an episode of Jeopardy! and I&rsquo;ve
                never looked back since.
              </p>
              <p>
                I&rsquo;ve competed in two main formats--the first one being
                International Academic Competitions, which focuses on history
                trivia, and the second being National History Day, which is
                about history projects. Over the years, I&rsquo;ve taken part in
                both national and international tournaments--be it in Florida,
                Maryland, and even Paris--and the journey has been SO much fun.
              </p>
              <p>
                This website is the space I wish I had when I was just starting
                out--competition recommendations, interviews from people in the
                field, quizzes to test my skills; all of these are designed to
                help you ignite your own path forward in history.
              </p>
              <p className={styles.factsLead}>
                I&rsquo;ll leave you with some of my favorite facts that I love
                to tell people:
              </p>
            </div>

            <ol className={styles.favoriteFacts}>
              <li>
                Our 30th president, Calvin Coolidge, was known for being quiet.
                So quiet, in fact, that a dinner party guest betted that she
                could get three words out of him. He responded, simply,
                &ldquo;You lose.&rdquo;
              </li>
              <li>
                At the start of the Civil War, people thought it wouldn&rsquo;t
                be a super big deal. So many people packed a picnic and watched
                the First Battle of Bull Run from the hilltops, thinking it
                would be some &ldquo;nice entertainment.&rdquo; (As you can
                guess, it wasn&rsquo;t)
              </li>
              <li>
                It the mid-1700s, Europeans thought potatoes were poisonous. So
                Frederick the Great, emperor of Prussia (w modern day northern
                Germany, Poland, Lithuania, and parts of Russia) grew a field of
                potatoes and guarded it so the potatoes would seem valuable. It
                worked, and people began stealing them. Way to use psychology,
                Freud-rick the Great!
              </li>
            </ol>

            <p className={styles.homeSignoff}>
              Enjoy! Learn more about <Link href="/about">our mission</Link> if
              you are interested.
            </p>
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
