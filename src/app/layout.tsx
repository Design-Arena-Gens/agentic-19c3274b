import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/BottomNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avicure",
  description: "AI-powered healthcare platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <div className="mx-auto max-w-5xl min-h-screen flex flex-col">
          <main className="flex-1 pb-24 px-4 md:px-6 pt-4 md:pt-6">{children}</main>
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
