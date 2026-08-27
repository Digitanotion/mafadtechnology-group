"use client";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Link from "next/link";
import {
  Building2,
  MapPin,
  HeartPulse,
  Code,
  School,
  ArrowRight,
} from "lucide-react";

const commitments = [
  "Reliable staffing solutions",
  "Professional care standards",
  "People-focused services",
  "Sustainable workforce development",
];

export default function UKOperations() {
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
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                MAFAD UK Operations
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Solutions That Care, Empower
              <span className="text-mafad-cyan block mt-2">
                and Drive Sustainable Growth
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              MAFAD UK focuses on delivering professional services that
              support people, businesses and communities.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-mafad-cyan" />
                <span className="text-sm">Hull, England</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Healthcare & Social Care */}
      <section
        id="care-staffing"
        className="py-20 bg-white scroll-mt-24"
      >
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-mafad-cyan font-semibold uppercase tracking-wider text-sm">
                Healthcare & Social Care
              </span>
              <h2 className="text-3xl font-bold text-mafad-navy mt-2 mb-6">
                MAFAD Care Staffing
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Through MAFAD Care Staffing and future MAFAD Care Services, we
                aim to provide quality workforce solutions and person-centred
                support.
              </p>
              <p className="text-sm font-semibold text-mafad-navy mb-3">
                Our commitment:
              </p>
              <ul className="space-y-2">
                {commitments.map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-mafad-cyan rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Card id="care-services" className="scroll-mt-24">
              <div className="p-4 bg-rose-500/10 rounded-xl mb-4 inline-block">
                <HeartPulse className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold text-mafad-navy mb-2">
                MAFAD Care Services
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Providing compassionate, person-centred care designed around
                individual needs.
              </p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Future services include
              </p>
              <div className="flex flex-wrap gap-2">
                {["Supported living", "Domiciliary care", "Personal support"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-mafad-gray px-2 py-1 rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Technology */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="order-2 lg:order-1">
              <div className="p-4 bg-indigo-500/10 rounded-xl mb-4 inline-block">
                <Code className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold text-mafad-navy mb-2">
                MAFAD Technology UK
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "IT consultancy",
                  "Digital innovation",
                  "Business technology support",
                  "Transformation solutions",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-mafad-gray px-2 py-1 rounded-full text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/united-kingdom/mafadtech-services"
                className="mt-4 inline-flex items-center text-mafad-cyan font-semibold hover:text-mafad-navy transition-colors"
              >
                View all Technology services
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>
            <div className="order-1 lg:order-2">
              <span className="text-mafad-cyan font-semibold uppercase tracking-wider text-sm">
                Technology Solutions
              </span>
              <h2 className="text-3xl font-bold text-mafad-navy mt-2 mb-6">
                Digital Transformation & IT Consultancy
              </h2>
              <p className="text-lg text-gray-600">
                MAFAD Technology UK provides IT consultancy, digital
                innovation, business technology support and transformation
                solutions to help organisations improve efficiency and growth.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Training */}
      <section id="training-academy" className="py-20 bg-white scroll-mt-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-mafad-cyan font-semibold uppercase tracking-wider text-sm">
              Training and Development
            </span>
            <h2 className="text-3xl font-bold text-mafad-navy mt-2 mb-6">
              MAFAD Training Academy
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              MAFAD Training Academy supports individuals and organisations
              through professional development, skills training and workforce
              improvement.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-mafad-cyan/10 rounded-2xl flex items-center justify-center">
                <School className="w-8 h-8 text-mafad-cyan" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
