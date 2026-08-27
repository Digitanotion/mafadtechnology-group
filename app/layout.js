import { Inter } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = "https://mafadgroup.com";
const SITE_NAME = "MAFAD Group Limited";
const DEFAULT_TITLE =
  "MAFAD Group Limited | One Group. Many Solutions. Greater Impact.";
const DEFAULT_DESCRIPTION =
  "MAFAD Group Limited is a diversified UK-Nigeria business group delivering innovative solutions across healthcare, technology, education, fashion, FMCG distribution and logistics.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | MAFAD Group Limited",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "MAFAD Group Limited",
    "MAFAD Group",
    "MAFAD Technology",
    "healthcare staffing UK",
    "IT consultancy Nigeria",
    "FMCG distribution Nigeria",
    "Coca-Cola distribution Nigeria",
    "training academy",
    "business group Nigeria UK",
  ],
  authors: [{ name: SITE_NAME }],
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "MAFAD Group Limited - One Group. Many Solutions. Greater Impact.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mafadtechnology",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/images/og/og-default.jpg"],
  },
};

export const viewport = {
  themeColor: "#0A2E4D",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MAFAD Group Limited",
  alternateName: "MAFAD Technology Group",
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/mafad-logo.png`,
  description: DEFAULT_DESCRIPTION,
  foundingDate: "2021",
  sameAs: [
    "https://facebook.com/mafadtechnology",
    "https://instagram.com/mafadtechnology",
    "https://twitter.com/mafadtechnology",
    "https://linkedin.com/company/mafadtechnology",
    "https://youtube.com/@mafadtechnology",
  ],
  subOrganization: [
    {
      "@type": "Organization",
      name: "MAFAD Technology Limited",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Owo & Akure, Ondo State",
        addressCountry: "NG",
      },
    },
    {
      "@type": "Organization",
      name: "MAFAD Group Limited",
      address: {
        "@type": "PostalAddress",
        streetAddress: "29 Imperia Way",
        addressLocality: "Hull",
        postalCode: "HU9 5EQ",
        addressCountry: "GB",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navigation />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
