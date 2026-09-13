"use client";

import type { MouseEvent, ReactNode } from "react";

type RecommendationLinkProps = {
  children: ReactNode;
  href: `#${string}`;
};

export default function RecommendationLink({
  children,
  href,
}: RecommendationLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (window.location.hash !== href) {
      return;
    }

    event.preventDefault();
    window.location.hash = "";
    window.requestAnimationFrame(() => {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    });
  }

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
