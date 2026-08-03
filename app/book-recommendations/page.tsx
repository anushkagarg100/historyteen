import type { Metadata } from "next";
import SectionPlaceholder from "../section-placeholder";

export const metadata: Metadata = {
  title: "Book Recommendations",
  description: "HistoryTeen book recommendations are coming soon.",
};

export default function BookRecommendationsPage() {
  return <SectionPlaceholder title="Book Recommendations" />;
}
