import type { Metadata } from "next";
import SiteHeader from "../site-header";
import Quiz from "./quiz";
import styles from "./quiz.module.css";

export const metadata: Metadata = {
  title: "Presidential Quiz",
  description: "Test your knowledge of American presidents and first ladies.",
};

export default function QuizPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#quiz">
        Skip to quiz
      </a>
      <SiteHeader />
      <main id="quiz" className={styles.main}>
        <Quiz />
      </main>
    </div>
  );
}
