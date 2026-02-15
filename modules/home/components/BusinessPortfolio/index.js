"use client";

import Link from "next/link";
import {
  Laptop,
  Droplet,
  Shirt,
  School,
  Truck,
  Sun,
  Building2,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const businesses = [
  {
    region: "Nigeria",
    regionColor: "text-mafad-cyan",
    items: [
      {
        title: "MAFAD Technology",
        description:
          "Software, digital marketing, ICT training, solar installation",
        icon: Laptop,
        href: "/nigeria/mafad-technology",
        color: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-mafad-cyan",
        tags: ["ICT Services", "Training", "Solar"],
      },
      {
        title: "Coca-Cola Distribution",
        description: "Authorized sub-dealer for Coca-Cola HBC Nigeria",
        icon: Droplet,
        href: "/nigeria/coca-cola",
        color: "from-red-500/20 to-orange-500/20",
        iconColor: "text-red-500",
        tags: ["FMCG", "Wholesale", "Retail"],
      },
      {
        title: "Fashion Retail",
        description: "Ready-to-wear casual and corporate fashion",
        icon: Shirt,
        href: "/nigeria/fashion-retail",
        color: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-500",
        tags: ["Clothing", "Online Store", "Physical Outlet"],
      },
      {
        title: "ICT Academy",
        description: "Professional training and certification programs",
        icon: School,
        href: "/nigeria/ict-academy",
        color: "from-green-500/20 to-emerald-500/20",
        iconColor: "text-green-500",
        tags: ["Certification", "Skills", "Development"],
      },
      {
        title: "Logistics",
        description: "Last-mile delivery and haulage services",
        icon: Truck,
        href: "/nigeria/logistics",
        color: "from-yellow-500/20 to-amber-500/20",
        iconColor: "text-yellow-500",
        tags: ["Delivery", "Distribution"],
      },
      {
        title: "Solar Energy",
        description: "Renewable energy and power backup solutions",
        icon: Sun,
        href: "/nigeria/solar-energy",
        color: "from-orange-500/20 to-amber-500/20",
        iconColor: "text-orange-500",
        tags: ["Solar", "Installation"],
      },
    ],
  },
  {
    region: "United Kingdom",
    regionColor: "text-mafad-cyan",
    items: [
      {
        title: "MAFADTECH Services",
        description: "IT consultancy and professional services",
        icon: Building2,
        href: "/united-kingdom/mafadtech-services",
        color: "from-indigo-500/20 to-blue-500/20",
        iconColor: "text-indigo-500",
        tags: ["IT", "Consulting"],
      },
      {
        title: "IT Consulting",
        description: "Software development and technical support",
        icon: Laptop,
        href: "/united-kingdom/it-consulting",
        color: "from-cyan-500/20 to-blue-500/20",
        iconColor: "text-cyan-500",
        tags: ["Development", "Support"],
      },
      {
        title: "Professional Training",
        description: "Skills development and career advancement",
        icon: School,
        href: "/united-kingdom/training",
        color: "from-teal-500/20 to-green-500/20",
        iconColor: "text-teal-500",
        tags: ["Training", "Certification"],
      },
    ],
  },
];

export default function BusinessPortfolio() {
  return (
    <section className="py-20 bg-mafad-gray">
      <Container>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-mafad-navy mb-4">
            Our Business Portfolio
          </h2>
          <p className="text-xl text-gray-600">
            Diversified operations delivering sustainable value across
            technology, FMCG, retail, and professional services
          </p>
          <div className="w-24 h-1 bg-mafad-cyan mx-auto mt-6" />
        </div>

        {/* Nigeria Portfolio */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-mafad-navy flex items-center">
                <span className="w-2 h-6 bg-mafad-cyan rounded-full mr-3" />
                Nigeria Operations
              </h3>
              <p className="text-gray-600 mt-1">
                MAFAD Technology Limited - Since 2021
              </p>
            </div>
            <Link
              href="/nigeria"
              className="group flex items-center text-mafad-cyan font-semibold hover:text-mafad-navy transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses[0].items.map((business, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300"
              >
                <Link href={business.href}>
                  <div
                    className={`p-6 bg-gradient-to-br ${business.color} rounded-xl mb-4 inline-block`}
                  >
                    <business.icon
                      className={`w-8 h-8 ${business.iconColor}`}
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-mafad-navy mb-2 group-hover:text-mafad-cyan transition-colors">
                    {business.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    {business.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {business.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-mafad-gray px-2 py-1 rounded-full text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* UK Portfolio */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-mafad-navy flex items-center">
                <span className="w-2 h-6 bg-mafad-cyan rounded-full mr-3" />
                United Kingdom Operations
              </h3>
              <p className="text-gray-600 mt-1">
                MAFADTECH Services Limited - Since 2025
              </p>
            </div>
            <Link
              href="/united-kingdom"
              className="group flex items-center text-mafad-cyan font-semibold hover:text-mafad-navy transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses[1].items.map((business, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300"
              >
                <Link href={business.href}>
                  <div
                    className={`p-6 bg-gradient-to-br ${business.color} rounded-xl mb-4 inline-block`}
                  >
                    <business.icon
                      className={`w-8 h-8 ${business.iconColor}`}
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-mafad-navy mb-2 group-hover:text-mafad-cyan transition-colors">
                    {business.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    {business.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {business.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-mafad-gray px-2 py-1 rounded-full text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-xs text-gray-500">
                    SOC: 2136, 2139, 3545, 1136
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <div className="text-center">
              <p className="font-bold text-mafad-navy">CAC</p>
              <p className="text-xs text-gray-500">Nigeria</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-mafad-navy">Coca-Cola HBC</p>
              <p className="text-xs text-gray-500">Authorized Dealer</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-mafad-navy">Companies House</p>
              <p className="text-xs text-gray-500">UK</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-mafad-navy">BOI</p>
              <p className="text-xs text-gray-500">Compliant</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-mafad-navy">SMEDAN</p>
              <p className="text-xs text-gray-500">Registered</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
