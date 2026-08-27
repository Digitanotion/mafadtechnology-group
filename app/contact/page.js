import { Contact } from "@/modules/contact";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MAFAD Group Limited. WhatsApp, email and phone contacts for our Nigeria and United Kingdom offices.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact MAFAD Group Limited",
    description:
      "Reach our Nigeria and United Kingdom teams by WhatsApp, email or phone.",
  },
};

export default function ContactPage() {
  return <Contact />;
}
