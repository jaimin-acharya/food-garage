import type { Metadata } from "next";
import { Geist, Geist_Mono, Bree_Serif } from "next/font/google";
import { Toaster } from 'sonner';
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const breeSerif = Bree_Serif({
  variable: "--font-bree-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Food Garage",
  description: "Experience culinary excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${breeSerif.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          {children}
          <Toaster richColors position="top-center" />
        </CartProvider>
      </body>
    </html>
  );
}
