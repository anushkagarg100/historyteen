import type { Metadata } from "next";
import { BookRecommendationsContent } from "../page";

export const metadata: Metadata = {
  title: "Controversial Topics | Book Recommendations",
};

export default function ControversialTopicsPage() {
  return <BookRecommendationsContent olderCategory="controversial" />;
}
