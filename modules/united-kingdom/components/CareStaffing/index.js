"use client";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Image from "next/image";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { HeartPulse, MapPin, Briefcase, ArrowRight } from "lucide-react";

const commitments = [
  "Reliable staffing solutions",
  "Professional care standards",
  "People-focused services",
  "Sustainable workforce development",
];

export default function CareStaffing() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-mafad-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/stock/hero-skyline.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-mafad-navy via-mafad-navy/95 to-mafad-navy" />
        </div>
        <div className="absolute inset-0 opacity-10">
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
              <HeartPulse className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Healthcare & Social Care
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              MAFAD Care Staffing
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Reliable healthcare professionals and workforce solutions for
              care providers across the United Kingdom.
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

      {/* Care Staffing */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-mafad-cyan font-semibold uppercase tracking-wider text-sm">
                Workforce Solutions
              </span>
              <h2 className="text-3xl font-bold text-mafad-navy mt-2 mb-6">
                Providing Qualified Healthcare Professionals
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                MAFAD Care Staffing provides qualified healthcare professionals
                to support care providers with reliable workforce solutions -
                Healthcare Assistants, Support Workers, and Care Professionals,
                placed with reliability and professionalism.
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
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/stock/uk-care-staffing.jpg"
                alt="MAFAD Care Staffing - healthcare professional and client"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] order-2 lg:order-1">
              <Image
                src="/images/stock/uk-care-services.jpg"
                alt="MAFAD Care Services - person-centred care"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <Card className="order-1 lg:order-2">
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

          {/* Recruitment / Overview Video */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-mafad-navy mb-2">
                See MAFAD Care Staffing in Action
              </h3>
              <p className="text-gray-600">
                Nationwide coverage, qualified professionals, and
                compassionate care.
              </p>
            </div>
            <VideoPlayer
              src="/videos/careers-recruitment.mp4"
              poster="/images/video-posters/careers-recruitment-poster.jpg"
              alt="MAFAD Care Staffing overview"
              aspect="aspect-video"
            />
          </div>

          {/* CTA: Care roles -> Careers page */}
          <div className="mt-16 bg-mafad-navy rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start md:items-center gap-4">
              <div className="w-12 h-12 bg-mafad-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-mafad-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Looking to join our care team?
                </h3>
                <p className="text-gray-300 text-sm">
                  We&apos;re recruiting Healthcare Assistants, Support Workers
                  and Care Professionals across the UK.
                </p>
              </div>
            </div>
            <Button
              href="/careers"
              className="bg-mafad-cyan text-mafad-navy hover:bg-mafad-cyan/90 whitespace-nowrap"
            >
              View Care Opportunities
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
