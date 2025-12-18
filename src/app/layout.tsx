import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Ramandha Putra Suryahadi - Portfolio",
  description: 'Portfolio website showcasing web development and AI engineering projects by Ramandha Putra Suryahadi. Specialized in React, Next.js, Laravel, OpenCV and modern web technologies.',
  keywords: ['web developer', 'AI engineer', 'portfolio', 'React', 'Next.js', 'Rama Scholar', 'Laravel, OpenCV'],
  authors: [{ name: 'Ramandha Putra Suryahadi' }],
  creator: 'Ramandha Putra Suryahadi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${openSans.variable} antialiased`}
      >
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
