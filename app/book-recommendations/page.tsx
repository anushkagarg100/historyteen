import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import SiteHeader from "../site-header";
import RecommendationLink from "./recommendation-link";
import anneFrankCover from "../../public/who-was-anne-frank.png";
import badGirlsCover from "../../public/bad-girls-throughout-history-cover.png";
import childsIntroductionOrchestraCover from "../../public/childs-introduction-orchestra.png";
import childsIntroductionPoetryCover from "../../public/childs-introduction-poetry.png";
import foodFightCover from "../../public/food-fight-cover.png";
import geronimoStiltonCover from "../../public/geronimo-stilton-journey-through-time.png";
import goodnightStoriesCover from "../../public/goodnight-stories-rebel-girls-cover.png";
import gunsGermsSteelCover from "../../public/guns-germs-steel-cover.png";
import herstoryCover from "../../public/herstory-cover.png";
import heroesOfOlympusCover from "../../public/heroes-of-olympus-series.png";
import howWeGotToNowCover from "../../public/how-we-got-to-now-cover.png";
import indigenousPeoplesHistoryCover from "../../public/indigenous-peoples-history-cover.png";
import kidActivistsCover from "../../public/kid-activists.png";
import kidArtistsCover from "../../public/kid-artists.png";
import littleMonstersCover from "../../public/little-monsters-cover.png";
import liesMyTeacherCover from "../../public/lies-my-teacher-told-me-cover.png";
import longWalkToWaterCover from "../../public/long-walk-to-water-cover.png";
import meetGreatComposersCover from "../../public/meet-great-composers.png";
import pabloPicassoCover from "../../public/who-was-pablo-picasso.png";
import percyJacksonCover from "../../public/percy-jackson-series.png";
import poisonSquadCover from "../../public/poison-squad-cover.png";
import sapiensCover from "../../public/sapiens-cover.png";
import shortestHistoryChinaCover from "../../public/shortest-history-china-cover.png";
import trialsOfApolloCover from "../../public/trials-of-apollo-series.png";
import travelBookCover from "../../public/travel-book-cover.png";
import storiesGreatComposersCover from "../../public/stories-great-composers.png";
import waltDisneyCover from "../../public/who-was-walt-disney.png";
import yellowPaperAirplane from "../../public/yellow-paper-airplane.png";

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
        <div
          className={`${styles.container} ${styles.destinationInner} ${styles.bookRecommendationsContainer}`}
        >
          <p className={styles.eyebrow}>Book recommendations</p>
          <h1>Book Recommendations</h1>
          <div className={styles.destinationIntro}>
            <p>
              The best way to dive into the past is by reading about it, so here
              are some reading recommendation if you are just starting your
              history journey.
            </p>
            <p>
              These are some of my favorite books, ranging from parasites to US
              history to food to geography. History isn&rsquo;t limited to one
              point of view, and my recommendations (hopefully) reflect that.
              Like many history buffs, books got me started on this journey,
              and books keep me going.
            </p>
            <p>Enjoy!</p>
          </div>

          <div className={styles.bookPageCue} aria-hidden="true">
            <Image src={yellowPaperAirplane} alt="" priority />
          </div>

          <section
            className={`${styles.recommendationSection} ${styles.collapsibleRecommendations}`}
          >
            <h2>For Elementary Schoolers:</h2>
            <nav
              className={styles.recommendationLinks}
              aria-label="Younger readers recommendations"
            >
              <RecommendationLink href="#childs-introduction">
                A Child&rsquo;s Introduction
              </RecommendationLink>
              <RecommendationLink href="#long-walk-to-water">
                A Long Walk to Water
              </RecommendationLink>
              <RecommendationLink href="#food-fight">
                Food Fight!
              </RecommendationLink>
              <RecommendationLink href="#geronimo-stilton">
                Geronimo Stilton
              </RecommendationLink>
              <RecommendationLink href="#rebel-girls">
                Goodnight Stories for Rebel Girls
              </RecommendationLink>
              <RecommendationLink href="#kid-legends">
                Kid Legends
              </RecommendationLink>
              <RecommendationLink href="#little-monsters">
                Little Monsters
              </RecommendationLink>
              <RecommendationLink href="#percy-jackson">
                Percy Jackson and the Olympians
              </RecommendationLink>
              <RecommendationLink href="#travel-book">
                The Travel Book
              </RecommendationLink>
              <RecommendationLink href="#who-was">Who Was</RecommendationLink>
            </nav>

            <article id="who-was" className={styles.bookRecommendation}>
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

            <article id="kid-legends" className={styles.bookRecommendation}>
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

            <article id="percy-jackson" className={styles.bookRecommendation}>
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

            <article id="little-monsters" className={styles.bookRecommendation}>
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

            <article id="geronimo-stilton" className={styles.bookRecommendation}>
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

            <article id="rebel-girls" className={styles.bookRecommendation}>
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

            <article id="travel-book" className={styles.bookRecommendation}>
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

            <article id="childs-introduction" className={styles.bookRecommendation}>
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

            <article id="long-walk-to-water" className={styles.bookRecommendation}>
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

            <article id="food-fight" className={styles.bookRecommendation}>
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

          <section
            className={`${styles.recommendationSection} ${styles.collapsibleRecommendations}`}
          >
            <h2>For Middle School and Above:</h2>
            <nav
              className={styles.recommendationLinks}
              aria-label="Older readers recommendations"
            >
              <RecommendationLink href="#indigenous-peoples-history">
                An Indigenous People&rsquo;s History of the United States
              </RecommendationLink>
              <RecommendationLink href="#guns-germs-steel">
                Guns, Germs, and Steel
              </RecommendationLink>
              <RecommendationLink href="#how-we-got-to-now">
                How We Got To Now
              </RecommendationLink>
              <RecommendationLink href="#lies-my-teacher-told-me">
                Lies My Teacher Told Me
              </RecommendationLink>
              <RecommendationLink href="#sapiens">Sapiens</RecommendationLink>
              <RecommendationLink href="#poison-squad">
                The Poison Squad
              </RecommendationLink>
              <RecommendationLink href="#shortest-history">
                The Shortest History
              </RecommendationLink>
            </nav>

            <article id="sapiens" className={styles.bookRecommendation}>
              <h3>Sapiens</h3>
              <p className={styles.bookAuthor}>By Yuval Noah Harari</p>
              <div className={styles.bookWithCover}>
                <div className={styles.bookReview}>
                <p>
                  Sapiens. A book full of contradictions. Readable yet too long.
                  Interesting, yet also boring. Razor sharp at times, but at
                  other times subscribing to the same banal narrative.
                </p>
                <p>
                  Truth be told, I don&rsquo;t have a straight recommendation
                  for you. The Chronicle of Higher Education said of this book:
                  &ldquo;Reading Sapiens is like joining a wide-ranging and
                  provocative dinner-table conversation. You may not agree with
                  it all, but it makes for a memorable meal.&rdquo; I have a
                  love-hate relationship with the book, but to judge it fairly,
                  we&rsquo;ll pretend it&rsquo;s a dinner-party conversation, with
                  Harari as the intelligent guest who loves giving their opinion
                  (Every party has one of those).
                </p>
                <p>
                  First, I love Sapiens because of its readability. Too many
                  history books are boring, dense, and overstuffed with
                  information, but that wasn&rsquo;t an issue with Sapiens.
                  Moving back to the comparison, the book reminded me of a
                  conversation—intelligent, but never too hard for the reader to
                  understand.
                </p>
                <p>
                  Not only that, but like any good discussion, it had some
                  particularly insightful pockets. For example, Harari discusses
                  the US Constitution in the book. The Constitution states that
                  &ldquo;All men are created equal.&rdquo; The concept of
                  &ldquo;all men being equal&rdquo; had been drilled into me at
                  school, and, like all the kids in my class, I fervently
                  believed it. But, Harari challenges, were all men created
                  equal? Were all men created unequal (as ancient Babylonian
                  society would have you believe)? No, says Harari. These were
                  just creation myths to hold a particular society together,
                  depending on how they chose to structure themselves. If you
                  think about it, humans were just created. The concept of
                  &ldquo;equality&rdquo; was dreamed up by our leaders.
                </p>
                <p>
                  &ldquo;All men are created equal&rdquo; is propaganda! I
                  remember closing the book, because I couldn&rsquo;t believe
                  what I was reading. These are the best parts of any
                  conversation. Somebody says something that makes us
                  uncomfortable—but also makes us think.
                </p>
                <p>
                  But just because you love giving your discourses at a dinner
                  party doesn&rsquo;t mean all of them are necessarily correct or
                  make sense. Herein lies Sapiens&rsquo;s problem. A lot of the
                  book is Harari sounding less like an intellectual and more
                  like a disgruntled guest. It&rsquo;s not anything new, though.
                  Sapiens, in fact forms a predictable narrative.
                </p>
                <p>
                  Section one: We were happy hunter-gatherers, who, after
                  hunting and gathering, hung out with each other near the fire.
                  Life was great! Our bodies were perfectly adapted to this
                  lifestyle, and we could have gone on living like this forever.
                  What went wrong?
                </p>
                <p>
                  Section two: Whoops! What a bummer. We accidentally handed
                  away our freedom to agriculture. Now we are forced to grow
                  wheat in the blazing sun instead of frolicking through the
                  forest like we used to. Not only that, but we can&rsquo;t even
                  enjoy the fruits of our labor. We have to hand them over to an
                  evil emperor. Oh, the misery!
                </p>
                <p>
                  Section three: The Industrial Revolution rolls around, and
                  with it, the state and the market (who Harari calls &ldquo;the
                  mother and father of the individual&rdquo;) Enter the modern
                  age, when the state and the market are great and we are all
                  indulgent consumers.
                </p>
                <p>
                  As a fifth-grader, I thought this was groundbreaking. But
                  after reading more, I now realize that this is an
                  oversimplification. First of all, (as I will discuss in the
                  Dawn of Everything recommendation) humans didn&rsquo;t
                  mechanically switch from being idyllic hunter-gatherers to
                  miserable farmers. The reality, depending on region to region,
                  is far more complex, with many different types of foraging
                  societies. I&rsquo;m not saying that Harari&rsquo;s narrative
                  isn&rsquo;t true. Some part of it may well be. However, it seems
                  to be more nuanced than what he suggests. Furthermore, towards
                  the end of the book, Harari seems to be blaming the individual
                  and sneaking in praises of capitalism and the government
                  wherever he can.
                </p>
                <p>
                  Of course, this isn&rsquo;t the entirety of the book. Sapiens
                  has a number of ideas—about feminism, race, money, science,
                  and a whole host of things. It&rsquo;s definitely worth reading.
                  But at its core, Sapiens is a jumble of interesting
                  dinner-party ideas, some of which should be taken with a pinch
                  (or perhaps a handful) of salt.
                </p>
                </div>
                <Image
                  className={styles.bookSideCover}
                  src={sapiensCover}
                  alt="Cover of Sapiens"
                  sizes="(max-width: 720px) 70vw, 230px"
                />
              </div>
            </article>

            <article id="guns-germs-steel" className={styles.bookRecommendation}>
              <h3>Guns, Germs, and Steel</h3>
              <p className={styles.bookAuthor}>By Jared Diamond</p>
              <div className={styles.bookWithCover}>
                <div className={styles.bookReview}>
                <p>
                  So, this book is essentially Sapiens&rsquo;s grandfather (Harari
                  himself credits Guns, Germs, and Steel for giving him the idea
                  to write it) with the same Eurocentric approach to human
                  history. Even though I haven&rsquo;t read it, I do know there
                  are some crucial differences. It won a Pulitzer Prize and is
                  far more detailed than Sapiens.
                </p>
                <p>
                  I believe that both Sapiens and Guns, Germs, and Steel are good
                  bases to start your history journey. But readers should also
                  compare and challenge the ideas presented in these
                  books—indeed, comparison is one of the best parts of history.
                </p>
                </div>
                <Image
                  className={styles.bookSideCover}
                  src={gunsGermsSteelCover}
                  alt="Cover of Guns, Germs, and Steel"
                  sizes="(max-width: 720px) 70vw, 230px"
                />
              </div>
            </article>

            <article id="shortest-history" className={styles.bookRecommendation}>
              <h3>The Shortest History series</h3>
              <p className={styles.bookAuthor}>By multiple authors</p>
              <div className={styles.bookWithCover}>
                <div className={styles.bookReview}>
                <p>
                  Finally, we are back to &ldquo;regular history&rdquo; so to
                  speak. If you want to get an overview of the past of different
                  countries (China, India, the US) this is an informative way to
                  do so. What I also like about this series is that it keeps
                  history relevant. I have read The Shortest History of China,
                  and the author frequently places China&rsquo;s history in
                  context of where it is today (as an emerging global
                  superpower). Not only that, but some of the books talk about
                  pertinent topics today, such as AI and Israel and Palestine.
                </p>
                </div>
                <figure className={styles.bookSideFigure}>
                  <Image
                    className={styles.bookSideCover}
                    src={shortestHistoryChinaCover}
                    alt="Cover of The Shortest History of China"
                    sizes="(max-width: 720px) 70vw, 230px"
                  />
                  <figcaption>My Favorite</figcaption>
                </figure>
              </div>
            </article>

            <article
              id="lies-my-teacher-told-me"
              className={styles.bookRecommendation}
            >
              <h3>Lies My Teacher Told Me</h3>
              <p className={styles.bookAuthor}>By James Loewen</p>
              <div className={styles.bookWithCover}>
                <div className={styles.bookReview}>
                <p>
                  With Florida declaring new standards for learning Black
                  history (such as &ldquo;slavery might have been good for
                  slaves&rdquo;) and Trump&rsquo;s Americana military pageants,
                  this book deserves a reread.
                </p>
                <p>
                  Lies My Teacher Told Me is essentially an
                  &ldquo;anti-textbook&rdquo; that provides a fascinating view of
                  US history, one that we are not often taught in school. Before
                  reading this, I had heard about Helen Keller about a thousand
                  times in school, yet I had no idea she was actually a
                  socialist. I was taught about the Plymouth colony in my US
                  history class, but I did not learn that European diseases
                  wiped out 98 percent of the native population.
                </p>
                <p>
                  With insightful teachings (or re-teachings, if you are in
                  middle and high school) about Indigenous people, the Vietnam
                  War, recent history, the US government, and more, you should
                  read this book to truly understand America beyond sanitized
                  media portrayals and what you are told in school.
                </p>
                <p>
                  One last thing: Since Loewen first wrote this book in 1995, US
                  history education has definitely improved, particularly in
                  terms of racial and gender diversity in lessons. Since the
                  1995 and 2007 ones are a little outdated, so I would suggest
                  reading the 2018 edition.
                </p>
                </div>
                <Image
                  className={styles.bookSideCover}
                  src={liesMyTeacherCover}
                  alt="Cover of Lies My Teacher Told Me"
                  sizes="(max-width: 720px) 70vw, 230px"
                />
              </div>
            </article>

            <article id="how-we-got-to-now" className={styles.bookRecommendation}>
              <h3>How We Got To Now</h3>
              <p className={styles.bookAuthor}>By Steven Johnson</p>
              <div className={styles.bookWithCover}>
                <div className={styles.bookReview}>
                <p>
                  You may have heard of the &ldquo;butterfly effect&rdquo; where a
                  butterfly flaps its wings and a hurricane starts a thousand
                  miles away. But this book discusses the &ldquo;hummingbird
                  effect&rdquo; where when a particular thing develops, a
                  seemingly unrelated thing develops with it—and uses this logic
                  to discuss some of humanity&rsquo;s greatest inventions (for
                  example, glasses and the printing press were created at the
                  same time because reading made people realize they were
                  farsighted).
                </p>
                <p>
                  I am using this book as one of the guides to help me research
                  for NHD (because this year&rsquo;s theme is Innovation in
                  History) and I am excited to see where it takes me.
                </p>
                </div>
                <Image
                  className={styles.bookSideCover}
                  src={howWeGotToNowCover}
                  alt="Cover of How We Got To Now"
                  sizes="(max-width: 720px) 70vw, 230px"
                />
              </div>
            </article>

            <article id="poison-squad" className={styles.bookRecommendation}>
              <h3>The Poison Squad</h3>
              <p className={styles.bookAuthor}>By Deborah Blum</p>
              <div className={styles.bookWithCover}>
                <div className={styles.bookReview}>
                <p>Caution: This book is not for the faint of stomach.</p>
                <p>
                  Honey used to be made of corn syrup, milk had formaldehyde
                  (chemical used to preserve dead bodies) in it, and strawberry
                  jam, despite the name, had no strawberries. This was the
                  reality of food in the late 19th century—that is, until
                  chemist Harvey Washington Wiley stepped in. Wiley was the
                  chief chemist at the USDA, and The Poison Squad follows his
                  journey as he exposed food adulteration and eventually created
                  the FDA. The story touches on interesting, yet little-known
                  historical events, such as the &ldquo;embalmed beef&rdquo;
                  Spanish-American War scandal. In fact, I used it as a research
                  source in my NHD project (For more about my projects, click on
                  My NHD Experience).
                </p>
                <p>
                  The book is kind of unconventional and not what you would
                  think of as a &ldquo;history book&rdquo; but definitely one I
                  would recommend. Just a warning; you may want to keep a bag
                  ready!
                </p>
                </div>
                <Image
                  className={styles.bookSideCover}
                  src={poisonSquadCover}
                  alt="Cover of The Poison Squad"
                  sizes="(max-width: 720px) 70vw, 230px"
                />
              </div>
            </article>

            <article
              id="indigenous-peoples-history"
              className={styles.bookRecommendation}
            >
              <h3>An Indigenous People&rsquo;s History of the United States</h3>
              <p className={styles.bookAuthor}>By Roxanne Dunbar-Ortiz</p>
              <div className={styles.bookWithCover}>
                <div className={styles.bookReview}>
                <p>
                  Very similar to Lies My Teacher Told Me, except it&rsquo;s for
                  older readers and has won numerous awards (such as the
                  American Book Award). I have just begun reading it, but it
                  seems really solid and presents a host of sobering facts.
                </p>
                </div>
                <Image
                  className={styles.bookSideCover}
                  src={indigenousPeoplesHistoryCover}
                  alt="Cover of An Indigenous Peoples' History of the United States"
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
