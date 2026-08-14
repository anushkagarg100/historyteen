import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import SiteHeader from "../site-header";
import anneFrankCover from "../../public/who-was-anne-frank.png";
import badGirlsCover from "../../public/bad-girls-throughout-history-cover.png";
import childsIntroductionOrchestraCover from "../../public/childs-introduction-orchestra.png";
import childsIntroductionPoetryCover from "../../public/childs-introduction-poetry.png";
import foodFightCover from "../../public/food-fight-cover.png";
import geronimoStiltonCover from "../../public/geronimo-stilton-journey-through-time.png";
import goodnightStoriesCover from "../../public/goodnight-stories-rebel-girls-cover.png";
import herstoryCover from "../../public/herstory-cover.png";
import heroesOfOlympusCover from "../../public/heroes-of-olympus-series.png";
import kidActivistsCover from "../../public/kid-activists.png";
import kidArtistsCover from "../../public/kid-artists.png";
import littleMonstersCover from "../../public/little-monsters-cover.png";
import longWalkToWaterCover from "../../public/long-walk-to-water-cover.png";
import meetGreatComposersCover from "../../public/meet-great-composers.png";
import pabloPicassoCover from "../../public/who-was-pablo-picasso.png";
import percyJacksonCover from "../../public/percy-jackson-series.png";
import trialsOfApolloCover from "../../public/trials-of-apollo-series.png";
import travelBookCover from "../../public/travel-book-cover.png";
import storiesGreatComposersCover from "../../public/stories-great-composers.png";
import waltDisneyCover from "../../public/who-was-walt-disney.png";

export const metadata: Metadata = {
  title: "Book Recommendations",
  description:
    "The best way to dive into the past is by reading about it. Explore recommendations for starting your history journey.",
};

