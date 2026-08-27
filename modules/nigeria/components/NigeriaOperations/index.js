"use client";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Link from "next/link";
import {
  Globe,
  MapPin,
  Laptop,
  Shirt,
  Droplet,
  Truck,
  Sun,
  ArrowRight,
} from "lucide-react";

const units = [
  {
    title: "MAFAD Technology Nigeria",
    description: "Delivering digital solutions that empower businesses and communities.",
    focus: ["Software solutions", "Digital services", "Technology support"],
    icon: Laptop,
    href: "/nigeria/mafad-technology",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-mafad-cyan",
  },
  {
    title: "MAFAD Clothings Nigeria",
    description: "A modern African fashion brand built around creativity, culture, quality and contemporary style.",
    focus: ["Creativity", "Culture", "Quality", "Contemporary style"],
    icon: Shirt,
    href: null,
    id: "clothings",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    title: "Coca-Cola Distribution/Retail",
    description: "Building opportunities within FMCG distribution and retail markets.",
    focus: [],
    icon: Droplet,
    href: "/nigeria/coca-cola",
    color: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-500",
  },
  {
    title: "Transport & Logistics",
    description: "Supporting business growth through reliable transportation and logistics solutions.",
    focus: [],
    icon: Truck,
    href: null,
    id: "logistics",
    color: "from-yellow-500/20 to-amber-500/20",
    iconColor: "text-yellow-500",
  },
  {
    title: "Future Nigeria Ventures",
    description: "Investing in innovative opportunities that create sustainable economic impact.",
    focus: ["Solar & renewable energy", "Agriculture"],
    icon: Sun,
    href: "/nigeria/solar-energy",
    id: "future-ventures",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
  },
];

export default function NigeriaOperations() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-mafad-navy via-mafad-navy to-mafad-navy/95 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <Container className="relative py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-mafad-cyan mb-4">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                MAFAD Nigeria Operations
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Driving Innovation, Creativity
              <span className="text-mafad-cyan block mt-2">
                and Business Growth
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              MAFAD Nigeria represents our commitment to developing businesses
              that create opportunities and strengthen local economies.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-mafad-cyan" />
                <span className="text-sm">Owo & Akure, Ondo State</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Business Units */}
      <section className="py-20 bg-mafad-gray">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-mafad-navy mb-4">
              Business Units
            </h2>
            <div className="w-24 h-1 bg-mafad-cyan mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.map((unit) => (
              <Card
                key={unit.title}
                id={unit.id}
                className={unit.id ? "scroll-mt-24" : ""}
              >
                <div
                  className={`p-4 bg-gradient-to-br ${unit.color} rounded-xl mb-4 inline-block`}
                >
                  <unit.icon className={`w-8 h-8 ${unit.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-mafad-navy mb-2">
                  {unit.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {unit.description}
                </p>
                {unit.focus.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {unit.focus.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-mafad-gray px-2 py-1 rounded-full text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {unit.href && (
                  <Link
                    href={unit.href}
                    className="inline-flex items-center text-mafad-cyan font-semibold hover:text-mafad-navy transition-colors text-sm"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
