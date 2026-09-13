import Link from "next/link";
import styles from "./page.module.css";

const NAV = [
  { label: "Our Mission", href: "/about" },
  { label: "Book Recommendations", href: "/book-recommendations" },
  { label: "Competitions", href: "/competitions" },
  { label: "Blog", href: "/blog" },
  { label: "Interviews", href: "/interviews" },
  { label: "Comics", href: "/comics" },
];

export default function SiteHeader() {
  return (
    <header className={styles.masthead}>
      <div className={`${styles.container} ${styles.brandRow}`}>
        <Link className={styles.wordmark} href="/">
          <svg
            className={styles.crownLogo}
            viewBox="0 0 120 72"
            aria-hidden="true"
          >
            <path
              d="M18 22 45 43 60 15 77 43 102 22 96 61c-24-5-48-5-72 0Z"
              fill="currentColor"
              stroke="var(--foreground)"
              strokeLinejoin="round"
              strokeWidth="6"
            />
            <circle cx="17" cy="20" r="7" fill="#fff" stroke="var(--foreground)" strokeWidth="5" />
            <circle cx="60" cy="12" r="7" fill="#fff" stroke="var(--foreground)" strokeWidth="5" />
            <circle cx="103" cy="20" r="7" fill="#fff" stroke="var(--foreground)" strokeWidth="5" />
          </svg>
          <span className={styles.brandText}>
            History<span>Teen</span>
          </span>
        </Link>
      </div>
      <nav className={styles.nav} aria-label="Primary">
        <div className={styles.container}>
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
