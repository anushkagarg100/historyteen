"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./quiz.module.css";

type Choice = {
  label: string;
  detail?: string;
};

type Question = {
  prompt: string;
  context?: string;
  mediaClip?: {
    linkedText: string;
    audioSrc: string;
    start: number;
    end: number;
  };
  imageClip?: {
    videoId: string;
    start: number;
    end: number;
  };
  portraitPair?: {
    images: Array<{
      src: string;
      alt: string;
      width: number;
      height: number;
    }>;
    caption: string;
  };
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  choices: Choice[];
  answer: number;
};

const QUESTIONS: Question[] = [
  {
    prompt:
      "This president was the very first to live in the White House. It looked a little different back then, though:",
    image: {
      src: "/first-white-house.png",
      alt: "An early illustration of the White House and its grounds",
      width: 413,
      height: 230,
    },
    choices: [
      { label: "George Washington" },
      { label: "John Adams" },
      { label: "“Weird Al” Yankovic" },
      { label: "James Madison" },
    ],
    answer: 1,
  },
  {
    prompt:
      "This president kept over 40 pets in the White House, including snakes and flying squirrels.",
    context:
      "One of the pets, a Pekingese named Manchu, was given to this president’s daughter by Qing Empress Dowager Cixi.",
    choices: [
      { label: "Abraham Lincoln" },
      { label: "Steve Irwin" },
      { label: "Theodore Roosevelt" },
      { label: "James K. Polk" },
    ],
    answer: 2,
  },
  {
    prompt:
      "This First Lady was a major promoter of civil rights, notably inviting African American singer Marian Anderson to sing at the Lincoln Memorial. She was also one of the very first delegates at the United Nations.",
    context: "Quite an underachiever, if you ask me.",
    mediaClip: {
      linkedText: "Marian Anderson",
      audioSrc:
        "https://upload.wikimedia.org/wikipedia/commons/4/43/Marian_Anderson_at_Lincoln_Memorial.webm",
      start: 28,
      end: 78,
    },
    choices: [
      { label: "Lucy Hayes" },
      { label: "Hillary Clinton" },
      { label: "Bess Truman" },
      { label: "Eleanor Roosevelt" },
    ],
    answer: 3,
  },
  {
    prompt:
      "Before his presidency, this man worked as a geologist in the Australian outback, headed the American Relief Administration, and even picked up some Chinese. However, his executive career was not nearly so fruitful—shantytowns across America were named after him.",
    image: {
      src: "/hooverville.png",
      alt: "A sprawling Depression-era shantytown beside railroad tracks",
      width: 1041,
      height: 768,
    },
    imageClip: {
      videoId: "cqvYNoiPDKw",
      start: 0,
      end: 21,
    },
    choices: [
      { label: "Herbert Hoover" },
      { label: "Benjamin Harrison" },
      { label: "Dwight Eisenhower" },
      { label: "Martin Van Buren" },
    ],
    answer: 0,
  },
  {
    prompt:
      "This president lived in Indonesia as a child and says his time there “helped him appreciate the common humanity of all people.” Before his presidency, he also wrote two books: Dreams from My Father and The Audacity of Hope.",
    choices: [
      { label: "Barack Obama" },
      { label: "Joe Biden" },
      { label: "Arnold Schwarzenegger" },
      { label: "John F. Kennedy" },
    ],
    answer: 0,
  },
  {
    prompt:
      "This president’s administration, even though he only had a two-year term, was nicknamed “Camelot” for its alleged peace and prosperity.",
    choices: [
      { label: "Rutherford B. Hayes" },
      { label: "Thomas Jefferson" },
      { label: "John F. Kennedy" },
      { label: "Warren Harding" },
    ],
    answer: 2,
  },
  {
    prompt:
      "This president, the very first of the “Log Cabin Presidents,” was popular due to his victories in the War of 1812.",
    choices: [
      { label: "Andrew Johnson" },
      { label: "Zachary Taylor" },
      { label: "Abraham Lincoln" },
      { label: "Andrew Jackson" },
    ],
    answer: 3,
  },
  {
    prompt:
      "Besides Donald Trump, this president was the only one to serve two nonconsecutive terms.",
    portraitPair: {
      images: [
        {
          src: "/benjamin-harrison-portrait.jpg",
          alt: "Official portrait of the 23rd president",
          width: 654,
          height: 436,
        },
        {
          src: "/joe-biden-portrait.png",
          alt: "Official portrait of the 46th president",
          width: 1270,
          height: 640,
        },
      ],
      caption: "The two middle presidents",
    },
    choices: [
      { label: "Franklin D. Roosevelt" },
      { label: "Grover Cleveland" },
      { label: "Ulysses S. Grant" },
      { label: "Calvin Coolidge" },
    ],
    answer: 1,
  },
  {
    prompt:
      "A president who takes office today is either a Democrat or a Republican. But different parties once permeated the presidency. Which other parties did former presidents take office under?",
    context: "Keep in mind that the two parties were not present at the same time.",
    choices: [
      { label: "Whig and Federalist" },
      { label: "Bull Moose and Progressive" },
      { label: "Know-Nothing and Free Soil" },
      {
        label:
          "This is a trick question—the parties have always been Democrat and Republican",
      },
    ],
    answer: 0,
  },
  {
    prompt:
      "True or False: The United States, at one point, had only one party.",
    choices: [
      {
        label: "True",
        detail: "The U.S. political landscape is always changing.",
      },
      {
        label: "False",
        detail: "A one-party system is for those Commies!",
      },
    ],
    answer: 0,
  },
];

