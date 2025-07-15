import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose weights you need
  display: "swap",
  variable: "--font-poppins", // Optional for custom CSS
});

export const metadata: Metadata = {
  title: "Tetrahobbit | Best Web & App Development Company in India",
  description: "Tomorrow's solution today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className}`}>{children}</body>
    </html>
  );
}
