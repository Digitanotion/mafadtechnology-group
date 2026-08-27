import { CocaColaDistribution } from "@/modules/nigeria";

export const metadata = {
  title: "Coca-Cola Distribution/Retail",
  description:
    "MAFAD is an authorized sub-dealer for Coca-Cola HBC Nigeria, building opportunities within FMCG distribution and retail markets.",
  alternates: { canonical: "/nigeria/coca-cola" },
  openGraph: {
    url: "/nigeria/coca-cola",
    title: "Coca-Cola Distribution/Retail - MAFAD Nigeria",
  },
};

export default function CocaColaPage() {
  return <CocaColaDistribution />;
}
