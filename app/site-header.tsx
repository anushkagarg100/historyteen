import Link from "next/link";
import styles from "./page.module.css";

const NAV = [
  { label: "Competitions", href: "/competitions" },
  { label: "Blog", href: "/blog" },
  { label: "Our Mission", href: "/about" },
  { label: "Interviews", href: "/interviews" },
  { label: "Book Recommendations", href: "/book-recommendations" },
  { label: "Skits and Parodies", href: "/skits-and-parodies" },
  { label: "Comics", href: "/comics" },
  { label: "Quiz", href: "/quiz" },
];

export default function SiteHeader() {
  return (
    <header className={styles.masthead}>
      <div className={`${styles.container} ${styles.mastheadInner}`}>
        <Link className={styles.wordmark} href="/">
          History<span>Teen</span>
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
