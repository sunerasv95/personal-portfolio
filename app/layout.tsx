import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const lexend = Lexend({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Portfolio | Home",
  description: "Sunera Viyangoda Personal Portfolio",
};

const bodyClasses = [lexend.className, "bg-dark", "px-[20%]"]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyClasses.join(" ")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
