import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoReview | Local SEO & Google Review Automation",
  description:
    "Rank #1 locally with expert Local SEO and automated Google reviews. Boost visibility, trust, and sales for your business in the GTA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
