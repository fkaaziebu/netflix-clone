import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Design of Netflix clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
