import { MafadtechServices } from "@/modules/united-kingdom";

export const metadata = {
  title: "MAFAD Technology UK",
  description:
    "IT consultancy, digital transformation, training and logistics services from MAFAD Technology UK (MAFAD Group Limited).",
  alternates: { canonical: "/united-kingdom/mafadtech-services" },
  openGraph: {
    url: "/united-kingdom/mafadtech-services",
    title: "MAFAD Technology UK",
  },
};

export default function MafadtechServicesPage() {
  return <MafadtechServices />;
}
