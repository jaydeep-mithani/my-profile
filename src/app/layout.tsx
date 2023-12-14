import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
      <body className={inter.className + " bg-[#333]"}>
        <Background path="videos/bg.mp4">{children}</Background>
      </body>
    </html>
  );
}
