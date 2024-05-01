import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const lexend = Lexend({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Portfolio | Home",
  description: "Sunera Viyangoda Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-dark text-neutral px-[15%] ${lexend.className} md:px-[15%] lg:px-[20%]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
