import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "primereact/resources/themes/md-dark-indigo/theme.css";
import "primeicons/primeicons.css";

import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Protfolio",
  description: "Detailed profile of Jaydeep Mithani",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#003344]"}>
        <Background path="videos/bg.mp4">{children}</Background>
      </body>
    </html>
  );
}
