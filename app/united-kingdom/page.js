import { UKOperations } from "@/modules/united-kingdom";

export const metadata = {
  title: "United Kingdom Operations",
  description:
    "MAFAD UK: Care Staffing, Care Services, Technology and Training Academy - solutions that care, empower and drive sustainable growth in the United Kingdom.",
  alternates: { canonical: "/united-kingdom" },
  openGraph: {
    url: "/united-kingdom",
    title: "MAFAD UK Operations",
    description:
      "Healthcare, technology and training solutions delivered across the United Kingdom.",
  },
};

export default function UKPage() {
  return <UKOperations />;
}
