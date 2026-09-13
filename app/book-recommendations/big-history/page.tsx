import type { Metadata } from "next";
import { BookRecommendationsContent } from "../page";

export const metadata: Metadata = {
  title: "Big History | Book Recommendations",
};

export default function BigHistoryPage() {
  return <BookRecommendationsContent olderCategory="big-history" />;
}
