"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../page.module.css";

const SEARCH_ITEMS = [
  {
    title: "Our Mission",
    description: "Learn why HistoryTeen exists and what it hopes to do.",
    href: "/about",
  },
  {
    title: "Book Recommendations",
    description: "History books for younger and older readers.",
    href: "/book-recommendations",
  },
  {
    title: "Competitions",
    description: "Explore IAC, NAQT, National History Day, and more.",
    href: "/competitions",
  },
  {
    title: "Blog",
    description: "Read HistoryTeen essays and updates.",
    href: "/blog",
  },
  {
    title: "Interviews",
    description: "Discover interviews with people who bring history to life.",
    href: "/interviews",
  },
  {
    title: "Comics",
    description: "Meet Mac, the time-traveling snail.",
    href: "/comics",
  },
  {
    title: "Quizzes",
    description: "Test your history knowledge and find more quiz resources.",
    href: "/quiz",
  },
];

export default function SiteSearch() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const results = normalizedQuery
    ? SEARCH_ITEMS.filter((item) =>
        `${item.title} ${item.description}`.toLowerCase().includes(normalizedQuery),
      )
    : [];

  return (
    <div className={styles.siteSearch}>
      <label htmlFor="site-search">Search HistoryTeen</label>
      <input
        id="site-search"
        type="search"
        value={query}
        placeholder="Try “books” or “competitions”"
        onChange={(event) => setQuery(event.target.value)}
      />
      {normalizedQuery && (
        <>
          <p className={styles.searchCount} aria-live="polite">
            {results.length} {results.length === 1 ? "result" : "results"}
          </p>
          <ul className={styles.searchResults}>
            {results.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {normalizedQuery && results.length === 0 && (
        <p className={styles.noSearchResults}>No matching sections found.</p>
      )}
    </div>
  );
}