export default function BookRecommendationsPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.destination}>
        <div className={`${styles.container} ${styles.destinationInner}`}>
          <p className={styles.eyebrow}>Book recommendations</p>
          <h1>Book Recommendations</h1>
          <p className={styles.destinationIntro}>
            The best way to dive into the past is by reading about it, so here
            are some reading recommendation if you are just starting your
            history journey.
          </p>

          <section className={styles.recommendationSection}>
            <h2>For Younger Readers:</h2>
            <article className={styles.bookRecommendation}>
              <h3>Who Was?</h3>
              <p className={styles.bookAuthor}>By many authors</p>
              <div className={styles.bookReview}>
                <p>
                  Ah, the ubiquitous Who Was series pops in again. A staple of
                  every classroom and kids&rsquo; section at the library, it is
                  now probably publishing its 500 millionth book that we do not
                  even try to keep track of.
                </p>
                <p>
                  But why is it such a classic? Why do teachers and kids love it
                  so much? Partially because of its length—they&rsquo;re short
                  and sweet, but don&rsquo;t skimp on any of the major details.
                  Or maybe it&rsquo;s the writing style. Many nonfiction
                  kids&rsquo; books use &ldquo;kiddie language&rdquo; to try and
                  interest young audiences, but that was never the case with a
                  Who Was title (I liked that a lot). Because of this, I would
                  recommend the series to anyone who is just starting to learn
                  history.
                </p>
                <p>
                  If you&rsquo;ve read a few Who Was books, you should watch the
                  Netflix comedy show, which is based on the books and simply
                  titled The Who Was Show. My sister and I have watched it (and
                  rewatched it) an embarrassing number of times.
                </p>
                <p>
                  Needless to say, the Who Was series, complete with the giant
                  heads on the front covers, is here to stay—and a great
                  starting point for anyone looking to dive into history.
                </p>
              </div>

              <div className={styles.favorites}>
                <h4>My favorites</h4>
                <div className={styles.favoriteBooks}>
                  <figure>
                    <Image
                      src={pabloPicassoCover}
                      alt="Cover of Who Was Pablo Picasso?"
                      sizes="(max-width: 640px) 80vw, (max-width: 900px) 40vw, 280px"
                    />
                  </figure>
                  <figure>
                    <Image
                      src={anneFrankCover}
                      alt="Cover of Who Was Anne Frank?"
                      sizes="(max-width: 640px) 80vw, (max-width: 900px) 40vw, 280px"
                    />
                  </figure>
                  <figure>
                    <Image
                      src={waltDisneyCover}
                      alt="Cover of Who Was Walt Disney?"
                      sizes="(max-width: 640px) 80vw, (max-width: 900px) 40vw, 280px"
                    />
                  </figure>
                </div>
              </div>
            </article>

            <article className={styles.bookRecommendation}>
              <h3>Kid Legends</h3>
              <p className={styles.bookAuthor}>By many authors</p>
              <div className={styles.bookReview}>
                <p>
                  Kid artists, kid scientists, kid athletes—you name it, this
                  series talks about it. Each book has about twenty stories
                  about famous personalities when they were kids.
                </p>
                <p>
                  In fact, I like this better than the Who Was books because 1)
                  they have awesome cartoons and 2) discusses lesser-known
                  personalities (such as American sculptor Louise Nevelson and
                  transgender activist Janet Mock) that would never have an
                  entire Who Was book dedicated to them.
                </p>
                <p>
                  I think that these books are so amazing because they make
                  history relatable. It&rsquo;s one thing to hear boring
                  lectures about historical figures, but quite another to learn
                  about them as children!
                </p>
              </div>

              <div className={styles.favorites}>
                <h4>My favorites</h4>
                <div className={styles.favoriteBooks}>
                  <figure>
                    <Image
                      src={kidActivistsCover}
                      alt="Cover of Kid Activists"
                      sizes="(max-width: 640px) 80vw, (max-width: 900px) 40vw, 280px"
                    />
                  </figure>
                  <figure>
                    <Image
                      src={kidArtistsCover}
                      alt="Cover of Kid Artists"
                      sizes="(max-width: 640px) 80vw, (max-width: 900px) 40vw, 280px"
                    />
                  </figure>
                </div>
              </div>
            </article>

            <article className={styles.bookRecommendation}>
              <h3>Percy Jackson and the Olympians</h3>
              <p className={styles.bookAuthor}>By Rick Riordan</p>
              <div className={styles.bookReview}>
                <p>
                  Most kids, at some point, have heard about Percy Jackson, the
                  demigod warrior who fights Greek gods and monsters with his
                  friends Grover and Annabeth. But what a lot of people
                  don&rsquo;t realize is that the Percy Jackson series, even
                  though it&rsquo;s a fictional series, is super educational.
                  Many of the books follow the plot structure of Percy going on
                  a journey to find something. On the journey, his meetings with
                  mythological beings teach the reader a lot about Greek stories
                  and culture—except, of course, they don&rsquo;t realize
                  they&rsquo;re being taught. I have answered so many trivia
                  questions correctly all because of Percy Jackson.
                </p>
                <p>
                  The first five Percy Jackson books are kind of like the Harry
                  Potter series—a big war is building up, and the epic
                  conclusion takes place in the fifth book. I would recommend
                  them, simply because they&rsquo;re the most fun to read, and
                  provide a great understanding of Greek myths.
                </p>
                <p>
                  The following series, Heroes of Olympus, is definitely a step
                  down from Percy Jackson, but is still educational because it
                  focuses on Greek gods and the Roman versions of them. Skip the
                  third series, Trials of Apollo, because it&rsquo;s super corny
                  and loses direction. (I only read the first book)
                </p>
                <p>
                  If you like the Percy Jackson series, I recommend checking
                  out the Kane Chronicles (about Egyptian myths) and Magnus
                  Chase (about Norse myths). To expand your Greek myth knowledge
                  even more, I would also highly recommend EPIC: The Musical—a
                  version of The Odyssey that is entirely in songs.
                </p>
              </div>

              <div className={styles.ratings}>
                <h4>My ratings</h4>
                <div className={styles.ratingBooks}>
                  <figure>
                    <div className={styles.ratingImage}>
                      <Image
                        src={percyJacksonCover}
                        alt="The five Percy Jackson and the Olympians books"
                        sizes="(max-width: 640px) 90vw, (max-width: 900px) 45vw, 280px"
                      />
                    </div>
                    <p className={styles.ratingCaption}>
                      The original Percy Jackson series. Really good!!
                    </p>
                    <figcaption
                      className={styles.stars}
                      aria-label="5 out of 5 stars"
                    >
                      <span>★★★★★</span>
                    </figcaption>
                  </figure>
                  <figure>
                    <div className={styles.ratingImage}>
                      <Image
                        src={heroesOfOlympusCover}
                        alt="The five Heroes of Olympus books"
                        sizes="(max-width: 640px) 90vw, (max-width: 900px) 45vw, 280px"
                      />
                    </div>
                    <p className={styles.ratingCaption}>
                      The sequel, Heroes of Olympus. Not as good as the first
                      one, but still a worthwhile read.
                    </p>
                    <figcaption
                      className={styles.stars}
                      aria-label="3 out of 5 stars"
                    >
                      <span>★★★</span>
                      <span className={styles.emptyStars}>☆☆</span>
                    </figcaption>
                  </figure>
                  <figure>
                    <div className={styles.ratingImage}>
                      <Image
                        src={trialsOfApolloCover}
                        alt="The five Trials of Apollo books"
                        sizes="(max-width: 640px) 90vw, (max-width: 900px) 45vw, 280px"
                      />
                    </div>
                    <p className={styles.ratingCaption}>
                      Trials of Apollo, which in my opinion does not compare to
                      the first two.
                    </p>
                    <figcaption className={styles.skipRating}>SKIP</figcaption>
                  </figure>
                </div>
              </div>
            </article>

            <article className={styles.bookRecommendation}>
              <h3>Little Monsters: The Creatures that Live on Us and In Us</h3>
              <p className={styles.bookAuthor}>By Albert Marrin</p>
              <div className={styles.bookWithCover}>
                <div className={styles.bookReview}>
                  <p>
                    This is one of my favorite books…of all time. Period. The
                    copy I have at home is wrinkled, the pages yellowed, and the
                    cover almost fallen off the spine. As you might have guessed,
                    the book is about parasites, with chapters devoted to worms,
                    mosquitoes, fleas—you get the idea.
                  </p>
                  <p>
                    But, you might think, it&rsquo;s a book about parasites,
                    therefore it&rsquo;s a science book. Yes, it is a science
                    book. However, Little Monsters is equally a history book.
                    Because disease was one of the biggest killers in ancient and
                    medieval Europe, the book describes the prevailing
                    superstitions around sickness at the time. For example,
                    people believed that disease was caused by miasma (or
                    &ldquo;bad air&rdquo;) and that ancient Romans worshipped
                    statues of the &ldquo;Goddess of Fever&rdquo; to drive out
                    malaria.
                  </p>
                  <p>
                    If you are the kid who likes collecting bugs in the yard,
                    you should 100% read this book. It is one of the most
                    interesting parts of the past; the intersection of science
                    and history.
                  </p>
                </div>
                <Image
                  className={styles.bookSideCover}
                  src={littleMonstersCover}
                  alt="Cover of Little Monsters by Albert Marrin"
                  sizes="(max-width: 720px) 70vw, 230px"
                />
              </div>
            </article>

            <article className={styles.bookRecommendation}>
              <h3>Geronimo Stilton: Journey Through Time</h3>
              <p className={styles.bookAuthor}>By Elisabetta Dami</p>
              <div className={styles.bookWithCover}>
                <div className={styles.bookReview}>
                  <p>
                    Another example of how fiction is a great way to learn about
                    history. Geronimo Stilton, a mouse writer, travels back in
                    time with his friends, often to save the world. I would
                    recommend this to younger readers who are looking for a fun
                    series to get into.
                  </p>
                  <p>
                    Also—I take back what I just said. You likely won&rsquo;t
                    learn a lot about history by reading the series, but it is
                    fascinating and a great way to spark an interest in the
                    past.
                  </p>
                </div>
                <Image
                  className={`${styles.bookSideCover} ${styles.bookSideCoverWide}`}
                  src={geronimoStiltonCover}
                  alt="Covers from the Geronimo Stilton Journey Through Time series"
                  sizes="(max-width: 640px) 80vw, 230px"
                />
              </div>
            </article>

            <article className={styles.bookRecommendation}>
              <h3>Goodnight Stories for Rebel Girls</h3>
              <p className={styles.bookAuthor}>By many authors</p>
              <div className={styles.bookWithCover}>
                <div className={styles.bookReview}>
                  <p>
                    One reason why people get turned off to history is because
                    they feel there&rsquo;s not enough representation. Well,
                    books like Goodnight Stories for Rebel Girls are solving
                    that problem. Short, one-page narratives about the
                    past&rsquo;s amazing women are not only fascinating but also
                    served me well through my quizzing journey. Move over,
                    George Washington! Learn about Korea&rsquo;s Seondeok of
                    Silla and Yaa Asantewaa and the sacred golden stool.
                  </p>
                  <p>
                    Better yet, these books are growing in number. If you liked
                    Goodnight Stories for Rebel Girls, check out:
                  </p>
                  <div className={styles.relatedBooks}>
                    <figure>
                      <Image
                        src={herstoryCover}
                        alt="Cover of Herstory"
                        sizes="(max-width: 640px) 70vw, 190px"
                      />
                      <figcaption>Herstory</figcaption>
                    </figure>
                    <figure>
                      <Image
                        src={badGirlsCover}
                        alt="Cover of Bad Girls Throughout History"
                        sizes="(max-width: 640px) 70vw, 190px"
                      />
                      <figcaption>Bad Girls Throughout History</figcaption>
                    </figure>
                  </div>
                </div>
                <Image
                  className={styles.bookSideCover}
                  src={goodnightStoriesCover}
                  alt="Cover of Goodnight Stories for Rebel Girls"
                  sizes="(max-width: 720px) 70vw, 230px"
                />
              </div>
            </article>

            <article className={styles.bookRecommendation}>
              <h3>The Travel Book</h3>
              <p className={styles.bookAuthor}>By Lonely Planet Kids</p>
              <div className={styles.bookWithCover}>
                <div className={styles.bookReview}>
                  <p>
                    This is for the more geographically minded, but indispensable
                    anyways, because it contains one page on every single country
                    in the world. This sends happy tingles up my spine. No
                    Eurocentrism here!
                  </p>
                  <p>
                    Also, because it has a page on every single country, it has
                    fascinating facts about each one. Did you know that a quarter
                    of Tahiti&rsquo;s population is under 14 years of age? Or
                    that Azerbaijan has a museum dedicated to carpets?
                  </p>
                  <p>
                    Reading The Travel Book is a great place to begin learning
                    world geography, demographics, and of course—history. You
                    may be inspired to travel to one of those places yourself!
                  </p>
                </div>
                <Image
                  className={styles.bookSideCover}
                  src={travelBookCover}
                  alt="Cover of The Travel Book"
                  sizes="(max-width: 720px) 70vw, 230px"
                />
              </div>
            </article>

            <article className={styles.bookRecommendation}>
              <h3>A Child&rsquo;s Introduction…</h3>
              <p className={styles.bookAuthor}>By multiple authors</p>
              <div className={styles.bookReview}>
                <p>
                  Poetry. The orchestra. Art history, and much more. You are the
                  cultured sort, and a trip to museum once in two months just
                  doesn&rsquo;t cut it. Well then, why not experience the museum
                  from home? Enter A Child&rsquo;s Introduction, the 14-book
                  series exploring all sorts of FOCI (Fields of Cultural
                  Importance. I made that acronym up). There&rsquo;s even a book
                  on Norwegian mythology! (Despite my description, the whole
                  series isn&rsquo;t about arts and culture. They have books on
                  the night sky and natural history.)
                </p>
                <p>
                  In particular, I would recommend these books to anyone just
                  starting out IAC and particularly NAQT. (If you have no idea
                  what those are, check out my &ldquo;Competitions&rdquo; tab,
                  where I describe them in detail.) IAC has a bee specifically
                  dedicated to the humanities, and a sizeable portion of NAQT
                  questions deal with art, literature, and music. A Child&rsquo;s
                  Introduction is the perfect starting point.
                </p>
              </div>

              <div className={styles.favorites}>
                <h4>My Favorites</h4>
                <div className={styles.favoriteBooksTwo}>
                  <figure>
                    <Image
                      src={childsIntroductionPoetryCover}
                      alt="Cover of A Child's Introduction to Poetry"
                      sizes="(max-width: 640px) 80vw, 280px"
                    />
                  </figure>
                  <figure>
                    <Image
                      src={childsIntroductionOrchestraCover}
                      alt="Cover of A Child's Introduction to the Orchestra"
                      sizes="(max-width: 640px) 80vw, 280px"
                    />
                  </figure>
                </div>

                <p className={styles.relatedIntro}>
                  If you like A Child&rsquo;s Introduction Series, check out...
                </p>
                <div className={styles.relatedBooks}>
                  <figure>
                    <Image
                      src={storiesGreatComposersCover}
                      alt="Cover of Stories of the Great Composers"
                      sizes="(max-width: 640px) 70vw, 250px"
                    />
                    <figcaption>Stories of the Great Composers</figcaption>
                  </figure>
                  <figure>
                    <Image
                      src={meetGreatComposersCover}
                      alt="Cover of Meet the Great Composers"
                      sizes="(max-width: 640px) 70vw, 250px"
                    />
                    <figcaption>Meet the Great Composers</figcaption>
                  </figure>
                </div>
              </div>
            </article>

            <article className={styles.bookRecommendation}>
              <h3>A Long Walk to Water</h3>
              <p className={styles.bookAuthor}>By Linda Sue Park</p>
              <div className={styles.bookWithCover}>
                <div className={styles.bookReview}>
                  <p>
                    This isn&rsquo;t necessarily a history book, but definitely
                    a story worth reading. It simultaneously follows two Sudanese
                    teenagers, Nya and Salva, navigating water shortages and
                    fighting in their homeland. The stories take place in two
                    different time periods—Salva&rsquo;s in the 1980s and 90s,
                    and Nya&rsquo;s in 2011. Again, while this is not a history
                    book, it is great for readers interested in the recent past.
                  </p>
                  <p>
                    Just a quick disclaimer: this book does contain some
                    violence/emotional themes, so keep that in mind while
                    reading.
                  </p>
                </div>
                <Image
                  className={styles.bookSideCover}
                  src={longWalkToWaterCover}
                  alt="Cover of A Long Walk to Water"
                  sizes="(max-width: 720px) 70vw, 230px"
                />
              </div>
            </article>

            <article className={styles.bookRecommendation}>
              <h3>Food Fight!</h3>
              <p className={styles.bookAuthor}>By Tanya Steel</p>
              <div className={styles.bookWithCover}>
                <div className={styles.bookReview}>
                  <p>
                    If you find long, drawn-out descriptions of historical
                    battles boring, then that makes two of us. But this book is
                    unique because it provides a new way of looking at the
                    past—through its food! You often get a much better idea of
                    an era through its lifestyle. Food Fight tells us that
                    during the French Revolution, bakers pounded animal bones
                    into flour due to wheat shortages, but anyone caught doing
                    so would be executed. Instead of just telling you simple
                    facts, &ldquo;There were food shortages in the French
                    Revolution, and the government was oppressive&rdquo;, Food
                    Fight shows you the day-to-day existence of people who lived
                    back then.
                  </p>
                </div>
                <Image
                  className={styles.bookSideCover}
                  src={foodFightCover}
                  alt="Cover of Food Fight!"
                  sizes="(max-width: 720px) 70vw, 230px"
                />
              </div>
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
