import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy in Santa Monica, CA",
  description:
    "Licensed Clinical Psychologist in Santa Monica, CA providing compassionate in-person and California telehealth therapy for adults navigating anxiety, trauma, and burnout.",
  icons: {
    icon: "/dr-maya-reynolds-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans text-[#2b2b2b] bg-[#ffffff] antialiased">
        {children}
      </body>
    </html>
  );
}
