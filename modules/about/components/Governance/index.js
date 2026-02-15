"use client";

import Container from "@/components/ui/Container";
import {
  Shield,
  FileText,
  Building2,
  Scale,
  CheckCircle,
  Globe,
} from "lucide-react";
import Link from "next/link";

const registrations = [
  {
    country: "Nigeria",
    icon: Building2,
    company: "MAFAD Technology Limited",
    number: "RC: 6893862",
    date: "22 June 2021",
    regulator: "Corporate Affairs Commission (CAC)",
    capital: "₦1,000,000",
    objects: [
      "ICT services",
      "Training",
      "Renewable energy",
      "Logistics",
      "General trading",
      "Construction",
      "Investments",
    ],
  },
  {
    country: "United Kingdom",
    icon: Globe,
    company: "MAFADTECH Services Limited",
    number: "Company No: 16173180",
    date: "9 January 2025",
    regulator: "Companies House",
    address: "29, Imperia Way, Hull, England HU9 5EQ",
    sic: ["62020", "85590", "46110", "50200"],
  },
];

const compliance = [
  {
    name: "CAC",
    full: "Corporate Affairs Commission",
    status: "Registered",
    icon: FileText,
  },
  {
    name: "SMEDAN",
    full: "Small and Medium Enterprises Development Agency",
    status: "Certified",
    icon: Shield,
  },
  {
    name: "BOI",
    full: "Bank of Industry",
    status: "Compliant",
    icon: Scale,
  },
  {
    name: "NIRSAL",
    full: "Nigeria Incentive-Based Risk Sharing System",
    status: "Eligible",
    icon: CheckCircle,
  },
];

export default function Governance() {
  return (
    <section id="governance" className="py-20 bg-gray-50 scroll-mt-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-mafad-cyan font-semibold uppercase tracking-wider text-sm">
            Governance & Compliance
          </span>
          <h2 className="text-4xl font-bold text-mafad-navy mt-2 mb-6">
            Corporate Structure & Registrations
          </h2>
          <p className="text-lg text-gray-600">
            Fully compliant with regulatory requirements in Nigeria and the
            United Kingdom
          </p>
          <div className="w-24 h-1 bg-mafad-cyan mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {registrations.map((reg, idx) => {
            const Icon = reg.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-mafad-cyan/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-mafad-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mafad-navy">
                        {reg.country}
                      </h3>
                      <p className="text-sm text-gray-500">{reg.regulator}</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Company Name</p>
                    <p className="font-semibold text-gray-900">{reg.company}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Registration</p>
                      <p className="font-medium text-gray-900">{reg.number}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Incorporation</p>
                      <p className="font-medium text-gray-900">{reg.date}</p>
                    </div>
                  </div>

                  {reg.capital && (
                    <div>
                      <p className="text-sm text-gray-500">Share Capital</p>
                      <p className="font-medium text-gray-900">{reg.capital}</p>
                    </div>
                  )}

                  {reg.address && (
                    <div>
                      <p className="text-sm text-gray-500">
                        Registered Address
                      </p>
                      <p className="font-medium text-gray-900">{reg.address}</p>
                    </div>
                  )}

                  {reg.objects && (
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Core Objects</p>
                      <div className="flex flex-wrap gap-2">
                        {reg.objects.map((obj, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700"
                          >
                            {obj}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {reg.sic && (
                    <div>
                      <p className="text-sm text-gray-500 mb-2">SIC Codes</p>
                      <div className="flex flex-wrap gap-2">
                        {reg.sic.map((code, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700"
                          >
                            {code}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Alignment */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-mafad-navy mb-6">
            Regulatory Compliance & Funding Alignment
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {compliance.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center p-4">
                  <div className="w-12 h-12 bg-mafad-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-mafad-cyan" />
                  </div>
                  <p className="font-bold text-mafad-navy">{item.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.full}</p>
                  <span className="inline-block mt-2 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="border-t border-gray-100 pt-6">
            <p className="text-gray-600 text-center">
              MAFAD Technology Group is positioned as a diversified, compliant,
              and growth-oriented enterprise with strong potential in
              technology, FMCG distribution, and retail. The Group seeks
              strategic partnerships and funding to scale operations across
              Nigeria and the United Kingdom.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
