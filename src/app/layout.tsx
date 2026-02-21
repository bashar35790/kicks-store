import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import StoreProvider from "@/store/provider";
import "./globals.css";
import { Rubik } from "next/font/google";

// configure the font
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "KICKS | Do It Right",
  description: "Modern, premium sneaker e-commerce store.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-background text-foreground antialiased min-h-screen flex flex-col`}>
        <StoreProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
