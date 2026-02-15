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
    label: "Revenue",
    value: "₦45M",
    description: "Year 1 Projection",
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
              MAFAD Technology Group
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                MAFAD Technology Group is a diversified business group with
                operations in Nigeria and the United Kingdom. The Group operates
                across technology services, ICT training, FMCG distribution,
                fashion retail, logistics, and general trading.
              </p>
              <p className="text-lg">
                Our focus is on delivering practical solutions, creating
                employment, and building scalable businesses that meet local and
                international standards. We are committed to operating
                ethically, leveraging innovation, and contributing positively to
                economic development in every market we serve.
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
