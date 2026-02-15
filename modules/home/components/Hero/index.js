"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, MapPin, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative bg-gradient-to-br from-mafad-navy via-mafad-navy to-mafad-navy/95 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Cyan accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-mafad-cyan" />

      <Container className="relative py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust badges */}
            <div className="flex items-center space-x-4 text-sm">
              <span className="bg-white/10 px-3 py-1 rounded-full flex items-center">
                <span className="w-2 h-2 bg-mafad-cyan rounded-full mr-2 animate-pulse" />
                CAC Registered
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-full flex items-center">
                <span className="w-2 h-2 bg-mafad-cyan rounded-full mr-2 animate-pulse" />
                Companies House
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Innovating{" "}
              <span className="text-mafad-cyan relative">
                Technology
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="4"
                    x2="100"
                    y2="4"
                    stroke="#07E9E9"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              </span>
              <br />
              <span className="text-mafad-cyan">Powering Trade.</span>
              <br />
              Building the Future.
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 max-w-2xl">
              A diversified multinational group delivering sustainable value
              through technology, trade, and services in Nigeria and the United
              Kingdom.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                href="/nigeria/coca-cola"
                className="bg-mafad-cyan text-mafad-navy hover:bg-mafad-cyan/90 px-8 py-4 text-lg group"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-mafad-navy px-8 py-4 text-lg"
              >
                Request a Service
              </Button>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-2xl font-bold text-mafad-cyan">2</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-mafad-cyan">6+</div>
                <div className="text-sm text-gray-300">Business Units</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-mafad-cyan">₦45M</div>
                <div className="text-sm text-gray-300">Year 1 Revenue</div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="lg:pl-12">
            <div className="grid gap-6">
              {/* Nigeria Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-5 h-5 text-mafad-cyan" />
                      <span className="font-semibold">Nigeria</span>
                    </div>
                    <p className="text-2xl font-bold mb-1">
                      MAFAD Technology Ltd
                    </p>
                    <p className="text-sm text-gray-300">
                      Since 2021 | RC: 6893862
                    </p>
                  </div>
                  <div className="bg-mafad-cyan/20 rounded-lg px-3 py-1">
                    <span className="text-mafad-cyan text-sm font-semibold">
                      CAC
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-white/10 px-2 py-1 rounded">
                    ICT Services
                  </span>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded">
                    Coca-Cola HBC
                  </span>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded">
                    Fashion Retail
                  </span>
                </div>
              </div>

              {/* UK Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Building2 className="w-5 h-5 text-mafad-cyan" />
                      <span className="font-semibold">United Kingdom</span>
                    </div>
                    <p className="text-2xl font-bold mb-1">
                      MAFADTECH Services Ltd
                    </p>
                    <p className="text-sm text-gray-300">
                      Since 2025 | No: 16173180
                    </p>
                  </div>
                  <div className="bg-mafad-cyan/20 rounded-lg px-3 py-1">
                    <span className="text-mafad-cyan text-sm font-semibold">
                      Companies House
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-white/10 px-2 py-1 rounded">
                    IT Consultancy
                  </span>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded">
                    Training
                  </span>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded">
                    Logistics
                  </span>
                </div>
              </div>

              {/* Growth indicator */}
              <div className="bg-gradient-to-r from-mafad-cyan/20 to-transparent rounded-2xl p-6">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-mafad-cyan" />
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-300">
                      5-Year Projection
                    </p>
                    <p className="text-2xl font-bold">
                      ₦160M{" "}
                      <span className="text-sm font-normal text-gray-300">
                        by 2030
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
