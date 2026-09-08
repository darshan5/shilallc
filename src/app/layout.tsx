import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shila LLC | Dunkin' Franchise Group",
  description:
    "Family-owned multi-unit Dunkin' Donuts franchise group serving Bucks & Montgomery County, Pennsylvania since 1999. Laying the Foundation for Success.",
  keywords: [
    "Shila LLC",
    "Dunkin Donuts",
    "franchise",
    "Bucks County",
    "Montgomery County",
    "Pennsylvania",
  ],
  openGraph: {
    title: "Shila LLC | Dunkin' Franchise Group",
    description:
      "Family-owned multi-unit Dunkin' Donuts franchise group serving Bucks & Montgomery County, Pennsylvania since 1999.",
    type: "website",
    url: "https://shilallc.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white text-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}
