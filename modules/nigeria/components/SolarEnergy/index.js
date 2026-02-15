"use client";

import {
  Sun,
  Zap,
  Battery,
  Home,
  Building2,
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  MapPin,
  Calendar,
  Star,
  Settings,
  Wrench,
  Leaf,
  TrendingUp,
  Phone,
  MessageCircle,
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// WhatsApp Configuration
const WHATSAPP_NUMBER = "2348123456789"; // Replace with actual number
const WHATSAPP_MESSAGE =
  "Hello! I'm interested in your Solar Energy solutions. Please provide more information.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description:
      "Complete home solar solutions for uninterrupted power supply and energy independence.",
    features: [
      "Roof-top Solar Panels",
      "Home Battery Systems",
      "Inverter Installation",
      "Energy Audit",
    ],
    price: "From ₦850,000",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Scalable solar solutions for businesses, reducing operational costs and carbon footprint.",
    features: [
      "Industrial Solar Arrays",
      "3-Phase Inverters",
      "Battery Banks",
      "Grid-Tie Systems",
    ],
    price: "Custom Quote",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Battery,
    title: "Battery Backup",
    description:
      "Reliable power backup systems for homes and offices during outages.",
    features: [
      "Lithium-ion Batteries",
      "UPS Systems",
      "Battery Maintenance",
      "Capacity Upgrades",
    ],
    price: "From ₦350,000",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Settings,
    title: "Installation & Maintenance",
    description:
      "Professional installation and ongoing maintenance for optimal system performance.",
    features: [
      "Expert Installation",
      "Preventive Maintenance",
      "24/7 Support",
      "System Monitoring",
    ],
    price: "Service Based",
    color: "from-purple-500 to-pink-500",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Uninterrupted Power",
    description:
      "24/7 electricity supply, no more generator noise and fuel costs",
  },
  {
    icon: TrendingUp,
    title: "Reduce Costs",
    description: "Save up to 70% on electricity bills, ROI within 3-4 years",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce carbon footprint, qualify for green energy incentives",
  },
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "Comprehensive warranty on panels, inverters, and batteries",
  },
];

const projects = [
  {
    title: "Residential Estate",
    location: "Akure, Ondo State",
    capacity: "15kW System",
    homes: "12 Units",
    image: "/images/solar/project1.jpg",
    status: "Completed 2024",
  },
  {
    title: "Shopping Complex",
    location: "Owo, Ondo State",
    capacity: "25kW System",
    homes: "20+ Shops",
    image: "/images/solar/project2.jpg",
    status: "Completed 2024",
  },
  {
    title: "Private School",
    location: "Ondo City",
    capacity: "10kW System",
    homes: "8 Classrooms",
    image: "/images/solar/project3.jpg",
    status: "Ongoing",
  },
];

const testimonials = [
  {
    name: "Chief Adebayo O.",
    location: "Akure",
    text: "MAFAD installed a 10kW solar system at my residence. No more generator noise and my electricity bill has dropped by 80%. Professional team from start to finish!",
    rating: 5,
    project: "Residential Solar",
  },
  {
    name: "Mrs. Grace E.",
    location: "Owo",
    text: "We installed solar at our supermarket. Even with 18 hours of daily operation, we haven't had a single outage. The battery backup system is exceptional.",
    rating: 5,
    project: "Commercial Solar",
  },
];

