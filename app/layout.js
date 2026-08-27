import { Inter } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "MAFAD GROUP LIMITED - One Group. Many Solutions. Greater Impact.",
  description:
    "MAFAD GROUP LIMITED is a diversified UK-Nigeria business group delivering innovative solutions across healthcare, technology, education, fashion, FMCG distribution and logistics.",
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
