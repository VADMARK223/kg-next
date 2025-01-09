import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import {inter} from './ui/fonts'
// import {lusitana} from './ui/fonts'
import "./ui/globals.css";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata: Metadata = {
  title: "Изучение кыргызского языка",
  description: "Сайт для изучения кыргызского языка",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
