import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rightly Dividing",
  description: "KJV Bible Analysis Tool: Kingdom vs. Grace Gospel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
