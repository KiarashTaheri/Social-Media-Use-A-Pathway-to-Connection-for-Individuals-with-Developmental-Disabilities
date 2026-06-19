import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contact Card",
  description: "Contact information for our team.",
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
