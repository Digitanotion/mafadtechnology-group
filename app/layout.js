import { Inter } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "MAFAD Technology Group - Innovating Technology. Powering Trade.",
  description:
    "A diversified multinational group operating in Nigeria and the United Kingdom.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Navigation />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
