import type { Metadata } from "next";
import { BookRecommendationsContent } from "../page";

export const metadata: Metadata = {
  title: "Stories: Nonfiction AND Fiction | Book Recommendations",
};

export default function StoriesPage() {
  return <BookRecommendationsContent elementaryCategory="stories" />;
}
