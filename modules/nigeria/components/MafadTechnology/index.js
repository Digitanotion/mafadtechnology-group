"use client";

import {
  Code,
  Monitor,
  Smartphone,
  Globe,
  Megaphone,
  GraduationCap,
  Zap,
  Server,
  Shield,
  Users,
  Building2,
  CheckCircle,
  ArrowRight,
  Calendar,
  MapPin,
  Award,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom web and mobile applications tailored to your business needs.",
    features: [
      "Enterprise Software",
      "Mobile Apps",
      "API Integration",
      "Cloud Solutions",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites that drive engagement and conversions.",
    features: ["Corporate Websites", "E-commerce", "Portals", "CMS Solutions"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies to grow your online presence.",
    features: ["SEO", "Social Media", "Content Marketing", "Email Campaigns"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: GraduationCap,
    title: "ICT Training",
    description: "Professional certification and skills development programs.",
    features: [
      "Cisco Certification",
      "Microsoft Office",
      "Web Development",
      "Digital Skills",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Solar Installation",
    description: "Renewable energy solutions for homes and businesses.",
    features: ["Solar Panels", "Inverters", "Battery Systems", "Maintenance"],
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Server,
    title: "ICT Equipment",
    description: "Quality hardware and infrastructure solutions.",
    features: ["Computers", "Networking", "Printers", "Accessories"],
    color: "from-indigo-500 to-blue-500",
  },
];

const certifications = [
  { name: "CAC Registered", icon: Shield },
  { name: "SMEDAN Certified", icon: Award },
  { name: "ISO 9001:2015", icon: CheckCircle },
  { name: "Microsoft Partner", icon: Building2 },
];

const stats = [
  { label: "Projects Delivered", value: "150+", icon: Code },
  { label: "Clients Trained", value: "500+", icon: Users },
  { label: "Years Experience", value: "4+", icon: Calendar },
  { label: "Support Hours", value: "24/7", icon: Clock },
];

const targetMarkets = [
  {
    title: "Small & Medium Enterprises",
    description: "Digital transformation solutions for growing businesses",
    icon: Building2,
    features: [
      "Business Automation",
      "CRM Systems",
      "Inventory Management",
      "POS Solutions",
    ],
  },
  {
    title: "Educational Institutions",
    description: "Technology infrastructure for schools and training centers",
    icon: GraduationCap,
    features: [
      "ICT Labs",
      "E-learning Platforms",
      "Student Portals",
      "Training Programs",
    ],
  },
  {
    title: "Religious Organizations",
    description: "Tech solutions for churches and faith-based organizations",
    icon: Building2,
    features: [
      "Live Streaming",
      "Donation Systems",
      "Member Portals",
      "Sound Systems",
    ],
  },
  {
    title: "Government Agencies",
    description: "Public sector digital transformation services",
    icon: Shield,
    features: [
      "e-Government Solutions",
      "Data Centers",
      "Security Systems",
      "Consultancy",
    ],
  },
];

export default function MafadTechnology() {
  return (
    <>
      {/* Hero Section */}
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-mafad-cyan">
                <Code className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  MAFAD Technology Limited
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Innovating Through
                <span className="text-mafad-cyan block mt-2">
                  Technology & ICT
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl">
                Delivering world-class software, training, and renewable energy
                solutions to businesses, schools, and government institutions
                across Nigeria.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  href="/contact"
                  className="bg-mafad-cyan text-mafad-navy hover:bg-mafad-cyan/90 px-8 py-4 text-lg group"
                >
                  Request Service
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                {/* <Button
                  href="/nigeria/ict-academy"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-mafad-navy px-8 py-4 text-lg"
                >
                  Explore Training
                </Button> */}
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 pt-6">
                {certifications.map((cert, idx) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center space-x-1 bg-white/10 px-3 py-1.5 rounded-full"
                    >
                      <Icon className="w-4 h-4 text-mafad-cyan" />
                      <span className="text-sm text-white/90">{cert.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="lg:pl-12">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                    >
                      <Icon className="w-8 h-8 text-mafad-cyan mb-3" />
                      <div className="text-3xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-mafad-navy mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive technology solutions tailored to your business needs
            </p>
            <div className="w-24 h-1 bg-mafad-cyan mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={idx}
                  className="group hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-4`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-mafad-navy mb-2 group-hover:text-mafad-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <CheckCircle className="w-4 h-4 text-mafad-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Target Markets */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-mafad-cyan font-semibold uppercase tracking-wider text-sm">
                Who We Serve
              </span>
              <h2 className="text-4xl font-bold text-mafad-navy mt-2 mb-6">
                Trusted by Organizations Across Sectors
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From SMEs to government institutions, we deliver tailored
                technology solutions that drive efficiency, growth, and
                innovation.
              </p>

              <div className="space-y-6">
                {targetMarkets.map((market, idx) => {
                  const Icon = market.icon;
                  return (
                    <div key={idx} className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-mafad-cyan/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-mafad-cyan" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-mafad-navy mb-2">
                          {market.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {market.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {market.features.map((feature, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="lg:pl-12">
              <div className="bg-gradient-to-br from-mafad-navy to-mafad-navy/90 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Why Choose MAFAD Technology?
                </h3>

                <div className="space-y-6">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-mafad-cyan/20 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-mafad-cyan" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">CAC Registered</h4>
                      <p className="text-sm text-gray-300">
                        Fully compliant Nigerian enterprise
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-mafad-cyan/20 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-mafad-cyan" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Experienced Team</h4>
                      <p className="text-sm text-gray-300">
                        4+ years of proven delivery
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-mafad-cyan/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-mafad-cyan" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Strategic Location</h4>
                      <p className="text-sm text-gray-300">
                        Owo & Akure, Ondo State
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-mafad-cyan/20 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-mafad-cyan" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Quality Assured</h4>
                      <p className="text-sm text-gray-300">
                        ISO 9001:2015 certified processes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-mafad-cyan hover:text-white transition-colors group"
                  >
                    Schedule a consultation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mafad-cyan">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-mafad-navy mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-mafad-navy/80 mb-8">
              Partner with MAFAD Technology for innovative solutions that drive
              growth and efficiency.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                href="/contact"
                className="bg-mafad-navy text-white hover:bg-mafad-navy/90 px-8 py-4 text-lg"
              >
                Get Started Today
              </Button>
              <Button
                href="/nigeria/ict-academy"
                variant="outline"
                className="border-2 border-mafad-navy text-mafad-navy hover:bg-mafad-navy hover:text-white px-8 py-4 text-lg"
              >
                Explore Training Programs
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
