import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "primereact/resources/themes/md-light-indigo/theme.css";
import "primeicons/primeicons.css";

import MasterPage from "./masterPage";

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
    <html lang="en" className="bg-tertiary">
      <body className={inter.className}>
        <MasterPage>{children}</MasterPage>
      </body>
    </html>
  );
}
