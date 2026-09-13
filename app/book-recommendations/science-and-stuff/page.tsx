import type { Metadata } from "next";
import { BookRecommendationsContent } from "../page";

export const metadata: Metadata = {
  title: "Science and Stuff | Book Recommendations",
};

export default function ScienceAndStuffPage() {
  return <BookRecommendationsContent olderCategory="science" />;
}
