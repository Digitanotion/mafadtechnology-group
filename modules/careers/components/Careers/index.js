"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import VideoPlayer from "@/components/ui/VideoPlayer";
import {
  Briefcase,
  CheckCircle2,
  MapPin,
  Mail,
} from "lucide-react";

const APPLY_URL = "https://zfrmz.eu/4tjkL3lrvspuCB3P9Prk";

const ukRoles = [
  "Healthcare Assistants",
  "Support Workers",
  "Care Professionals",
  "Technology Specialists",
  "Training Professionals",
];

const nigeriaRoles = [
  "Technology Professionals",
  "Fashion Specialists",
  "Distribution Personnel",
  "Logistics Professionals",
];

const whyJoin = [
  "Competitive opportunities",
  "Career development",
  "Flexible working options",
  "Training and upskilling",
  "Supportive environment",
  "Opportunity to make a real impact",
];

export default function Careers() {
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
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-mafad-cyan mb-4">
              <Briefcase className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Careers
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Join The MAFAD Family
            </h1>
            <p className="text-xl text-gray-300">
              At MAFAD GROUP LIMITED, we believe our greatest strength is our
              people. We create opportunities for talented individuals who
              want to develop their skills, build meaningful careers and
              contribute to impactful projects.
            </p>
            <div className="mt-10">
              <Button
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mafad-cyan text-mafad-navy hover:bg-mafad-cyan/90 px-8 py-4 text-lg"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Recruitment Video */}
      <section className="py-20 bg-mafad-gray">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mafad-navy mb-4">
              See MAFAD in Action
            </h2>
            <p className="text-lg text-gray-600">
              A look at our people, our services and the opportunities
              waiting for you across the Group.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <VideoPlayer
              src="/videos/careers-recruitment.mp4"
              poster="/images/video-posters/careers-recruitment-poster.jpg"
              alt="MAFAD Group Recruitment & Corporate Advert"
              aspect="aspect-video"
            />
          </div>
        </Container>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-mafad-navy mb-4">
              Career Opportunities
            </h2>
            <div className="w-24 h-1 bg-mafad-cyan mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-mafad-cyan" />
                <h3 className="text-xl font-bold text-mafad-navy">
                  United Kingdom
                </h3>
              </div>
              <ul className="space-y-3">
                {ukRoles.map((role) => (
                  <li key={role} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-mafad-cyan rounded-full mr-3" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-mafad-cyan" />
                <h3 className="text-xl font-bold text-mafad-navy">Nigeria</h3>
              </div>
              <ul className="space-y-3">
                {nigeriaRoles.map((role) => (
                  <li key={role} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-mafad-cyan rounded-full mr-3" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-mafad-gray">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-mafad-navy mb-4">
              Why Join MAFAD?
            </h2>
            <p className="text-lg text-gray-600">
              Be part of a group that values people, drives innovation and
              creates impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyJoin.map((item) => (
              <div
                key={item}
                className="flex items-center bg-white rounded-xl p-4 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-mafad-cyan mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <Button
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mafad-navy text-white hover:bg-mafad-navy/90 px-8 py-4 text-lg"
            >
              Apply Now
            </Button>
            <p className="flex items-center justify-center text-sm text-gray-500">
              <Mail className="w-4 h-4 mr-2" />
              Or reach us at careers@mafadgroup.com
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
