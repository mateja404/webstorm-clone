import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebStorm: The JavaScript and TypeScript IDE, by JetBrains",
  description: "WebStorm by JetBrains - Clone",
};

const inter = Inter({
    subsets: ["latin"],
    weight: "400"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
