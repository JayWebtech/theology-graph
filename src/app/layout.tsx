import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theological Education Platform",
  description: "A comprehensive interactive platform for exploring Christian history, theology, and religious movements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