export default function SolarEnergy() {
  return (
    <>
      {/* Hero Section with WhatsApp CTA */}
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
                <Sun className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Solar & Renewable Energy
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Power Your Future.
                <span className="text-mafad-cyan block mt-2">
                  Clean, Renewable Energy
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl">
                Professional solar installation and renewable energy solutions
                for homes and businesses in Nigeria. Reduce costs, eliminate
                outages, and go green today.
              </p>

              {/* WhatsApp CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#25D366] text-white hover:bg-[#25D366]/90 px-8 py-4 text-lg rounded-xl font-semibold transition-all group"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Quote on WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={whatsappUrl}
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
                  <Shield className="w-4 h-4 text-mafad-cyan" />
                  <span className="text-sm">5-Year Warranty</span>
                </div>
                <div className="flex items-center space-x-1 bg-white/10 px-3 py-1.5 rounded-full">
                  <Users className="w-4 h-4 text-mafad-cyan" />
                  <span className="text-sm">50+ Installations</span>
                </div>
                <div className="flex items-center space-x-1 bg-white/10 px-3 py-1.5 rounded-full">
                  <MapPin className="w-4 h-4 text-mafad-cyan" />
                  <span className="text-sm">Ondo State & Beyond</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="lg:pl-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Sun className="w-8 h-8 text-mafad-cyan mb-3" />
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-gray-300">Systems Installed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Battery className="w-8 h-8 text-mafad-cyan mb-3" />
                  <div className="text-3xl font-bold">200kWh+</div>
                  <div className="text-sm text-gray-300">Daily Generation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Users className="w-8 h-8 text-mafad-cyan mb-3" />
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-gray-300">Satisfied Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Clock className="w-8 h-8 text-mafad-cyan mb-3" />
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="text-center p-6">
                  <div className="w-16 h-16 bg-mafad-cyan/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-mafad-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-mafad-navy mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-mafad-navy mb-4">
              Our Solar Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Customized solar energy systems for every need and budget
            </p>
            <div className="w-24 h-1 bg-mafad-cyan mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={idx}
                  className="group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <span className="bg-mafad-cyan/10 text-mafad-cyan px-3 py-1 rounded-full text-sm font-semibold">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-mafad-navy mb-2 group-hover:text-mafad-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
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
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-mafad-cyan font-semibold hover:text-mafad-navy transition-colors group"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Projects Section */}
      {/* <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-mafad-navy mb-4">
              Recent Installations
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by homes and businesses across Ondo State
            </p>
            <div className="w-24 h-1 bg-mafad-cyan mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-48 bg-gradient-to-br from-mafad-navy to-mafad-navy/80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sun className="w-12 h-12 text-mafad-cyan/30" />
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs text-white">{project.status}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-mafad-navy mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {project.location}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-mafad-cyan">
                      {project.capacity}
                    </span>
                    <span className="text-sm text-gray-600">
                      {project.homes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-mafad-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from satisfied solar customers
            </p>
            <div className="w-24 h-1 bg-mafad-cyan mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-mafad-navy">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                  <span className="text-xs bg-mafad-cyan/10 text-mafad-cyan px-2 py-1 rounded-full">
                    {testimonial.project}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-mafad-cyan font-semibold uppercase tracking-wider text-sm">
                Why MAFAD Solar
              </span>
              <h2 className="text-4xl font-bold text-mafad-navy mt-2 mb-6">
                Your Trusted Solar Partner in Nigeria
              </h2>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-mafad-cyan/10 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-mafad-cyan" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-mafad-navy">
                      Certified Installers
                    </h3>
                    <p className="text-gray-600">
                      NAPTIN and REA certified solar engineers
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-mafad-cyan/10 rounded-lg flex items-center justify-center">
                      <Battery className="w-5 h-5 text-mafad-cyan" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-mafad-navy">
                      Premium Components
                    </h3>
                    <p className="text-gray-600">
                      Only Tier-1 solar panels and lithium batteries
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-mafad-cyan/10 rounded-lg flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-mafad-cyan" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-mafad-navy">
                      5-Year Maintenance
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive service and support package
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-mafad-cyan/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-mafad-cyan" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-mafad-navy">
                      Quick Installation
                    </h3>
                    <p className="text-gray-600">
                      Most systems installed within 3-5 days
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
                    <h3 className="text-xl font-bold">Ready to Go Solar?</h3>
                    <p className="text-white/90">Get your free quote today</p>
                  </div>
                </div>

                <p className="text-white/90 mb-6">
                  Our solar experts are available on WhatsApp to answer your
                  questions, provide quotes, and schedule site inspections.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-white/90" />
                    <span className="text-sm">
                      Free consultation & site assessment
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-white/90" />
                    <span className="text-sm">Custom system design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-white/90" />
                    <span className="text-sm">Financing options available</span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-white text-[#25D366] hover:bg-gray-100 px-6 py-4 rounded-xl font-semibold transition-all group"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with Solar Expert
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      {/* <section className="py-20 bg-mafad-navy">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Sun className="w-12 h-12 text-mafad-cyan mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stop Paying for Unreliable Power
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join hundreds of satisfied customers who've made the switch to
              clean, affordable solar energy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] text-white hover:bg-[#25D366]/90 px-8 py-4 text-lg rounded-xl font-semibold transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Calculate Your Savings
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-mafad-navy px-8 py-4 text-lg rounded-xl font-semibold transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Request Call Back
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              ⚡ Typical response time: &lt; 5 minutes on WhatsApp
            </p>
          </div>
        </Container>
      </section> */}
    </>
  );
}
