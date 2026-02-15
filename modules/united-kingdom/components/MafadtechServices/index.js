"use client";

import {
  Building2,
  Code,
  School,
  Truck,
  Globe,
  Ship,
  Package,
  Users,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Shield,
  Award,
  MapPin,
  Calendar,
  Clock,
  FileText,
  AlertCircle,
  Scale,
  BookOpen,
  Settings,
  Cpu,
  Ship as ShipIcon,
  Container as ContainerIcon,
  Sprout,
  Wool,
  Shirt,
  Factory,
  Hammer,
} from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

// WhatsApp Configuration
const WHATSAPP_NUMBER = "447123456789"; // Replace with actual UK number
const WHATSAPP_MESSAGE =
  "Hello! I'm interested in MAFADTECH Services UK. Please provide more information.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const services = [
  {
    id: "technology-consultancy",
    title: "Technology Consultancy",
    sic: "62020",
    icon: Code,
    description:
      "Professional IT consultancy, system implementation, and support services tailored to your business needs.",
    color: "from-blue-600 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    features: [
      "IT strategy and planning",
      "System implementation and integration",
      "Technical support and maintenance",
      "Digital transformation consulting",
      "Software architecture review",
      "Cloud solutions and migration",
    ],
    requirements: [
      "Clients must clearly define their requirements to facilitate efficient project delivery",
      "All services are offered on an 'as-is' basis unless specific guarantees are made in writing",
    ],
  },
  {
    id: "training-services",
    title: "Training Services",
    sic: "85590",
    icon: School,
    description:
      "Tailored training programs covering various professional and personal development areas.",
    color: "from-purple-600 to-pink-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    features: [
      "Professional development courses",
      "Technical skills training",
      "Leadership and management programs",
      "Custom curriculum design",
      "Corporate training solutions",
      "Certification preparation",
    ],
    policies: [
      "All training content and materials provided remain the property of the Company",
      "Materials may not be copied or reproduced without written consent",
      "Clients must notify us of cancellations or rescheduling requests in advance",
      "Cancellation policy applies as outlined in the agreement",
    ],
  },
  {
    id: "shipping-services",
    title: "Shipping Services",
    sic: "50200",
    icon: Ship,
    description:
      "Freight transport services by sea and coastal freight water transport.",
    color: "from-green-600 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    features: [
      "Sea freight transportation",
      "Coastal freight water transport",
      "Container shipping",
      "Bulk cargo handling",
      "Customs documentation support",
      "Tracking and monitoring",
    ],
    requirements: [
      "Clients must provide detailed information regarding the type, weight, and destination of goods",
      "Transportation is subject to terms agreed in writing before shipment",
      "We reserve the right to decline hazardous or prohibited goods",
    ],
  },
  {
    id: "sales-purchases",
    title: "Sales & Purchases",
    sic: "46110",
    icon: Package,
    description:
      "Acting as agents in the sale and purchase of agricultural raw materials, live animals, textiles, and semi-finished goods.",
    color: "from-amber-600 to-orange-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    features: [
      "Agricultural raw materials trading",
      "Live animal brokerage",
      "Textile raw materials",
      "Semi-finished goods",
      "Supplier sourcing",
      "Market analysis",
    ],
    policies: [
      "Returns and refunds are handled per the Company's Returns Policy",
      "Quality verification available upon request",
      "Competitive commission structure",
    ],
  },
];

const stats = [
  { label: "SIC Codes", value: "4", icon: FileText },
  { label: "Active Services", value: "4", icon: Settings },
  { label: "UK Registered", value: "2025", icon: Calendar },
  { label: "Response Time", value: "< 2hrs", icon: Clock },
];

const sicCodes = [
  {
    code: "62020",
    description: "Information technology consultancy activities",
    icon: Code,
  },
  {
    code: "85590",
    description: "Other education not elsewhere classified",
    icon: School,
  },
  {
    code: "46110",
    description:
      "Agents selling agricultural raw materials, livestock, textile raw materials and semi-finished goods",
    icon: Sprout,
  },
  {
    code: "50200",
    description: "Sea and coastal freight water transport",
    icon: Ship,
  },
];

