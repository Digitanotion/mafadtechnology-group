"use client";

import Container from "@/components/ui/Container";
import { Building2, MapPin, Calendar } from "lucide-react";

export default function AboutHero() {
  return (
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
              MAFAD Technology Group
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Building the Future Through
            <span className="text-mafad-cyan block mt-2">
              Technology, Trade & Services
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A diversified multinational group with operations in Nigeria and the
            United Kingdom, committed to sustainable value creation and economic
            growth.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4 text-mafad-cyan" />
              <span className="text-sm">Est. 2021 (NG) • 2025 (UK)</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-mafad-cyan" />
              <span className="text-sm">Nigeria • United Kingdom</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
