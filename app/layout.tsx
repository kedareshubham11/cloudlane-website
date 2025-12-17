import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CloudLane - Digital Solutions with Passion",
  description:
    "We craft innovative web applications, mobile apps, cloud solutions, and AWS consulting services. Discover our flagship product Tremyda.",
  keywords:
    "web development, mobile apps, cloud solutions, AWS consulting, software development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
