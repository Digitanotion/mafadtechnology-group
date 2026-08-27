import {
  AboutHero,
  CompanyOverview,
  CEOMessage,
  VisionMission,
  Leadership,
  Governance,
} from "@/modules/about";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <CEOMessage />
      <VisionMission />
      <Leadership />
      <Governance />
    </>
  );
}
