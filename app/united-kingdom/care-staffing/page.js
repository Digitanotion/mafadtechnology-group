import { CareStaffing } from "@/modules/united-kingdom";

export const metadata = {
  title: "MAFAD Care Staffing",
  description:
    "MAFAD Care Staffing provides qualified healthcare professionals to support care providers across the United Kingdom - Healthcare Assistants, Support Workers and Care Professionals.",
  alternates: { canonical: "/united-kingdom/care-staffing" },
  openGraph: {
    url: "/united-kingdom/care-staffing",
    title: "MAFAD Care Staffing",
  },
};

export default function CareStaffingPage() {
  return <CareStaffing />;
}
