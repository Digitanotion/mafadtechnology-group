"use client";

import Container from "@/components/ui/Container";
import {
  Eye,
  Target,
  Heart,
  Lightbulb,
  Star,
  Users as UsersIcon,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with honesty, transparency, and accountability.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace technology and creativity to solve real-world problems.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We strive for quality and continuous improvement in all we do.",
  },
  {
    icon: UsersIcon,
    title: "Customer Focus",
    description:
      "Our clients and partners are at the centre of our operations.",
  },
  {
    icon: Target,
    title: "Sustainability",
    description:
      "We build businesses designed for long-term impact and growth.",
  },
];

export default function VisionMission() {
  return (
    <section id="vision-mission" className="py-20 bg-gray-50 scroll-mt-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-mafad-cyan font-semibold uppercase tracking-wider text-sm">
            Our Purpose
          </span>
          <h2 className="text-4xl font-bold text-mafad-navy mt-2 mb-6">
            Vision, Mission & Values
          </h2>
          <div className="w-24 h-1 bg-mafad-cyan mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-mafad-cyan/10 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-mafad-cyan" />
            </div>
            <h3 className="text-2xl font-bold text-mafad-navy mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To become a trusted and innovative multinational business group
              delivering sustainable value through technology, trade, and
              services.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-mafad-cyan/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-mafad-cyan" />
            </div>
            <h3 className="text-2xl font-bold text-mafad-navy mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To provide reliable, customer-focused solutions through
              innovation, professionalism, and strategic partnerships while
              creating economic opportunities and long-term growth.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-mafad-navy mb-4">
            Our Core Values
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-mafad-cyan/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-mafad-cyan transition-colors">
                  <Icon className="w-6 h-6 text-mafad-cyan group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-semibold text-mafad-navy mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
