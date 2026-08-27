import { Careers } from "@/modules/careers";

export const metadata = {
  title: "Careers",
  description:
    "Join The MAFAD Family. Explore career opportunities across healthcare, technology, fashion, distribution and logistics in the UK and Nigeria.",
  alternates: { canonical: "/careers" },
  openGraph: {
    url: "/careers",
    title: "Careers at MAFAD Group Limited",
    description:
      "Explore career opportunities across our UK and Nigeria divisions.",
  },
};

export default function CareersPage() {
  return <Careers />;
}
