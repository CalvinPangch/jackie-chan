import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jackie Chan | Wuxia Legacy",
  description:
    "A cinematic tribute to Jackie Chan: martial artist, actor, stunt performer, director, and enduring action legend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
