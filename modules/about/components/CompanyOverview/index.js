"use client";

import Container from "@/components/ui/Container";
import { Shield, Award, Users, TrendingUp } from "lucide-react";

const metrics = [
  {
    icon: Shield,
    label: "CAC Registered",
    value: "2021",
    description: "Nigeria",
  },
  {
    icon: Award,
    label: "Companies House",
    value: "2025",
    description: "United Kingdom",
  },
  {
    icon: Users,
    label: "Employees",
    value: "25+",
    description: "Across Two Countries",
  },
  {
    icon: TrendingUp,
    label: "Business Sectors",
    value: "7+",
    description: "Healthcare to Logistics",
  },
];

export default function CompanyOverview() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-mafad-cyan font-semibold uppercase tracking-wider text-sm">
              Who We Are
            </span>
            <h2 className="text-4xl font-bold text-mafad-navy mt-2 mb-6">
              MAFAD GROUP LIMITED
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                MAFAD GROUP LIMITED is an international business group focused
                on delivering practical solutions that address modern business
                and community needs. Operating across the United Kingdom and
                Nigeria, we bring together healthcare and social care,
                technology and digital solutions, education and training,
                fashion and lifestyle, FMCG distribution and retail, and
                transport and logistics under one unified vision.
              </p>
              <p className="text-lg">
                Our mission is to combine innovation, expertise and
                responsible enterprise to create businesses that improve
                lives, strengthen partnerships and support economic growth. We
                believe sustainable growth comes from connecting people,
                technology and opportunities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-8 h-8 text-mafad-cyan mb-3" />
                  <div className="text-2xl font-bold text-mafad-navy">
                    {metric.value}
                  </div>
                  <div className="font-semibold text-gray-900">
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {metric.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
