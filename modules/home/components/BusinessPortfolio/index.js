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
  HeartPulse,
  Users,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const businesses = [
  {
    region: "United Kingdom",
    regionColor: "text-mafad-cyan",
    items: [
      {
        title: "MAFAD Care Staffing",
        description:
          "Reliable healthcare professionals and workforce solutions for care providers",
        icon: HeartPulse,
        href: "/united-kingdom/care-staffing",
        color: "from-rose-500/20 to-pink-500/20",
        iconColor: "text-rose-500",
        tags: ["Healthcare", "Staffing"],
      },
      {
        title: "MAFAD Care Services",
        description:
          "Person-centred care solutions supporting individuals and communities",
        icon: Users,
        href: "/united-kingdom/care-staffing",
        color: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-500",
        tags: ["Supported Living", "Future"],
      },
      {
        title: "MAFAD Technology UK",
        description: "Digital transformation, IT consultancy and innovative technology",
        icon: Building2,
        href: "/united-kingdom/mafadtech-services",
        color: "from-indigo-500/20 to-blue-500/20",
        iconColor: "text-indigo-500",
        tags: ["IT Consultancy", "Digital"],
      },
      {
        title: "MAFAD Training Academy",
        description: "Professional development, workforce training and skills advancement",
        icon: School,
        href: "/united-kingdom#training-academy",
        color: "from-teal-500/20 to-green-500/20",
        iconColor: "text-teal-500",
        tags: ["Training", "Certification"],
      },
    ],
  },
  {
    region: "Nigeria",
    regionColor: "text-mafad-cyan",
    items: [
      {
        title: "MAFAD Technology Nigeria",
        description:
          "Software, digital marketing, ICT training and solar installation",
        icon: Laptop,
        href: "/nigeria/mafad-technology",
        color: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-mafad-cyan",
        tags: ["Software", "ICT Training"],
      },
      {
        title: "MAFAD Clothings Nigeria",
        description:
          "A modern African fashion brand combining creativity with contemporary design",
        icon: Shirt,
        href: "/nigeria#clothings",
        color: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-500",
        tags: ["Fashion", "Lifestyle"],
      },
      {
        title: "Coca-Cola Distribution/Retail",
        description: "Authorized sub-dealer for Coca-Cola HBC Nigeria",
        icon: Droplet,
        href: "/nigeria/coca-cola",
        color: "from-red-500/20 to-orange-500/20",
        iconColor: "text-red-500",
        tags: ["FMCG", "Wholesale", "Retail"],
      },
      {
        title: "Transport & Logistics",
        description: "Connecting businesses through efficient movement of goods",
        icon: Truck,
        href: "/nigeria#logistics",
        color: "from-yellow-500/20 to-amber-500/20",
        iconColor: "text-yellow-500",
        tags: ["Distribution", "Warehousing"],
      },
      {
        title: "Future Nigeria Ventures",
        description:
          "Exploring strategic investments in solar, agriculture and beyond",
        icon: Sun,
        href: "/nigeria#future-ventures",
        color: "from-orange-500/20 to-amber-500/20",
        iconColor: "text-orange-500",
        tags: ["Solar", "Agriculture"],
      },
    ],
  },
];

export default function BusinessPortfolio() {
  return (
    <section id="businesses" className="py-20 bg-mafad-gray scroll-mt-24">
      <Container>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-mafad-navy mb-4">
            Our Businesses
          </h2>
          <p className="text-xl text-gray-600">
            Diversified operations delivering sustainable value across
            healthcare, technology, education, fashion, FMCG and logistics
          </p>
          <div className="w-24 h-1 bg-mafad-cyan mx-auto mt-6" />
        </div>

        {/* United Kingdom Portfolio */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-mafad-navy flex items-center">
                <span className="w-2 h-6 bg-mafad-cyan rounded-full mr-3" />
                United Kingdom Operations
              </h3>
              <p className="text-gray-600 mt-1">
                MAFAD Group Limited - Since 2025
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

        {/* Nigeria Portfolio */}
        <div>
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
