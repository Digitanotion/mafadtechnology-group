import {
  AboutHero,
  CompanyOverview,
  OurStory,
  CEOMessage,
  VisionMission,
  Leadership,
  Governance,
} from "@/modules/about";

export const metadata = {
  title: "About Us",
  description:
    "MAFAD Group Limited is an international business group delivering practical solutions across healthcare, technology, education, fashion, FMCG and logistics in the UK and Nigeria.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About MAFAD Group Limited",
    description:
      "Our story, vision, mission, leadership and corporate governance across the UK and Nigeria.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <OurStory />
      <CEOMessage />
      <VisionMission />
      <Leadership />
      <Governance />
    </>
  );
}
