import { SolarEnergy } from "@/modules/nigeria";

export const metadata = {
  title: "Solar Energy - Future Ventures",
  description:
    "Renewable energy and power backup solutions, one of MAFAD's future Nigeria ventures investing in sustainable economic impact.",
  alternates: { canonical: "/nigeria/solar-energy" },
  openGraph: {
    url: "/nigeria/solar-energy",
    title: "Solar Energy - MAFAD Future Ventures",
  },
};

export default function SolarEnergyPage() {
  return <SolarEnergy />;
}
