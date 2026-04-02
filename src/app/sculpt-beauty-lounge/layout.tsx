import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sculpt Beauty Lounge | Body Contouring in Chula Vista, CA",
  description:
    "Premium body contouring and sculpting treatments in Chula Vista, CA. Customer service, quality experience, and making every client feel special. Book with Jessica today.",
};

export default function SculptLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