export default function MafadtechServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mafad-navy via-mafad-navy to-mafad-navy/95 text-white overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-mafad-cyan">
                <Building2 className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  MAFADTECH Services Limited
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                UK-Based Professional
                <span className="text-mafad-cyan block mt-2">
                  Services & Consultancy
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl">
                IT consultancy, professional training, shipping services, and
                trading agency for UK businesses and diaspora-led enterprises.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-mafad-cyan text-mafad-navy hover:bg-mafad-cyan/90 px-8 py-4 text-lg rounded-xl font-semibold transition-all group"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enquire on WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`${whatsappUrl}&text=${encodeURIComponent("Hello! I'd like to discuss IT consultancy services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-mafad-navy px-8 py-4 text-lg rounded-xl font-semibold transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 pt-6">
                <div className="flex items-center space-x-1 bg-white/10 px-3 py-1.5 rounded-full">
                  <Award className="w-4 h-4 text-mafad-cyan" />
                  <span className="text-sm">Companies House Registered</span>
                </div>
                <div className="flex items-center space-x-1 bg-white/10 px-3 py-1.5 rounded-full">
                  <FileText className="w-4 h-4 text-mafad-cyan" />
                  <span className="text-sm">
                    SIC: 62020, 85590, 46110, 50200
                  </span>
                </div>
                <div className="flex items-center space-x-1 bg-white/10 px-3 py-1.5 rounded-full">
                  <MapPin className="w-4 h-4 text-mafad-cyan" />
                  <span className="text-sm">Hull, England</span>
                </div>
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
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SIC Codes Overview */}
      <section className="py-12 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sicCodes.map((sic, idx) => {
              const Icon = sic.icon;
              return (
                <div key={idx} className="text-center p-4">
                  <div className="w-12 h-12 bg-mafad-cyan/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-6 h-6 text-mafad-cyan" />
                  </div>
                  <p className="font-bold text-mafad-navy">{sic.code}</p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {sic.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Services Section with Anchor Links */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-mafad-cyan font-semibold uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-mafad-navy mt-2 mb-4">
              Professional UK Services
            </h2>
            <p className="text-xl text-gray-600">
              Fully registered with Companies House, compliant with UK
              regulations
            </p>
            <div className="w-24 h-1 bg-mafad-cyan mx-auto mt-6" />
          </div>

          <div className="space-y-12">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <div className="p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 rounded-xl ${service.bgColor} p-4 flex items-center justify-center`}
                        >
                          <Icon className={`w-8 h-8 ${service.textColor}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-mafad-navy">
                            {service.title}
                          </h3>
                          <p
                            className={`text-sm font-mono ${service.textColor}`}
                          >
                            SIC {service.sic}
                          </p>
                        </div>
                      </div>
                      <a
                        href={`${whatsappUrl}&text=${encodeURIComponent(`Hello! I'm interested in ${service.title} services. Please provide more information.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center ${service.textColor} font-semibold hover:opacity-80 transition-opacity`}
                      >
                        Enquire about this service
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>

                    <p className="text-gray-600 text-lg mb-6">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-mafad-navy mb-3 flex items-center">
                          <CheckCircle className="w-4 h-4 text-mafad-cyan mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start text-sm text-gray-600"
                            >
                              <span className="w-1.5 h-1.5 bg-mafad-cyan rounded-full mt-1.5 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        {service.requirements && (
                          <>
                            <h4 className="font-semibold text-mafad-navy mb-3 flex items-center">
                              <AlertCircle className="w-4 h-4 text-amber-500 mr-2" />
                              Important Requirements
                            </h4>
                            <ul className="space-y-2">
                              {service.requirements.map((req, i) => (
                                <li
                                  key={i}
                                  className="flex items-start text-sm text-gray-600"
                                >
                                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                        {service.policies && (
                          <>
                            <h4 className="font-semibold text-mafad-navy mb-3 flex items-center">
                              <Scale className="w-4 h-4 text-mafad-cyan mr-2" />
                              Policies
                            </h4>
                            <ul className="space-y-2">
                              {service.policies.map((policy, i) => (
                                <li
                                  key={i}
                                  className="flex items-start text-sm text-gray-600"
                                >
                                  <span className="w-1.5 h-1.5 bg-mafad-cyan rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                  {policy}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-mafad-navy mb-6">
                Company Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building2 className="w-5 h-5 text-mafad-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-mafad-navy">
                      MAFADTECH Services Limited
                    </p>
                    <p className="text-gray-600">Company No: 16173180</p>
                    <p className="text-sm text-gray-500">
                      Incorporated: 9 January 2025
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-mafad-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-mafad-navy">
                      Registered Address
                    </p>
                    <p className="text-gray-600">
                      29, Imperia Way, Hull, England HU9 5EQ
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-mafad-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-mafad-navy">SIC Codes</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                        62020 - IT Consultancy
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                        85590 - Training
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                        46110 - Sales Agency
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                        50200 - Sea Transport
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-mafad-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-mafad-navy">
                      Target Market
                    </p>
                    <p className="text-gray-600">
                      SMEs, individuals, and diaspora-led businesses in the UK
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Card */}
            <div className="lg:pl-12">
              <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-3xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Speak to Our UK Team</h3>
                    <p className="text-white/90">Direct WhatsApp line</p>
                  </div>
                </div>

                <p className="text-white/90 mb-6">
                  Our UK-based team is available on WhatsApp to answer your
                  questions about IT consultancy, training, shipping, and
                  trading services.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-white/90" />
                    <span className="text-sm">IT consultancy inquiries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-white/90" />
                    <span className="text-sm">
                      Training program information
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-white/90" />
                    <span className="text-sm">Shipping quotes & trading</span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-white text-[#25D366] hover:bg-gray-100 px-6 py-4 rounded-xl font-semibold transition-all group"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message Us on WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SOC Codes */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-xl font-bold text-mafad-navy mb-4">
              UK Occupation (SOC) Codes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="font-mono font-bold text-mafad-cyan">2136</p>
                <p className="text-sm text-gray-700">
                  Programmers and Software Development Professionals
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="font-mono font-bold text-mafad-cyan">2139</p>
                <p className="text-sm text-gray-700">
                  Information Technology Professionals (NEC)
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="font-mono font-bold text-mafad-cyan">3545</p>
                <p className="text-sm text-gray-700">
                  Sales Accounts and Business Development Managers
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="font-mono font-bold text-mafad-cyan">1136</p>
                <p className="text-sm text-gray-700">
                  Information Technology and Telecommunications Directors
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-mafad-cyan">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Building2 className="w-12 h-12 text-mafad-navy mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-mafad-navy mb-6">
              Ready to Work With Our UK Team?
            </h2>
            <p className="text-lg text-mafad-navy/80 mb-8">
              Get in touch via WhatsApp for fastest response. We're here to help
              with all your UK business needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-mafad-navy text-white hover:bg-mafad-navy/90 px-8 py-4 text-lg rounded-xl font-semibold transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enquire on WhatsApp
              </a>
              <a
                href={`${whatsappUrl}&text=${encodeURIComponent("Hello! I'd like to discuss training programs.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-mafad-navy hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold transition-all"
              >
                <School className="w-5 h-5 mr-2" />
                Training Inquiry
              </a>
            </div>
            <p className="text-sm text-mafad-navy/70 mt-6">
              ⚡ Typical response time: within 2 hours
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
