import type { Metadata } from "next";
import { BookRecommendationsContent } from "../page";

export const metadata: Metadata = {
  title: "Expand Your Knowledge | Book Recommendations",
};

export default function ExpandYourKnowledgePage() {
  return <BookRecommendationsContent elementaryCategory="expand" />;
}
