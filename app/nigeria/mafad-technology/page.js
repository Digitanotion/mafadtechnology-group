import { MafadTechnology } from "@/modules/nigeria";

export const metadata = {
  title: "MAFAD Technology Nigeria",
  description:
    "Software development, ICT training and digital solutions from MAFAD Technology Nigeria, empowering businesses and communities.",
  alternates: { canonical: "/nigeria/mafad-technology" },
  openGraph: {
    url: "/nigeria/mafad-technology",
    title: "MAFAD Technology Nigeria",
  },
};

export default function MafadTechnologyPage() {
  return <MafadTechnology />;
}