const PERSONALITY_RESULTS = [
  {
    minScore: 8,
    name: "Abraham Lincoln",
    image: "/result-abraham-lincoln.jpg",
    description: (
      <>
        <p>
          What are you doing taking an online quiz? You should be in the White
          House, signing bills and ending civil wars.
        </p>
        <p>
          All kidding aside, though, Abraham Lincoln would be proud of you, as
          he loved to read and was knowledgeable about many things.
        </p>
      </>
    ),
  },
  {
    minScore: 6,
    name: "John Adams",
    image: "/result-john-adams.jpg",
    description: (
      <>
        <p>
          A worthy leader, but a little moody. The only president belonging to
          the more traditional Federalist Party, he stubbornly clung to English
          traditions—for example, he wanted to call George Washington “His
          Excellency”—while the other Founding Fathers had moved on.
        </p>
        <p>
          However, he was known for being intellectually gifted and had a
          library full of books. If you got this result, use your knowledge to
          stay with the times and don’t stay stuck in the past. You are
          certainly capable of it.
        </p>
      </>
    ),
  },
  {
    minScore: 3,
    name: "Millard Fillmore",
    image: "/result-millard-fillmore.jpg",
    description: (
      <>
        <p>
          A genuinely good person, yet bland and forgettable, Millard Fillmore
          tried his best to please everyone. However, the years before the Civil
          War were tough, and Fillmore just couldn’t hold his own. Eventually,
          he was bullied into signing the Compromise of 1850, a controversial
          act that sped up the beginning of the war.
        </p>
        <p>
          Don’t be like Millard Fillmore. Instead, use your history knowledge to
          defend your opinion.
        </p>
      </>
    ),
  },
  {
    minScore: 0,
    name: "Fala",
    image: "/result-fala-statue.jpg",
    description: (
      <>
        <p>You might be thinking: Fala? That doesn’t sound like a president.</p>
        <p>
          Yes…because Fala was Franklin D. Roosevelt’s Scottish terrier. If you
          are disappointed with your results, don’t be. Fala was one of the most
          famous presidential pets and even got his own statue. Also, he was
          extremely adorable.
        </p>
      </>
    ),
  },
];

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [showPersonality, setShowPersonality] = useState(false);
  const [clipPlaying, setClipPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const question = QUESTIONS[questionIndex];

  useEffect(() => {
    const audio = audioRef.current;
    const clip = question.mediaClip;
    if (!audio || !clip) return;

    if (!clipPlaying) {
      audio.pause();
      return;
    }

    audio.currentTime = clip.start;
    void audio.play().catch(() => setClipPlaying(false));

    const stopAtClipEnd = () => {
      if (audio.currentTime >= clip.end) {
        audio.pause();
        audio.currentTime = clip.start;
        setClipPlaying(false);
      }
    };

    audio.addEventListener("timeupdate", stopAtClipEnd);
    return () => audio.removeEventListener("timeupdate", stopAtClipEnd);
  }, [clipPlaying, question]);

  useEffect(() => {
    if (!clipPlaying || !question.imageClip) return;

    const clipLength = (question.imageClip.end - question.imageClip.start) * 1000;
    const stopTimer = window.setTimeout(() => setClipPlaying(false), clipLength);
    return () => window.clearTimeout(stopTimer);
  }, [clipPlaying, question]);

  function advance() {
    if (selected === null) return;

    const nextAnswers = [...answers, selected];
    setAnswers(nextAnswers);

    if (questionIndex === QUESTIONS.length - 1) {
      setFinished(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setQuestionIndex((current) => current + 1);
    setSelected(null);
    setClipPlaying(false);
  }

  function goBack() {
    if (questionIndex === 0) return;

    const previousIndex = questionIndex - 1;
    setQuestionIndex(previousIndex);
    setSelected(answers[previousIndex]);
    setAnswers((current) => current.slice(0, -1));
    setClipPlaying(false);
  }

  function restart() {
    setStarted(false);
    setQuestionIndex(0);
    setAnswers([]);
    setSelected(null);
    setFinished(false);
    setShowPersonality(false);
    setClipPlaying(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!started) {
    return (
      <section className={styles.quizLanding} aria-labelledby="quiz-list-title">
        <p className={styles.eyebrow}>Quizzes</p>
        <h1 id="quiz-list-title">Test your historical instincts.</h1>
        <a
          className={styles.quizLink}
          href="#presidency-quiz"
          onClick={(event) => {
            event.preventDefault();
            setStarted(true);
          }}
        >
          <span>US Presidency Quiz</span>
          <span aria-hidden="true">→</span>
        </a>
      </section>
    );
  }

  if (finished) {
    const score = QUESTIONS.reduce(
      (total, item, index) => total + (answers[index] === item.answer ? 1 : 0),
      0,
    );
    const missedQuestions = QUESTIONS.map((item, index) => ({
      item,
      number: index + 1,
    })).filter(({ item, number }) => answers[number - 1] !== item.answer);
    const personality = PERSONALITY_RESULTS.find(
      (result) => score >= result.minScore,
    )!;

    if (showPersonality) {
      return (
        <section
          className={styles.personalityResult}
          style={{ backgroundImage: `url(${personality.image})` }}
          aria-labelledby="personality-title"
        >
          <div className={styles.personalityShade}>
            <div className={styles.personalityCopy}>
              <p className={styles.personalityKicker}>You are:</p>
              <h1 id="personality-title">{personality.name}</h1>
              <div className={styles.personalityDescription}>
                {personality.description}
              </div>
              <button className={styles.personalityRestart} type="button" onClick={restart}>
                Take the quiz again
              </button>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className={styles.results} aria-labelledby="results-title">
        <header className={styles.resultsHeader}>
          <div>
            <p className={styles.eyebrow}>Results</p>
            <h1 id="results-title">
              {missedQuestions.length === 0 ? "Perfect score" : "Questions missed"}
            </h1>
          </div>
          <p className={styles.score} aria-label={`${score} out of ${QUESTIONS.length}`}>
            <strong>{score}</strong>
            <span>out of {QUESTIONS.length}</span>
          </p>
        </header>

        {missedQuestions.length === 0 ? (
          <p className={styles.perfectMessage}>
            You got every question right. Nothing to review here.
          </p>
        ) : (
          <ol className={styles.answerKey}>
            {missedQuestions.map(({ item, number }) => (
              <li key={item.prompt}>
                <span className={styles.resultNumber}>{number}</span>
                <div>
                  <p className={styles.resultQuestion}>{item.prompt}</p>
                  <p className={styles.correctAnswer}>
                    {item.choices[item.answer].label}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        )}

        <div className={styles.personalityPrompt}>
          <p>Click next to see what president you are.</p>
          <button
            className={styles.restart}
            type="button"
            onClick={() => {
              setShowPersonality(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Next
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.quizSlide} aria-labelledby="question-title">
      {questionIndex === 1 && (
        <Image
          className={styles.flyingSquirrel}
          src="/flying-squirrel.png"
          alt=""
          width={1536}
          height={1024}
          aria-hidden="true"
          priority
        />
      )}
      <div className={styles.slideTopline}>
        <p className={styles.eyebrow}>Presidential potpourri</p>
        <p className={styles.counter} aria-live="polite">
          Question {questionIndex + 1} / {QUESTIONS.length}
        </p>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          advance();
        }}
      >
        <h1 id="question-title" className={styles.question}>
          {question.mediaClip
            ? question.prompt
                .split(question.mediaClip.linkedText)
                .map((part, index, parts) => (
                  <span key={`${part}-${index}`}>
                    {part}
                    {index < parts.length - 1 && (
                      <button
                        className={styles.audioLink}
                        type="button"
                        aria-pressed={clipPlaying}
                        onClick={() => setClipPlaying((playing) => !playing)}
                      >
                        {question.mediaClip?.linkedText}
                        <span className={styles.audioIcon} aria-hidden="true">
                          {clipPlaying ? "■" : "▶"}
                        </span>
                      </button>
                    )}
                  </span>
                ))
            : question.prompt}
        </h1>
        {question.context && (
          <p className={styles.context}>{question.context}</p>
        )}
        {question.image &&
          (question.imageClip ? (
            <div className={styles.imageAudioClue}>
              <button
                className={styles.imageAudioButton}
                type="button"
                aria-label={`${clipPlaying ? "Stop" : "Play"} audio clue`}
                aria-pressed={clipPlaying}
                onClick={() => setClipPlaying((playing) => !playing)}
              >
                <Image
                  className={styles.questionImage}
                  src={question.image.src}
                  alt={question.image.alt}
                  width={question.image.width}
                  height={question.image.height}
                />
                <span className={styles.imagePlayBadge} aria-hidden="true">
                  {clipPlaying ? "■ Stop audio" : "▶ Play audio clue"}
                </span>
              </button>
              <p>
                Click on the picture to hear the voices of the people during
                this president&rsquo;s administration, from the musical <i>Annie</i>.
              </p>
            </div>
          ) : (
            <Image
              className={styles.questionImage}
              src={question.image.src}
              alt={question.image.alt}
              width={question.image.width}
              height={question.image.height}
              priority={questionIndex === 0}
            />
          ))}
        {question.mediaClip && (
          <audio
            ref={audioRef}
            className={styles.srOnly}
            src={question.mediaClip.audioSrc}
            preload="metadata"
          />
        )}
        {question.imageClip && clipPlaying && (
          <iframe
            className={styles.hiddenMedia}
            src={`https://www.youtube-nocookie.com/embed/${question.imageClip.videoId}?start=${question.imageClip.start}&end=${question.imageClip.end}&autoplay=1&controls=0&rel=0`}
            title="Audio clue"
            allow="autoplay; encrypted-media"
            tabIndex={-1}
          />
        )}
        {question.portraitPair && (
          <figure className={styles.portraitClue}>
            <div className={styles.portraitPair}>
              {question.portraitPair.images.map((portrait) => (
                <Image
                  key={portrait.src}
                  src={portrait.src}
                  alt={portrait.alt}
                  width={portrait.width}
                  height={portrait.height}
                />
              ))}
            </div>
            <figcaption>{question.portraitPair.caption}</figcaption>
          </figure>
        )}

        <fieldset className={styles.fieldset}>
          <legend className={styles.srOnly}>Choose one answer</legend>

          <div className={styles.choices}>
            {question.choices.map((choice, index) => {
              const isSelected = selected === index;
              return (
                <label
                  className={`${styles.choice} ${isSelected ? styles.selected : ""}`}
                  key={choice.label}
                >
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={index}
                    checked={isSelected}
                    onChange={() => setSelected(index)}
                  />
                  <span className={styles.bubble} aria-hidden="true" />
                  <span className={styles.choiceCopy}>
                    <span>{choice.label}</span>
                    {choice.detail && <small>{choice.detail}</small>}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className={styles.quizActions}>
          {questionIndex > 0 && (
            <button className={styles.back} type="button" onClick={goBack}>
              Back
            </button>
          )}
          <button
            className={styles.next}
            type="submit"
            disabled={selected === null}
          >
            {questionIndex === QUESTIONS.length - 1 ? "See results" : "Next"}
          </button>
        </div>
      </form>
    </section>
  );
}
