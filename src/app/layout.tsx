import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description:
    "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.",
  icons: {
    icon: "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/9f1bb212-4047-4ddb-a144-79c1f9704dfe/favicon.ico?format=100w",
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
