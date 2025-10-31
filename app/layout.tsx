import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavigationEffects from "@/components/NavigationEffects";

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Insurance Box - Protecting What Matters Most",
  description: "Professional insurance services including life, health, Medicare, and financial planning. Get personalized coverage with expert guidance from licensed agents.",
  keywords: "insurance, life insurance, health insurance, Medicare, financial planning, quotes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/the-insurance-box-logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <NavigationEffects />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
