"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/hooks/smoothscroll"; // Locomotive Scroll Hook
import Head from "next/head";
import CustomCursor from "./components/CustomCursor"; // Import the custom cursor component
import { usePathname } from "next/navigation"; // Import the usePathname hook

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current route

  // Conditionally apply SmoothScroll on all pages except the CoursePage
  const isCoursePage = pathname === "/CoursePage"; // Match the path for CoursePage

  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto+Slab:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <CustomCursor />
        {/* Only apply SmoothScroll if it's NOT the CoursePage */}
        {isCoursePage ? children : <SmoothScroll>{children}</SmoothScroll>}
      </body>
    </html>
  );
}
