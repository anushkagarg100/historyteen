import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";

const serifDisplay = Source_Serif_4({
  variable: "--font-serif-display",
  subsets: ["latin"],
  display: "swap",
});

const sansUi = Inter({
  variable: "--font-sans-ui",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://historyteen.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HistoryTeen — history for people who are still in school",
    template: "%s · HistoryTeen",
  },
  description:
    "Long-form history essays for teenage readers: the ancient world, empire, revolution, and the century that made ours. Sourced, argued, and never rounded down.",
  keywords: [
    "history for teens",
    "history essays",
    "world history",
    "AP World History",
    "history magazine",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "HistoryTeen",
    title: "HistoryTeen — history for people who are still in school",
    description:
      "Long-form history essays for teenage readers. Sourced, argued, and never rounded down.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HistoryTeen",
    description:
      "Long-form history essays for teenage readers. Sourced, argued, and never rounded down.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifDisplay.variable} ${sansUi.variable}`}>
      <body>{children}</body>
    </html>
  );
}
