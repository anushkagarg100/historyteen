import type { Metadata } from "next";
import { BookRecommendationsContent } from "../page";

export const metadata: Metadata = {
  title: "Reference Books | Book Recommendations",
};

export default function ReferenceBooksPage() {
  return <BookRecommendationsContent elementaryCategory="reference" />;
}
