import { NigeriaOperations } from "@/modules/nigeria";

export const metadata = {
  title: "Nigeria Operations",
  description:
    "MAFAD Nigeria: Technology, Clothings, Coca-Cola Distribution/Retail, Transport & Logistics and future ventures, driving innovation and business growth across Nigeria.",
  alternates: { canonical: "/nigeria" },
  openGraph: {
    url: "/nigeria",
    title: "MAFAD Nigeria Operations",
    description:
      "Technology, fashion, FMCG distribution and logistics businesses driving growth across Nigeria.",
  },
};

export default function NigeriaPage() {
  return <NigeriaOperations />;
}
